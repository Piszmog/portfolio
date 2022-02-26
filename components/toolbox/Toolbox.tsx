import React from 'react';
import { Group } from '@mantine/core';
import ToolboxItem from './ToolboxItem';

type ToolboxProps = {
  items: {
    icon: React.ReactNode,
    title: string,
    items: string[],
  }[];
}

const Toolbox = ({ items }: ToolboxProps) => {
  return (
    <Group position='apart' mt='sm'>
      {
        items.map((item, index) =>
          <ToolboxItem key={index} {...item} />,
        )
      }
    </Group>
  );
};

export default Toolbox;
