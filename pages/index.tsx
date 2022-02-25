import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getUser } from '../lib/github';
import PinnedRepos from '../components/pinnedRepos/PinnedRepos';
import LanguageProgress from '../components/languageProgress/LanguageProgress';
import History from '../components/history/History';
import Toolbox from '../components/toolbox/Toolbox';
import About from '../components/about/About';
import HelloCode from '../components/helloCode/HelloCode';
import { FaClock, FaCode } from 'react-icons/fa';
import { Center } from '@mantine/core';

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUser('Piszmog');
  return {
    props: {
      user,
    },
    revalidate: 7200,
  };
};

const Home: NextPage = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <HelloCode />
      <About />
      <PinnedRepos repos={user.pinnedItems} />
      <LanguageProgress repos={user.repoLanguages} />
      <Center>
        <History active={1} items={[
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
        ]} />
      </Center>
      <Toolbox
        items={[
          {
            title: 'Frontend',
            icon: <FaCode />,
            items: ['React', 'Angular', 'Svelte'],
          },
          {
            title: 'Backend',
            icon: <FaCode />,
            items: ['Java', 'Go', 'Rust'],
          },
        ]}
      />
    </div>
  );
};

export default Home;
