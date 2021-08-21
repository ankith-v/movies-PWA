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
      <Flex backgroundColor="blackAlpha.900">
        <Link
          href="https://www.themoviedb.org"
          isExternal
          alignSelf="center"
          marginRight="2"
        >
          <Image src="tmdblogo.png" alt="logo" height="16" />
        </Link>
        <Link
          href="https://nextjs.org"
          isExternal
          alignSelf="center"
          marginRight="2"
          marginLeft="auto"
        >
          <Image src="nextjslogo.png" alt="logo" height="16" />
        </Link>
        <Link
          href="https://chakra-ui.com"
          isExternal
          alignSelf="center"
          marginRight="2"
          marginLeft="auto"
        >
          <Image src="chakralogo.png" alt="logo" height="12" />
        </Link>
      </Flex>
    </div>
  );
};

export default Footer;
