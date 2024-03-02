import React from "react";
import { IntroProps } from "./model";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";

const Intro: React.FC<IntroProps> = () => {
  const { SECONDARY_COLOR, toggleColorMode } = useThemeMode();

  const SLMRN = ["S", "L", "M", "R", "N"];

  return (
    <Box w="100%" p="50px 20px">
      <Box w="100%" display="flex" alignItems="center" justifyContent="center">
        {SLMRN.map((item: any, idx: number) => {
          return (
            <Heading
              key={item}
              variant="H1BLACK"
              fontSize="calc(20vw - 20px)"
              color="primary.500"
            >
              {item}
            </Heading>
          );
        })}
      </Box>
      <Box p="0px 30px" mt="-20px">
        <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
          REACT MOBILE & WEB DEVELOPER
        </Heading>
      </Box>
      <Box p="0px 30px">
        <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
          OBSESSED WITH DELIVERING
        </Heading>
      </Box>
      <Box p="0px 30px">
        <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
          IMMACULATE PRODUCTS.
        </Heading>
        <Button
          mt="30px"
          size="xs"
          colorScheme="primary"
          onClick={toggleColorMode}
        >
          <Text variant="SMSEMIBOLD" color="black">
            Toggle mode
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Intro;
