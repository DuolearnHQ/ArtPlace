'use client';
import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";
import { ApolloProvider } from '@apollo/client';
import client from '../gql';

// THEME
import ArtPlaceTheme from "@/theme";
import { UserProvider } from '@/context/User';

import '@rainbow-me/rainbowkit/styles.css';

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider,darkTheme  } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps<{
  session: Session;
}>) {
  return (
    <ApolloProvider client={client}>
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
      <RainbowKitProvider   
      theme={darkTheme({
      accentColor: 'transparent',
      
      fontStack: 'system',
     
    })} chains={chains}>
        <ChakraProvider theme={ArtPlaceTheme}>
        <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
        </ChakraProvider>
      </RainbowKitProvider>
      </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    
    </WagmiConfig>
    </ApolloProvider>
  );
  
}

export default MyApp;
