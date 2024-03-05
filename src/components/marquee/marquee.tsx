import React from "react";
import { MarqueeRibbonProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import { handleMarqueeTheme, handleSvgTheme } from "./constants";
import LabSvg from "./labSvg/labSvg";

const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({
  className,
  isSolid,
}) => {
  const { colorMode } = useThemeMode();
  return (
    <Box
      w="100%"
      h="75px"
      display="flex"
      alignItems="center"
      justifyContent={!isSolid ? "flex-end" : ""}
      borderTop="2px solid"
      borderBottom="2px solid"
      borderColor={handleMarqueeTheme(colorMode, isSolid)}
      overflow="hidden"
      lineHeight={1}
      position={isSolid ? "absolute" : "relative"}
      bg={colorMode === "dark" ? "primary.200" : "black"}
      className={`${className}`}
    >
      <Box
        data-marquee-animation-container
        w="fit-content"
        display="flex"
        flexWrap="nowrap"
        alignItems="center"
        position="absolute"
        whiteSpace="nowrap"
      >
        <Heading
          variant="H6BLACK"
          color={handleMarqueeTheme(colorMode, isSolid)}
          textTransform="uppercase"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <Box key={i} className="marqueeItem">
              slmrn
              <LabSvg currentColor={handleSvgTheme(colorMode, isSolid)} />
            </Box>
          ))}
        </Heading>
      </Box>
    </Box>
  );
};

export default MarqueeRibbon;
