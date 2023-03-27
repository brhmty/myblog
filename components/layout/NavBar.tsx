import React from "react";
import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Buttons from "../ui/Buttons";
import { useRouter } from "next/router";
import { navbarFontSize } from "@/utils/fonts";

const Navbar = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/contact");
  };

  const bgHeader = useColorModeValue("secondary.dark", "secondary.light");

  return (
    <Box w="100%" h="20" bgColor={bgHeader}>
      <Flex w="100%" h="100%" justify="space-between" align="center">
        <Box ml="5">
          <Image
            alt="brand(my blog) logo"
            src="/svg/Logo.svg"
            width="150"
            height="50"
          />
        </Box>
        <Flex display={{ base: "none", sm_md: "flex" }}>
          <HStack mr="5" spacing="5" align="center">
            <Link as={NextLink} href="/" fontSize={navbarFontSize}>
              Home
            </Link>
            <Link as={NextLink} href="/blog" fontSize={navbarFontSize}>
              Blog
            </Link>
            <Link as={NextLink} href="/about" fontSize={navbarFontSize}>
              About Me
            </Link>
            <Buttons buttonType="contact-me" onClick={onClick} />
          </HStack>
        </Flex>
        <Flex display={{ base: "flex", sm_md: "none" }}>
          <Buttons buttonType="contact-me-sm" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
