import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getUser } from '../lib/github';
import PinnedRepos from '../components/pinnedRepos/PinnedRepos';
import LanguageProgress from '../components/languageProgress/LanguageProgress';
import History from '../components/history/History';
import Toolbox from '../components/toolbox/Toolbox';
import About from '../components/about/About';
import HelloCode from '../components/helloCode/HelloCode';
import { FaClock } from 'react-icons/fa';
import { Center, Divider } from '@mantine/core';
import jerry from '../public/jerry.jpg';
import { getUserData } from '../lib/db';
import getIcon from '../lib/icon';
import AppHeader from '../components/layout/AppHeader';
import Main from '../components/layout/Main';

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
  const history = [...data.education, ...data.work];

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
          // items={}
          items={[
            {
              icon: <FaClock />,
              title: 'Joined GitHub',
              description: 'Joined GitHub on May 1, 2020',
              start: 'Dec 2018',
              end: 'May 2020',
            },
            {
              icon: <FaClock />,
              title: 'Joined GitHub',
              description: 'Joined GitHub on May 1, 2020',
              start: 'Dec 2018',
              end: 'May 2020',
            },
          ]}
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
