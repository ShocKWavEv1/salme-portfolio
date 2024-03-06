import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ShowcaseProps } from "./model";
import useThemeMode from "@/hooks/useThemeMode";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import Projects from "../projects/projects";

const Showcase: React.FC<ShowcaseProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();

  return (
    <Scrollytelling.Root
      start="top bottom"
      end="bottom top"
      scrub={1.1}
      debug={{ label: "Showcase" }}
    >
      <Box w="100%" display="flex" flexDirection="column" position="relative">
        <Box
          w="100%"
          p="40px 50px 120px 50px"
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
              Every project
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
              is something
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
              as="span"
              variant="H3BLACK"
              textTransform="uppercase"
              color="primary.500"
            >
              new
            </Heading>
          </Scrollytelling.Parallax>
          <Box w="100%" mt="60px" position="relative">
            <Projects />
          </Box>
        </Box>
      </Box>
    </Scrollytelling.Root>
  );
};

export default Showcase;
