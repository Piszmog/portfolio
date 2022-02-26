import { Badge, Group, Paper, Text, useMantineTheme } from '@mantine/core';
import { Language } from '../../lib/models';
import getIcon from '../../lib/icon';

type PinnedRepoProps = {
  name: string;
  url: string;
  stars: number;
  forks: number;
  homepageUrl: string;
  description: string;
  topics: string[];
  languages: Language[];
};

const PinnedRepo = (props: PinnedRepoProps) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Paper
        shadow='sm'
        padding='lg'
        href={props.url}
        target='_blank'
        component='a'
        radius='xl'
        withBorder
      >
        <Text weight={500}>{props.name}</Text>
        <Group position='left' mb='xs'>
          <div>
            {getIcon('star')} {props.stars}
          </div>
          <div>
            {getIcon('fork')} {props.forks}
          </div>
        </Group>

        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.description}
        </Text>
        <Group style={{ marginTop: 10 }}>
          {
            props.languages.map(l => {
              return <Badge
                key={l.name}
                variant='outline'
              >
                {l.name}
              </Badge>;
            })
          }
        </Group>
      </Paper>
    </div>
  );
};

export default PinnedRepo;
