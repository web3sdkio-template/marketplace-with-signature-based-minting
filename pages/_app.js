import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Header from "../components/Header";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Header />
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
