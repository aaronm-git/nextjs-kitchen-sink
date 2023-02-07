import { Global } from "@emotion/react";
import xw from "xwind";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
