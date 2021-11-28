import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="green" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title">
            Braden Still-Routley
          </Heading>
          <p>Web Developer | Server Hobbyist | DevOps Consultant</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
