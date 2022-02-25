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
    <Grid gutter='md' mt='sm'>
      {
        items.map((item, index) =>
          <Grid.Col md={6} lg={4} key={index}>
            <ToolboxItem {...item} />
          </Grid.Col>,
        )
      }
    </Grid>
  );
};

export default Toolbox;
