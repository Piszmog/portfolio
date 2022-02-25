import { RepoLanguage } from '../../lib/models';
import { Progress } from '@mantine/core';

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
    <Progress
      mt='lg'
      size='xl'
      radius='xl'
      styles={{
        label: { color: 'black' },
      }}
      sections={
        // @ts-ignore
        [...stats.values()].sort((a, b) => a.total < b.total).map(stat => ({
          label: stat.language,
          value: stat.total / total * 100,
          color: stat.color,
        }))
      }
    />
  );
};

export default LanguageProgress;
