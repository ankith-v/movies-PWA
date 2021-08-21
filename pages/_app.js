import { ChakraProvider, theme, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <VStack spacing={20} align="stretch" position="relative">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </VStack>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
