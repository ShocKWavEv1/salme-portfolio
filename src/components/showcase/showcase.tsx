import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ShowcaseProps } from "./model";
import useThemeMode from "@/hooks/useThemeMode";
import * as Scrollytelling from "@bsmnt/scrollytelling";

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
          p="100px 50px 280px 50px"
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
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              something
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
              as="span"
              variant="H3BLACK"
              textTransform="uppercase"
              color="primary.500"
            >
              new
            </Heading>
          </Scrollytelling.Parallax>
        </Box>
      </Box>
    </Scrollytelling.Root>
  );
};

export default Showcase;
