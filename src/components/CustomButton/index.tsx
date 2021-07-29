import React, { ReactElement, SyntheticEvent } from "react";
import PropTypes, { InferProps } from "prop-types";
import { useRouter } from "next/router";

import { Button } from "@chakra-ui/react";
import { ChevronRightIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";

export function CustomButton({
  hasRightIcon,
  hasLeftIcon,
  viewIcon,
  headerSection,
  text,
  hrefTo,
  bgColor,
  hoverBG,
}: InferProps<typeof CustomButton.propTypes>): ReactElement {
  const buttonText = text.toUpperCase();
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(hrefTo);
  };

  if (hasLeftIcon) {
    return (
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"black"}
        bg={bgColor}
        onClick={handleClick}
        _hover={{
          bg: hoverBG,
        }}
        leftIcon={!viewIcon ? <DownloadIcon /> : <ViewIcon />}
      >
        {buttonText}
      </Button>
    );
  }

  // if (hasRightIcon) {
  //   return (
  //     <Button
  //       display={{ base: "none", md: "inline-flex" }}
  //       fontSize={"sm"}
  //       fontWeight={600}
  //       color={"black"}
  //       bg={bgColor}
  //       onClick={handleClick}
  //       _hover={{
  //         bg: hoverBG,
  //       }}
  //       rightIcon={<ChevronRightIcon />}
  //     >
  //       {buttonText}
  //     </Button>
  //   );
  // }
  if (typeof window !== "undefined" && headerSection && window.innerWidth < 600) {
    return (
      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );
  }

  return (
    <Button
      display={{ base: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"black"}
      bg={bgColor}
      onClick={handleClick}
      _hover={{
        bg: hoverBG,
      }}
      rightIcon={<ChevronRightIcon />}
    >
      {buttonText}
    </Button>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  hasRightIcon: PropTypes.bool,
  hasLeftIcon: PropTypes.bool,
  viewIcon: PropTypes.bool,
  headerSection: PropTypes.bool,
  text: PropTypes.string.isRequired,
  hrefTo: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverBG: PropTypes.string.isRequired,
};
