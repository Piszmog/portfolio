import { List, Text, Timeline } from '@mantine/core';
import React from 'react';

type HistoryProps = {
  active?: number;
  items: Array<{
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    description: string;
    details?: string[];
    start: string;
    end: string;
    lineVariant?: 'solid' | 'dashed' | 'dotted';
  }>;
};

const History = ({ active, items }: HistoryProps) => {
  return (
    <Timeline active={active} bulletSize={24} lineWidth={2} mt='sm' style={{ maxWidth: 350 }}>
      {
        items.map((item, index) => {
          return (
            <Timeline.Item
              key={index}
              bullet={item.icon}
              title={
                <Text>
                  {item.title}
                  <Text color='dimmed' size='md' component='span'>
                    , {item.subtitle}
                  </Text>
                </Text>
              }
              lineVariant={item.lineVariant}
            >
              {
                item.description.split('\n').map((line, i) => {
                  return (
                    <Text key={i} color='dimmed' size='sm'>
                      {line}
                    </Text>
                  );
                })
              }
              {
                item.details ? (
                  <List withPadding size='sm' style={{color: 'gray'}}>
                    {
                      item.details.map((detail, i) => {
                        return (
                          <List.Item key={i}>
                            {detail}
                          </List.Item>
                        );
                      })
                    }
                  </List>
                ) : <></>
              }
              <Text size='xs' style={{ marginTop: 4 }}>{item.start} - {item.end}</Text>
            </Timeline.Item>
          );
        })
      }
    </Timeline>
  );
};

export default History;
