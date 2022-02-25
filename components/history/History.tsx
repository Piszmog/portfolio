import { Text, Timeline } from '@mantine/core';
import React from 'react';

type HistoryProps = {
  active?: number;
  items: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    start: string;
    end: string;
    lineVariant?: 'solid' | 'dashed' | 'dotted';
  }>;
};

const History = ({ active, items }: HistoryProps) => {
  return (
    <Timeline active={active} bulletSize={24} lineWidth={2} mt='sm'>
      {
        items.map((item, index) => {
          return (
            <Timeline.Item
              key={index}
              bullet={item.icon}
              title={item.title}
              lineVariant={item.lineVariant}
            >
              <Text color='dimmed' size='sm'>{item.description}</Text>
              <Text size='xs' style={{ marginTop: 4 }}>{item.start} - {item.end}</Text>
            </Timeline.Item>
          );
        })
      }
    </Timeline>
  );
};

export default History;
