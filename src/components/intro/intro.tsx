import React from "react";
import { IntroProps } from "./model";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import { motion } from "framer-motion";
import * as Scrollytelling from "@bsmnt/scrollytelling";

const Intro: React.FC<IntroProps> = () => {
  const { SECONDARY_COLOR, colorMode } = useThemeMode();

  const SLMRN = ["S", "L", "M", "R", "N"];

  return (
    <Scrollytelling.Root start="top bottom" end="bottom top" scrub={1.1}>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Box
          w="100%"
          h="100%"
          p={["70px 0px", "60px 0px", "60px 0px", "60px 0px", "60px 20px"]}
        >
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={["10px", "10px", "10px", "0px", "0px"]}
          >
            {SLMRN.map((item: any, idx: number) => {
              return (
                <Heading
                  key={item}
                  variant="H1BLACK"
                  fontSize={[
                    "calc(20vw - 5px)",
                    "calc(20vw - 10px)",
                    "calc(20vw - 15px)",
                    "calc(20vw - 15px)",
                    "calc(20vw - 20px)",
                  ]}
                  color="primary.500"
                >
                  {item}
                </Heading>
              );
            })}
          </Box>
          <Box
            w="100%"
            p={["0px 12px", "0px 25px", "0px 30px", "0px 30px", "0px 30px"]}
            mt={["0px", "-10px", "-10px", "-20px", "-20px"]}
          >
            <Box>
              <Heading
                variant={["H8BOLD", "H7BOLD", "H7BOLD", "H6BOLD", "H6BOLD"]}
                color={SECONDARY_COLOR}
              >
                REACT MOBILE & WEB DEVELOPER OBSESSED WITH DELIVERING IMMACULATE
                PRODUCTS.
              </Heading>
            </Box>
            <Box
              w="100%"
              mt="20px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="10px"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Scrollytelling.Animation
                  key={i}
                  tween={{
                    start: 0,
                    end: 100,
                    to: {
                      transformOrigin: "50% 50%",
                      rotate: i === 0 || i === 2 ? 360 : -360,
                    },
                  }}
                >
                  <Box w={["30px", "30px", "35px", "40px", "40px"]}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 5.2 15.7.8 12 2l2.3 7 7.5.1V5.3z"
                        fill={colorMode === "dark" ? "#231A1C" : "#FFDDD5"}
                      ></path>
                      <path
                        d="M8.2.8 6.7 5.3H1.9V9h7.7l2.3-7z"
                        fill={colorMode === "dark" ? "#231A1C" : "#FFDDD5"}
                      ></path>
                      <path
                        d="m2 9.1-2.4 3.1 4 2.8L2 19.5l3.8 1.2 2.4-7.2z"
                        fill={colorMode === "dark" ? "#231A1C" : "#FFDDD5"}
                      ></path>
                      <path
                        d="m24 12.2-2.3-3.1-6 4.4 2.3 7.2 3.7-1.2-1.5-4.5z"
                        fill={colorMode === "dark" ? "#231A1C" : "#FFDDD5"}
                      ></path>
                      <path
                        d="m11.8 16.4-6.1 4.4L8 23.9l3.8-2.7 3.9 2.7 2.3-3.1z"
                        fill={colorMode === "dark" ? "#231A1C" : "#FFDDD5"}
                      ></path>
                    </svg>
                  </Box>
                </Scrollytelling.Animation>
              ))}
            </Box>
            <Box
              w="100%"
              display={["flex", "none", "none", "none", "none"]}
              alignItems="center"
              mt="30px"
              justifyContent="flex-start"
            >
              <Button size="xs" colorScheme="primary">
                <Text variant="XSBOLD" textTransform="uppercase" color="black">
                  Check my github
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          w="100%"
          h="100%"
          display="grid"
          mt="-20px"
          gridTemplateColumns={[
            "1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
          ]}
        >
          <Box
            w="100%"
            display={["none", "flex", "flex", "flex", "flex"]}
            alignItems="center"
            justifyContent="flex-start"
            p={["0px 25px", "0px 25px", "0px 30px", "0px 30px", "0px 50px"]}
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
                variant="MDBOLD"
                color={SECONDARY_COLOR}
                textTransform="uppercase"
              >
                Scroll to
              </Text>
              <Text
                variant="MDBOLD"
                color={SECONDARY_COLOR}
                textTransform="uppercase"
              >
                Explore
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            p={["0px 25px", "0px 25px", "0px 30px", "0px 30px", "0px 50px"]}
            display={["none", "flex", "flex", "flex", "flex"]}
            alignItems="center"
            mt="40px"
            justifyContent={[
              "flex-start",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
          >
            <Button size="sm" colorScheme="primary">
              <Text variant="SMBOLD" textTransform="uppercase" color="black">
                Check my github
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Scrollytelling.Root>
  );
};

export default Intro;
