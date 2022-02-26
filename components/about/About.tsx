import { Center, List, Spoiler, Text, ThemeIcon } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

type AboutProps = {
  src: StaticImageData;
  title: Title;
  subtitles?: Title[];
  description: string;
};

type Title = {
  icon: React.ReactNode;
  value: string;
}

const About = ({ description, src, title, subtitles }: AboutProps) => {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto' }}>
      <Center mb='md'>
        <Image
          width={100}
          height={120}
          src={src}
          alt='Profile Image'
        />
      </Center>
      <Spoiler maxHeight={125} showLabel='Show more' hideLabel='Hide'>
        <div>
          <Text mb='mb'>
            I am a...
            <List withPadding>
              <List.Item
              icon={title.icon}
              >
                {title.value}
              </List.Item>
              {
                subtitles?.map((subtitle, index) => (
                  <List.Item
                    key={index}
                    icon={subtitle.icon}
                  >
                    {subtitle.value}
                  </List.Item>
                ))
              }
            </List>
          </Text>
          <Text>
            {description}
          </Text>
        </div>
      </Spoiler>
    </div>
  );
};

export default About;
