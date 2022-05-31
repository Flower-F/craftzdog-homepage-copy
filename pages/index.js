import NextLink from 'next/link';
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  ListItem,
  List,
  SimpleGrid
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import thumbYouTube from '../public/images/links/youtube.png';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';

const Home = () => {
  return (
    <Layout>
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
            Flower F is a front end developer who loves coding very much. He began to learn front end knowledge at the
            age of 20. He is good at frond end knowledge such as JavaScript, CSS, React, Webpack, Vite, Next.js, Nest.js
            and so on. Now his dream is to be an excellent front end developers in the open source community. You can
            star his current product{' '}
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
          <Paragraph>
            Magic Cube, Hip Hop, Running, Computer Network, Compilation Principle, Data Structure and Algorithm
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoTwitter />}>
                  @inkdrop_app (English)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoTwitter />}>
                  @craftzdog (日本語)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />}>
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem href="https://www.youtube.com/devaslife" title="Dev as Life" thumbnail={thumbYouTube}>
              My YouTube channel (&gt;100k subs)
            </GridItem>
            <GridItem href="https://www.inkdrop.app/" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
