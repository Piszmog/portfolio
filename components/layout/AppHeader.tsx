import { ActionIcon, Group, Header, ThemeIcon, Title } from '@mantine/core';
import ColorModeButton from './ColorModeButton';
import getIcon from '../../lib/icon';

type AppHeaderProps = {
  title: string;
  username: string;
};

const AppHeader = ({ title, username }: AppHeaderProps) => {
  return (
    <Header height={60} padding='xs'>
      <Group
        style={{
          height: '100%',
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        position='apart'
      >
        <Title order={3}>
          <ThemeIcon style={{ marginRight: 10 }} radius='lg'>
            {getIcon('code')}
          </ThemeIcon>
          {title}
        </Title>
        <Group>
          <ColorModeButton />
          <ActionIcon variant='outline' radius='lg' component='a' href={`https://github.com/${username}`}
                      target='_blank'>
            {getIcon('github')}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default AppHeader;
