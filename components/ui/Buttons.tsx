import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { navbarFontSize } from "@/utils/fonts";

const Buttons = (props: { buttonType: string; onClick?: () => void }) => {
  const { buttonType, onClick } = props;
  const hover = "secondaryAccent.light";
  const border = useColorModeValue("black", "white");

  if (buttonType === "contact-me") {
    return (
      <Button
        leftIcon={<EmailIcon boxSize={{ base: "6", "2xl": "6" }} />}
        variant="outline"
        fontSize={navbarFontSize}
        _hover={{ bgColor: hover }}
        borderColor={border}
        onClick={onClick}
      >
        Contact Me
      </Button>
    );
  }

  if (buttonType === "contact-me-sm") {
    return (
      <Button
        variant="outline"
        fontSize={navbarFontSize}
        _hover={{ bgColor: { hover } }}
        borderColor={border}
        onClick={onClick}
      >
        <HamburgerIcon boxSize="7" />
      </Button>
    );
  }

  return <div>Button</div>;
};

export default Buttons;
