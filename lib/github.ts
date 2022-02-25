import { graphql } from '@octokit/graphql';
import { User } from './models';

const client = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_API}`,
  },
  request: {
    timeout: 5000,
  },
});

export const getUser = async (username: string): Promise<User> => {
  return client(
    `query GetUser($login: String!) {
  user(login: $login) {
    name
    pinnedItems(first: 10) {
      nodes {
        ... on Repository {
          name
          url
          stargazerCount
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
          languages(first: 10) {
            nodes {
              name
              color
            }
          }
          forkCount
          homepageUrl
          description
        }
      }
    }
    repositories(first: 50) {
      nodes {
        name
        languages(first: 10) {
          nodes {
            name
            color
          }
        }
      }
    }
    url
    location
  }
}`,
    {
      login: username,
    },
  )
    .then((res: any) => res.user)
    .then(user => {
      const pinnedItems = user.pinnedItems.nodes.map((item: any) => {
        return {
          name: item.name,
          url: item.url,
          forks: item.forkCount,
          stars: item.stargazerCount,
          topics: item.repositoryTopics.nodes.map((t: any) => t.topic.name),
          languages: item.languages.nodes.map((l: any) => ({
            name: l.name,
            color: l.color,
          })),
          homepageUrl: item.homepageUrl,
          description: item.description,
        };
      });
      const repoLanguages = user.repositories.nodes.map((node: any) => {
        return {
          name: node.name,
          languages: node.languages.nodes.map((l: any) => ({
            name: l.name,
            color: l.color,
          })),
        };
      });
      return {
        name: user.name,
        url: user.url,
        pinnedItems,
        repoLanguages,
        location: user.location,
      };
    });
};
