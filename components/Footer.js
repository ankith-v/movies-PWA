import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <Flex>
        <Link
          href="https://www.themoviedb.org"
          isExternal
          alignSelf="center"
          marginRight="2"
          marginLeft="10"
        >
          <Image src="tmdblogo.png" alt="logo" height="16" />
        </Link>
        <Link
          href="https://nextjs.org"
          isExternal
          alignSelf="center"
          marginRight="2"
          marginLeft="auto"
          borderRadius="3xl"
        >
          <Image
            src="nextjslogo.png"
            alt="logo"
            height="12"
            backgroundColor="whiteAlpha.600"
            paddingX="2"
            borderRadius="lg"
          />
        </Link>
        <Link
          href="https://chakra-ui.com"
          isExternal
          alignSelf="center"
          marginRight="10"
          marginLeft="auto"
        >
          <Image src="chakralogo.png" alt="logo" height="12" />
        </Link>
      </Flex>
    </div>
  );
};

export default Footer;
