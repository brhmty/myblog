import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import LayoutWrapper from "./../components/layout/LayoutWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ChakraProvider>
    </Provider>
  );
}
