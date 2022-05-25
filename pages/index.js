import { Box, Container, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" align="center" p={3} mb={6}>
        Hello, I&apos;m a frontend hobbyist from China!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Flower F
          </Heading>
          <p>A Front End Developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
