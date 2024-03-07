import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import localFonts from "next/font/local";

const PPMonument = localFonts({
  src: [
    {
      path: "../assets/monumentExtended/PPMonumentExtended-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/monumentExtended/PPMonumentExtended-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/monumentExtended/PPMonumentExtended-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/monumentExtended/PPMonumentExtended-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/monumentExtended/PPMonumentExtended-Black.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

/* HATTON FONT VARIANTS */

const baseH1Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "140px",
};

const baseH2Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "110px",
};

const baseH3Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "96px",
  lineHeight: "86px",
};

const baseH4Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "82px",
  lineHeight: "72px",
};

const baseH5Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "68px",
  lineHeight: "62px",
};

const baseH6Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "54px",
  lineHeight: "50px",
};

const baseH7Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "40px",
};

const baseH8Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "34px",
  lineHeight: "32px",
};

const baseH9Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "26px",
};

const baseH10Styles = {
  fontFamily: PPMonument.style.fontFamily,
  fontSize: "20px",
};

/* H1 VARIANT */

const H1THIN = defineStyle({
  ...baseH1Styles,
  fontWeight: 300,
});

const H1LIGHT = defineStyle({
  ...baseH1Styles,
  fontWeight: 400,
});

const H1REGULAR = defineStyle({
  ...baseH1Styles,
  fontWeight: 500,
});

const H1BOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 600,
});

const H1BLACK = defineStyle({
  ...baseH1Styles,
  fontWeight: 700,
});

/* H2 VARIANT */

const H2THIN = defineStyle({
  ...baseH2Styles,
  fontWeight: 300,
});

const H2LIGHT = defineStyle({
  ...baseH2Styles,
  fontWeight: 400,
});

const H2REGULAR = defineStyle({
  ...baseH2Styles,
  fontWeight: 500,
});

const H2BOLD = defineStyle({
  ...baseH2Styles,
  fontWeight: 600,
});

const H2BLACK = defineStyle({
  ...baseH2Styles,
  fontWeight: 700,
});

/* H3 VARIANT */

const H3THIN = defineStyle({
  ...baseH3Styles,
  fontWeight: 300,
});

const H3LIGHT = defineStyle({
  ...baseH3Styles,
  fontWeight: 400,
});

const H3REGULAR = defineStyle({
  ...baseH3Styles,
  fontWeight: 500,
});

const H3BOLD = defineStyle({
  ...baseH3Styles,
  fontWeight: 600,
});

const H3BLACK = defineStyle({
  ...baseH3Styles,
  fontWeight: 700,
});

/* H4 VARIANT */

const H4THIN = defineStyle({
  ...baseH4Styles,
  fontWeight: 300,
});

const H4LIGHT = defineStyle({
  ...baseH4Styles,
  fontWeight: 400,
});

const H4REGULAR = defineStyle({
  ...baseH4Styles,
  fontWeight: 500,
});

const H4BOLD = defineStyle({
  ...baseH4Styles,
  fontWeight: 600,
});

const H4BLACK = defineStyle({
  ...baseH4Styles,
  fontWeight: 700,
});

/* H5 VARIANT */

const H5THIN = defineStyle({
  ...baseH5Styles,
  fontWeight: 300,
});

const H5LIGHT = defineStyle({
  ...baseH5Styles,
  fontWeight: 400,
});

const H5REGULAR = defineStyle({
  ...baseH5Styles,
  fontWeight: 500,
});

const H5BOLD = defineStyle({
  ...baseH5Styles,
  fontWeight: 600,
});

const H5BLACK = defineStyle({
  ...baseH5Styles,
  fontWeight: 700,
});

/* H6 VARIANT */

const H6THIN = defineStyle({
  ...baseH6Styles,
  fontWeight: 300,
});

const H6LIGHT = defineStyle({
  ...baseH6Styles,
  fontWeight: 400,
});

const H6REGULAR = defineStyle({
  ...baseH6Styles,
  fontWeight: 500,
});

const H6BOLD = defineStyle({
  ...baseH6Styles,
  fontWeight: 600,
});

const H6BLACK = defineStyle({
  ...baseH6Styles,
  fontWeight: 700,
});

/* H7 VARIANT */

const H7THIN = defineStyle({
  ...baseH7Styles,
  fontWeight: 300,
});

const H7LIGHT = defineStyle({
  ...baseH7Styles,
  fontWeight: 400,
});

const H7REGULAR = defineStyle({
  ...baseH7Styles,
  fontWeight: 500,
});

const H7BOLD = defineStyle({
  ...baseH7Styles,
  fontWeight: 600,
});

const H7BLACK = defineStyle({
  ...baseH7Styles,
  fontWeight: 700,
});

/* H8 VARIANT */

const H8THIN = defineStyle({
  ...baseH8Styles,
  fontWeight: 300,
});

const H8LIGHT = defineStyle({
  ...baseH8Styles,
  fontWeight: 400,
});

const H8REGULAR = defineStyle({
  ...baseH8Styles,
  fontWeight: 500,
});

const H8BOLD = defineStyle({
  ...baseH8Styles,
  fontWeight: 600,
});

const H8BLACK = defineStyle({
  ...baseH8Styles,
  fontWeight: 700,
});

/* H9 VARIANT */

const H9THIN = defineStyle({
  ...baseH9Styles,
  fontWeight: 300,
});

const H9LIGHT = defineStyle({
  ...baseH9Styles,
  fontWeight: 400,
});

const H9REGULAR = defineStyle({
  ...baseH9Styles,
  fontWeight: 500,
});

const H9BOLD = defineStyle({
  ...baseH9Styles,
  fontWeight: 600,
});

const H9BLACK = defineStyle({
  ...baseH9Styles,
  fontWeight: 700,
});

/* H10 VARIANT */

const H10THIN = defineStyle({
  ...baseH10Styles,
  fontWeight: 300,
});

const H10LIGHT = defineStyle({
  ...baseH10Styles,
  fontWeight: 400,
});

const H10REGULAR = defineStyle({
  ...baseH10Styles,
  fontWeight: 500,
});

const H10BOLD = defineStyle({
  ...baseH10Styles,
  fontWeight: 600,
});

const H10BLACK = defineStyle({
  ...baseH10Styles,
  fontWeight: 700,
});

export const HeadingTheme = defineStyleConfig({
  variants: {
    /* SLMRN FONT VARIANTS */
    H1THIN,
    H1LIGHT,
    H1REGULAR,
    H1BOLD,
    H1BLACK,
    H2THIN,
    H2LIGHT,
    H2REGULAR,
    H2BOLD,
    H2BLACK,
    H3THIN,
    H3LIGHT,
    H3REGULAR,
    H3BOLD,
    H3BLACK,
    H4THIN,
    H4LIGHT,
    H4REGULAR,
    H4BOLD,
    H4BLACK,
    H5THIN,
    H5LIGHT,
    H5REGULAR,
    H5BOLD,
    H5BLACK,
    H6THIN,
    H6LIGHT,
    H6REGULAR,
    H6BOLD,
    H6BLACK,
    H7THIN,
    H7LIGHT,
    H7REGULAR,
    H7BOLD,
    H7BLACK,
    H8THIN,
    H8LIGHT,
    H8REGULAR,
    H8BOLD,
    H8BLACK,
    H9THIN,
    H9LIGHT,
    H9REGULAR,
    H9BOLD,
    H9BLACK,
    H10THIN,
    H10LIGHT,
    H10REGULAR,
    H10BOLD,
    H10BLACK,
  },
});
