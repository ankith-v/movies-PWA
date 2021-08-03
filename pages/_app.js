import { ChakraProvider, theme, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <VStack spacing={20} align="stretch">
          <Navbar />
          <Component {...pageProps} />
        </VStack>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
