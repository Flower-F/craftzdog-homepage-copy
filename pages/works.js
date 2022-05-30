import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import thumbWalknote from '../public/images/works/walknote_eyecatch.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="fe-intro-generator" title="FE Intro Generator" thumbnail={thumbInkdrop}>
              A lowcode editor for generating a frontend developer&apos;s introduction.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="bullet-chat-everywhere" title="Bullet Chat Everywhere" thumbnail={thumbWalknote}>
              A Chrome extension for sending barrages everywhere.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
