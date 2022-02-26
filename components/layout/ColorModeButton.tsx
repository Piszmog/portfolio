import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import getIcon from '../../lib/icon';

const ColorModeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant='outline'
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
      radius='lg'
    >
      {dark ? (
        getIcon('sun')
      ) : (
        getIcon('moon')
      )}
    </ActionIcon>
  );
};

export default ColorModeButton;
