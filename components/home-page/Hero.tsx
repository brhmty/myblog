import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import Image from "next/image";
import { mainImgCenterSize, mainImgSize } from "@/utils/fonts";
import { AboutBlog } from "./AboutBlog";

const Hero = () => {
  return (
    <Flex direction={"column"}>
      <Box w="100%">
        <Center h={mainImgCenterSize}>
          <Box boxSize={mainImgSize}>
            <Image
              alt="profile picture"
              src="/main-page/pp.jpg"
              width="500"
              height="500"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "solid",
                borderColor: "secondaryAccent.light",
              }}
            />
          </Box>
        </Center>
      </Box>
      <Box w="100%">
        <AboutBlog />
      </Box>
    </Flex>
  );
};

export default Hero;
