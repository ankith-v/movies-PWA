import { useColorMode, Switch, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      position="fixed"
      w="100%"
      paddingRight="1rem"
      align="center"
      flexDirection="row-reverse"
      bg="blackAlpha.900"
    >
      <Switch
        colorScheme="darkgray"
        isChecked={isDark}
        onChange={toggleColorMode}
      />

      <Flex>
        <Link href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
            color="gray.400"
          >
            Home
          </Button>
        </Link>

        <Link href="/search" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Search"
            my={5}
            w="100%"
            color="gray.400"
          >
            Search
          </Button>
        </Link>
      </Flex>

      <Image
        src="icon.png"
        alt="logo"
        boxSize="16"
        justifyContent="flex-start"
        marginLeft="2"
        marginRight="auto"
      />
    </Flex>
  );
};

export default Navbar;
