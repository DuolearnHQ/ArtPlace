import {
    getDefaultWallets,connectorsForWallets
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {

    trustWallet,
  
  } from '@rainbow-me/rainbowkit/wallets';

export const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
        publicProvider()
    ]
);
export const { wallets } = getDefaultWallets({
    appName: 'ArtPlace',
    chains
});

export const connectors= connectorsForWallets([
  ...wallets,
  {
      groupName: 'Other',
      wallets: [
        trustWallet({chains }),
      ],
    },
  ]);

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})