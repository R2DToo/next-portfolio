import { Container, Box, Heading, Image } from "@chakra-ui/react";
// import ProfilePicture from "../components/images/my-picture.svg";

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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://stillroutley.dev/images/my-picture.svg"
            alt="Picture of myself"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
