import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import LayoutWrapper from "./../components/layout/LayoutWrapper";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ChakraProvider>
    </Provider>
  );
}
