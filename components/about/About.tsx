import { Box, Center, Image, Spoiler, Text } from '@mantine/core';

type AboutProps = {
  img: string;
  description: string;
};

const About = () => {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto' }}>
      <Center>
        <Image
          width={100}
          height={120}
          mb='md'
          radius='md'
          src='jerry.jpg'
          alt='Profile Image'
        />
      </Center>
      <Spoiler maxHeight={30} showLabel='Show more' hideLabel='Hide'>
        <div>
          <Text>
            We Butter the Bread with Butter was founded in 2007 by Marcel Neumann, who was originally
            guitarist for Martin Kesici&apos;s band, and Tobias Schultka. The band was originally meant as
            a joke, but progressed into being a more serious musical duo. The name for the band has no
            particular meaning, although its origins were suggested from when the two original members
            were driving in a car operated by Marcel Neumann and an accident almost occurred. Neumann
            found Schultka &quot;so funny that he briefly lost control of the vehicle.&quot; Many of their
            songs from this point were covers of German folk tales and nursery rhymes.
          </Text>
        </div>
      </Spoiler>
    </div>
  );
};

export default About;
