import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getUser } from '../lib/github';
import PinnedRepos from '../components/pinnedRepos/PinnedRepos';
import LanguageProgress from '../components/languageProgress/LanguageProgress';
import History from '../components/history/History';
import Toolbox from '../components/toolbox/Toolbox';
import About from '../components/about/About';
import HelloCode from '../components/helloCode/HelloCode';
import { Center, Divider } from '@mantine/core';
import jerry from '../public/jerry.jpg';
import { getUserData } from '../lib/db';
import getIcon from '../lib/icon';
import AppHeader from '../components/layout/AppHeader';
import Main from '../components/layout/Main';
import { compare } from '../lib/date';

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUser(process.env.GITHUB_USERNAME!);
  const data = await getUserData(process.env.USER_NAME!);
  return {
    props: {
      user,
      data,
    },
    revalidate: 7200,
  };
};

const Home: NextPage = ({ user, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const workData: any[] = [];

  data.work.forEach((work: any) => {
    work.roles.forEach((role: any) => {
      workData.push({
        company: work.company,
        changeReason: role.changeReason,
        description: role.description,
        details: role.details,
        end: role.end,
        start: role.start,
        title: role.title,
      });
    });
  });

  const history = [...data.education, ...workData].sort((a, b) => -compare(a.end, b.end));

  return (
    <Main header={<AppHeader title={data.name} username={data.githubUsername} />}>
      <HelloCode style={{ height: 300 }} />
      <Divider mt='xl' mb='xl' />
      <Center>
        <h1>About</h1>
      </Center>
      <Center>
        <About
          src={jerry}
          title={{ icon: getIcon(data.about.title.icon), value: data.about.title.value }}
          subtitles={data.about.subtitles.map((subtitle: any) => ({
            icon: getIcon(subtitle.icon),
            value: subtitle.value,
          }))}
          description={data.about.description}
        />
      </Center>
      <Divider mt='xl' mb='xl' />
      <Center>
        <h1>Top Repositories</h1>
      </Center>
      <PinnedRepos repos={user.pinnedItems} />
      <Divider mt='xl' mb='xl' />
      <Center>
        <h1>Languages Used</h1>
      </Center>
      <LanguageProgress repos={user.repoLanguages} />
      <Divider mt='xl' mb='xl' />
      <Center>
        <h1>History</h1>
      </Center>
      <Center>
        <History
          active={1}
          items={history.map((item: any) => {
            let description = '';
            if (item.major) {
              description = `Major: ${item.major}`;
              if (item.minor) {
                description += `\nMinor: ${item.minor}`;
              }
            } else {
              description = item.description;
            }

            return {
              icon: getIcon(item.changeReason ?? 'edu'),
              title: item.title ?? `${item.name}, ${item.location}`,
              description: description,
              start: item.start,
              end: item.end,
            };
          })}
        />
      </Center>
      <Divider mt='xl' mb='xl' />
      <Center>
        <h1>Toolbox</h1>
      </Center>
      <Toolbox
        items={data.toolbox.sort((a: any, b: any) => a.type >= b.type).map((tool: any) => ({
          icon: getIcon(tool.type),
          title: tool.type.toUpperCase(),
          items: tool.values,
        }))}
      />
    </Main>
  );
};

export default Home;
