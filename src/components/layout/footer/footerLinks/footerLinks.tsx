import React from "react";
import { FooterLinksProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import Link from "next/link";

const FooterLinks: React.FC<FooterLinksProps> = ({ display }) => {
  const { SECONDARY_COLOR, colorMode } = useThemeMode();

  const github = "https://github.com/ShocKWavEv1";

  const customDisplay = display;
  return (
    <Box
      w="100%"
      p={["20px 0px", "30px 0px", "30px 0px", "30px 0px", "30px 0px"]}
      display="grid"
      gridTemplateColumns={[
        "1fr",
        "1fr",
        "1fr",
        "400px 1fr 1fr",
        "500px 1fr 1fr",
      ]}
    >
      <Box w="100%" display="flex" flexDirection="column">
        <Text
          variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Social Media
        </Text>
        <Box>
          <Text
            variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
            color={SECONDARY_COLOR}
            textTransform="uppercase"
          >
            <Link href={github} target="_blank">
              <Text
                as={"button"}
                cursor="pointer"
                className={colorMode === "dark" ? "linkLight" : "link"}
                textTransform="uppercase"
              >
                Linkedin
              </Text>{" "}
            </Link>
            -{" "}
            <Link href={github} target="_blank">
              <Text
                as={"button"}
                cursor="pointer"
                className={colorMode === "dark" ? "linkLight" : "link"}
                textTransform="uppercase"
              >
                GITHUB
              </Text>{" "}
            </Link>
            -{" "}
            <Link href={github} target="_blank">
              <Text
                as={"button"}
                cursor="pointer"
                className={colorMode === "dark" ? "linkLight" : "link"}
                textTransform="uppercase"
              >
                DOWNLOAD CV
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
      <Box
        w="100%"
        pt={["20px", "20px", "20px", "0px", "0px"]}
        display={[
          `${customDisplay ? "none" : "flex"}`,
          `${customDisplay ? "none" : "flex"}`,
          "flex",
          "flex",
          "flex",
          "flex",
        ]}
        flexDirection="column"
      >
        <Text
          variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Get in touch
        </Text>
        <Box>
          <Link href="mailto:rodd.sal23@gmail.com">
            <Text
              variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
              color={SECONDARY_COLOR}
              textTransform="uppercase"
              as="button"
              cursor="pointer"
              className={colorMode === "dark" ? "linkLight" : "link"}
            >
              rodd.sal23@gmail.com
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        w="100%"
        pt={["20px", "20px", "20px", "0px", "0px"]}
        display="flex"
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-end",
          "flex-end",
        ]}
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          © SLMRN.STUDIO 2024
        </Text>
        <Box>
          <Text
            variant={["SMBOLD", "SMBOLD", "SMBOLD", "MDBOLD", "MDBOLD"]}
            color={SECONDARY_COLOR}
            textTransform="uppercase"
          >
            ALL RIGHTS RESERVED
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLinks;
