import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react';

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
    </Container>
  );
};

export default Home;
