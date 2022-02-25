import { RepoLanguage } from '../../lib/models';
import { Badge, Group, Progress } from '@mantine/core';

type LanguageRingProps = {
  repos: RepoLanguage[];
};

type LanguageStat = {
  language: string;
  total: number;
  color: string;
};

const LanguageProgress = ({ repos }: LanguageRingProps) => {
  const total = repos.reduce((acc, cur) => acc + cur.languages.length, 0);
  const stats = new Map<string, LanguageStat>();
  repos.forEach(repo => {
    repo.languages.forEach(language => {
      if (!stats.has(language.name)) {
        stats.set(language.name, {
          language: language.name,
          total: 0,
          color: language.color,
        });
      }
      stats.get(language.name)!.total += 1;
    });
  });
  return (
    <>
      <Progress
        mt='lg'
        size='xl'
        radius='xl'
        sections={
          // @ts-ignore
          [...stats.values()].sort((a, b) => a.total < b.total).map(stat => ({
            value: stat.total / total * 100,
            color: stat.color,
          }))
        }
      />
      <Group mt={10} position='center' mb={10}>
        {
          // @ts-ignore
          [...stats.values()].sort((a, b) => a.total < b.total)
            .map(stat =>
              <Badge
                key={stat.language}
                variant='dot'
                color={stat.color}
                styles={{
                  dot: {
                    borderColor: 'transparent',
                    '::before': {
                      backgroundColor: stat.color,
                    },
                  },
                }}
              >
                {stat.language}
              </Badge>,
            )
        }
      </Group>
    </>
  );
};

export default LanguageProgress;
