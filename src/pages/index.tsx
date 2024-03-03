import Intro from "@/components/intro/intro";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="100%">
      <Intro />
      <Box w="100%" h="100vh"></Box>
    </Box>
  );
}
