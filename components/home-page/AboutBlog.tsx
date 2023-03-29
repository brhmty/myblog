import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { aboutBlogTitle, aboutBlogContent } from "@/utils/data";

export const AboutBlog = () => {
  const mainText = useColorModeValue(
    "primaryAccent.light",
    "secondaryAccent.dark"
  );
  const spanText = useColorModeValue(
    "secondaryAccent.light",
    "primaryAccent.dark"
  );

  return (
    <Box w="90%" mx="auto">
      <VStack gap="5px">
        <Heading as="h2" color={spanText} textAlign={"center"}>
          {aboutBlogTitle}
        </Heading>
        <Text textAlign={"justify"}>{aboutBlogContent}</Text>
      </VStack>
    </Box>
  );
};
