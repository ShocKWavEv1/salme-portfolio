export const handleMarqueeTheme = (colorMode: string, isSolid: boolean) => {
  if (colorMode === "light") {
    return isSolid ? "primary.500" : "primary.300";
  } else {
    return isSolid ? "primary.500" : "licorice.500";
  }
};

export const handleSvgTheme = (colorMode: string, isSolid: boolean) => {
  if (colorMode === "light") {
    return isSolid ? "#FF98A2" : "#FFC6C1";
  } else {
    return isSolid ? "#FF98A2" : "#231A1C";
  }
};
