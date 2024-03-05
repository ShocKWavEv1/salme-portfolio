import Intro from "@/components/intro/intro";
import Laboratory from "@/components/laboratory/laboratory";
import Showcase from "@/components/showcase/showcase";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="100%">
      <Intro />
      <Laboratory />
      <Showcase />
    </Box>
  );
}
