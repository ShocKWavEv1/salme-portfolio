import React from "react";
import { LaboratoryProps } from "./model";
import { Box, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import MarqueeRibbon from "../marquee/marquee";
import { techStack } from "./constants";

const Laboratory: React.FC<LaboratoryProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Scrollytelling.Root
      start="top bottom"
      end="bottom top"
      scrub={1.1}
      debug={{ label: "Lab Intro" }}
    >
      <Box w="100%" display="flex" flexDirection="column" position="relative">
        <Box
          w="100%"
          p="180px 50px 0px 50px"
          display="flex"
          flexDirection="column"
        >
          <Scrollytelling.Parallax
            tween={{
              start: 0,
              end: 100,
              movementY: { value: -40, unit: "px" },
            }}
          >
            <Heading
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              A peek into
            </Heading>
          </Scrollytelling.Parallax>
          <Scrollytelling.Parallax
            tween={{
              start: 0,
              end: 100,
              movementY: { value: -40, unit: "px" },
            }}
          >
            <Heading
              mt="-30px"
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              the lab
            </Heading>
          </Scrollytelling.Parallax>
          <Box w="70%" p="10px">
            <Text variant="XLREGULAR" color={SECONDARY_COLOR}>
              SLMRN is carving out a vanguard position by combining intensive
              technology with formal design expertise – we are making the
              internet everything it can be.
            </Text>
          </Box>
          <Box w="100%" p="60px 10px 0px 10px">
            <Box
              w="100%"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
              gap="50px"
            >
              {techStack.map((item: any, idx: number) => {
                return (
                  <Box
                    key={item.title}
                    w="100%"
                    h="400px"
                    p="20px"
                    border="1px solid"
                    borderColor={SECONDARY_COLOR}
                    bg="rgba(0,0,0,0)"
                    backdropFilter="saturate(150%) blur(10px)"
                  >
                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="column"
                    >
                      <Box w="100%" h="100%">
                        <Heading
                          variant="H5BLACK"
                          color="primary.500"
                          textTransform="uppercase"
                        >
                          {item.title}
                        </Heading>
                      </Box>
                      <Box
                        w="100%"
                        h="100%"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-end"
                        flexDirection="column"
                      >
                        {item.bullets.map((item: any, j: number) => {
                          return (
                            <Heading
                              variant="H9BOLD"
                              color={SECONDARY_COLOR}
                              textTransform="uppercase"
                            >
                              {item}
                            </Heading>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          w="105%"
          pb="250px"
          display="flex"
          alignItems="center"
          mt="180px"
          position="relative"
        >
          <MarqueeRibbon className="marquee1" isSolid />
          <MarqueeRibbon className="marquee2" isSolid={false} />
          <Scrollytelling.Animation
            tween={[
              {
                start: 0,
                end: 100,
                target: `.marquee1 [data-marquee-animation-container]`,
                to: { x: -1000, ease: "linear" },
              },
              {
                start: 0,
                end: 100,
                target: `.marquee2 [data-marquee-animation-container]`,
                to: { x: 1000, ease: "linear" },
              },
            ]}
          />
        </Box>
      </Box>
    </Scrollytelling.Root>
  );
};

export default Laboratory;
