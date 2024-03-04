import React from "react";
import { IntroProps } from "./model";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import { motion } from "framer-motion";

const Intro: React.FC<IntroProps> = () => {
  const { SECONDARY_COLOR, toggleColorMode } = useThemeMode();

  const SLMRN = ["S", "L", "M", "R", "N"];

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box w="100%" h="100%" p="50px 20px">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
        <Box w="100%" p="0px 30px" mt="-20px">
          <Box>
            <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
              REACT MOBILE & WEB DEVELOPER
            </Heading>
          </Box>
          <Box>
            <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
              OBSESSED WITH DELIVERING
            </Heading>
          </Box>
          <Box>
            <Heading variant="H6BOLD" color={SECONDARY_COLOR}>
              IMMACULATE PRODUCTS.
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="100%" display="grid" gridTemplateColumns="1fr 1fr">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          p="0px 50px"
        >
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "75px",
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.17, 0.67, 0.83, 0.67],
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
            style={{ width: "3px", backgroundColor: "#FF98A2" }}
          />
          <Box
            w="100%"
            p="15px"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="MDREGULAR"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Scroll to
            </Text>
            <Text
              variant="MDREGULAR"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Explore
            </Text>
          </Box>
        </Box>
        <Box
          w="100%"
          p="0px 50px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            size="sm"
            colorScheme="primary"
            onClick={() => toggleColorMode()}
          >
            <Text variant="SMREGULAR" textTransform="uppercase" color="black">
              Check my github
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
