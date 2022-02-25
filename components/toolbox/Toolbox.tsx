import React from 'react';
import { Grid } from '@mantine/core';
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
    <Grid gutter='md' mt={10}>
      {
        items.map((item, index) =>
          <Grid.Col span={4}>
            <ToolboxItem key={index} {...item} />
          </Grid.Col>,
        )
      }
    </Grid>
  );
};

export default Toolbox;
