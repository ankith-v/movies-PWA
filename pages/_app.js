import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
