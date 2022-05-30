import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} align="center" p={3} mb={6}>
        Hello, I&apos;m a frontend hobbyist from China!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Flower F
          </Heading>
          <p>A Front End Developer</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth={100}
            display="inline-block"
            borderRadius="full"
            src="/images/flower-f.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work🚀
        </Heading>
        <Paragraph>
          Flower F is a front end developer who loves coding very much. He began to learn front end knowledge at the age
          of 20. He is good at frond end knowledge such as JavaScript, CSS, React, Webpack, Vite, Next.js, Nest.js and
          so on. Now his dream is to be an excellent front end developers in the open source community. You can star his
          current product{' '}
          <NextLink href="/works/fe-intro-generator">
            <Link>FE Intro Generator</Link>
          </NextLink>{' '}
          which is a lowcode editor for generating an introduction for frontend developer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio📅
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Guangdong, China.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Start to learn software engineering in SCUT.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Start to learn front end knowledge.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies💜
        </Heading>
        <Paragraph>Magic Cube, Hip Hop, Running, Computer Network, Compilation Principle, Data Structure and Algorithm</Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
