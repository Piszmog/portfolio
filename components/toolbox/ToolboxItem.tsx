import { Center, Chip, Group, Paper, Text } from '@mantine/core';
import React from 'react';

type ToolboxItemProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

const ToolboxItem = ({ icon, title, items }: ToolboxItemProps) => {
  return (
    <Paper padding='md' shadow='xs' radius='xl' style={{ width: 340, margin: 'auto' }} withBorder>
      <Center>
        <Text weight={600}>{icon} {title}</Text>
      </Center>
      <Center mt={10}>
        <Group position='center'>
          {
            items.map((item, index) =>
              <Chip key={index} value={item} checked variant='outline'>
                {item}
              </Chip>,
            )
          }
        </Group>
      </Center>
    </Paper>
  );
};

export default ToolboxItem;
