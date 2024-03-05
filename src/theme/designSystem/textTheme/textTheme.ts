import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import localFonts from "next/font/local";

const PPTelegraf = localFonts({
  src: [
    {
      path: "../assets/basementGrotesque/BasementGrotesque-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/basementGrotesque/BasementGrotesque-Black.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/basementGrotesque/BasementGrotesque-BlackExpanded.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

const baseXXLStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "34px",
};

const baseXLStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "25px",
};

const baseLGStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "22px",
};

const baseMDStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "18px",
};

const baseSMStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "16px",
};

const baseXSStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "14px",
};

const baseXSSStyles = {
  fontFamily: PPTelegraf.style.fontFamily,
  fontSize: "10px",
};

/* XXL VARIANTS */
const XXLREGULAR = defineStyle({
  ...baseXXLStyles,
  fontWeight: 300,
});

const XXLBOLD = defineStyle({
  ...baseXXLStyles,
  fontWeight: 400,
});

const XXLBLACK = defineStyle({
  ...baseXXLStyles,
  fontWeight: 500,
});

/* XL VARIANTS */
const XLREGULAR = defineStyle({
  ...baseXLStyles,
  fontWeight: 300,
});
const XLBOLD = defineStyle({
  ...baseXLStyles,
  fontWeight: 400,
});

const XLBLACK = defineStyle({
  ...baseXLStyles,
  fontWeight: 500,
});

/* LG VARIANTS */
const LGREGULAR = defineStyle({
  ...baseLGStyles,
  fontWeight: 300,
});
const LGBOLD = defineStyle({
  ...baseLGStyles,
  fontWeight: 400,
});

const LGBLACK = defineStyle({
  ...baseLGStyles,
  fontWeight: 500,
});

/* MD VARIANTS */
const MDREGULAR = defineStyle({
  ...baseMDStyles,
  fontWeight: 300,
});
const MDBOLD = defineStyle({
  ...baseMDStyles,
  fontWeight: 400,
});

const MDBLACK = defineStyle({
  ...baseMDStyles,
  fontWeight: 500,
});

/* SM VARIANTS */
const SMREGULAR = defineStyle({
  ...baseSMStyles,
  fontWeight: 300,
});
const SMBOLD = defineStyle({
  ...baseSMStyles,
  fontWeight: 400,
});

const SMBLACK = defineStyle({
  ...baseSMStyles,
  fontWeight: 500,
});

/* XS VARIANTS */
const XSREGULAR = defineStyle({
  ...baseXSStyles,
  fontWeight: 300,
});
const XSBOLD = defineStyle({
  ...baseXSStyles,
  fontWeight: 400,
});

const XSBLACK = defineStyle({
  ...baseXSStyles,
  fontWeight: 500,
});

/* xss VARIANTS */
const XXSREGULAR = defineStyle({
  ...baseXSSStyles,
  fontWeight: 300,
});
const XXSBOLD = defineStyle({
  ...baseXSSStyles,
  fontWeight: 400,
});

const XXSBLACK = defineStyle({
  ...baseXSSStyles,
  fontWeight: 500,
});

export const TextTheme = defineStyleConfig({
  variants: {
    XXLREGULAR,
    XXLBOLD,
    XXLBLACK,
    XLREGULAR,
    XLBOLD,
    XLBLACK,
    LGREGULAR,
    LGBOLD,
    LGBLACK,
    MDREGULAR,
    MDBOLD,
    MDBLACK,
    SMREGULAR,
    SMBOLD,
    SMBLACK,
    XSREGULAR,
    XSBOLD,
    XSBLACK,
    XXSREGULAR,
    XXSBOLD,
    XXSBLACK,
  },
});
