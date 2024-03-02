import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme";
import Layout from "@/components/layout/layout";
import { ScrollProvider } from "@/hooks/useLenis";
import Cursor from "@/components/cursor/customCursor";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect, useRef } from "react";
import { customCursor } from "@/lib/constants/constants";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import Preloader from "@/components/preloader/preloader";

export default function App({ Component, pageProps }: AppProps) {
  const isTouchableDevice = useIsTouchDevice();

  const LoadingBarRef: any = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!isTouchableDevice) customCursor();
  }, [isTouchableDevice]);

  useEffect(() => {
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouteComplete = () => {
    if (LoadingBar !== null) {
      setTimeout(function () {
        LoadingBarRef.current.complete();
      }, 300);
    }
  };

  const handleRouteStart = () => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme}>
      {!isTouchableDevice ? <Cursor /> : null}
      <LoadingBar ref={LoadingBarRef} height={5} color="#ff98a2" />
      <Preloader />
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </ChakraProvider>
  );
}
