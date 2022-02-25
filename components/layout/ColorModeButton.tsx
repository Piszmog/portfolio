import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { FaMoon, FaSun } from 'react-icons/fa';

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
        <FaSun style={{ width: 18, height: 18 }} />
      ) : (
        <FaMoon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
};

export default ColorModeButton;
