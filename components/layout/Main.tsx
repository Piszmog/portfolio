import React from 'react';
import { AppShell } from '@mantine/core';

interface HomePageProps extends React.HTMLProps<HTMLHtmlElement> {
  header?: React.ReactElement;
}

const Main = (props: HomePageProps) => {
  return (
    <AppShell
      padding='md'
      // navbar={<Navbar width={{ base: 300 }} height={500} padding="xs">{/* Navbar content */}</Navbar>}
      header={props.header}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {props.children}
    </AppShell>
  );
};

export default Main;
