import { ActionIcon, Group, Paper, Text } from '@mantine/core';
import getIcon from '../../lib/icon';

const Footer = () => {
  return (
    <Paper withBorder padding='md'>
      <Group position='apart'>
        <Text size='sm' color='dimmed'>
          Written using Next.js {getIcon('nextjs')}, backed by Firebase {getIcon('firebase')}, and deployed on
          Vercel {getIcon('vercel')}.
        </Text>
        <ActionIcon variant='outline' radius='lg' component='a' href='https://github.com/Piszmog/portfolio'
                    target='_blank'>
          {getIcon('github')}
        </ActionIcon>
      </Group>
    </Paper>
  );
};

export default Footer;
