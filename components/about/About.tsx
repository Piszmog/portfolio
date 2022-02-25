import { Center, Spoiler, Text } from '@mantine/core';
import Image from 'next/image';

type AboutProps = {
  src: StaticImageData;
  description: string;
};

const About = ({ description, src }: AboutProps) => {
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
      <Spoiler maxHeight={30} showLabel='Show more' hideLabel='Hide'>
        <div>
          <Text>
            {description}
          </Text>
        </div>
      </Spoiler>
    </div>
  );
};

export default About;
