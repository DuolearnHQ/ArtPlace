import { Box, Flex, Heading, Text, Button, extendTheme, Grid, GridItem } from "@chakra-ui/react"
import nft1 from "@assets/Rectangle 3784.png"
import nft2 from "@assets/Rectangle 3785.svg"
import nft3 from "@assets/Rectangle 3786.svg"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSignMessage, useAccount } from 'wagmi'


export default function login() {
  const { signMessage } = useSignMessage({
    message: 'SignIn to Art Place?',
  })
  const { isConnected, connector } = useAccount()

  useEffect(() => {
    connector ? signMessage() : ""
  }, [isConnected])
  return (

    <Box display="flex" bg="#1E1E1E" direction="row" w="100%" height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" w="50%" border="0px" h="100%" alignItems="center" justifyContent="center" width="100%">
        <Box w={{
          sm: "80%",
          lg: "60%"
        }} h="45%" border="0px">
          <Box h="5%" />
          <Box display="flex" justifyContent="flex-st" alignItems="center" lineHeight="32px" fontSize={{
            sm: '20px',
            md: '24px',
            lg: '24px',
            xl: '26px',
            "2xl": '26px',
            "3xl": "26px"
          }} h="13%">
            <Text color="white">Art</Text><Text color="#FE3796">Place</Text>
          </Box>
          <Box display="flex" justifyContent="flex-st" alignItems="center" lineHeight="39px" h="15%" fontWeight="600">
            <Text color="white" fontSize={["22px", "28px", "35px", "30px", "32px"]} >Log In To Continue</Text>
          </Box>
          <Box fontSize={
            {
              sm: '12px',
              lg: '16px',
              xl: '16px',
              "2xl": '16px',
              "3xl": "16px"
            }
          } lineHeight="28px" fontWeight="400">
            <Text color="white">Sign a message using any of your wallet to login</Text>
          </Box>
          <Box h="5%" />
          <Box height={["12%", "18%"]} display="flex" alignItems="center" justifyContent="center">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {

                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain

                return (
                  <div style={{ width: "100%", height: "100%" }}
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none'
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button onClick={() => { openConnectModal() }} borderRadius="6px" fontSize={{
                            sm: '12px',
                            md: '14px',
                            lg: '14px',
                            xl: '16px',
                            "2xl": '16px',
                            "3xl": "24px"

                          }} width="100%" height="100%" background="#FE3796" color="white">
                            Click Here Sign In
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button onClick={openChainModal} borderRadius="6px" width="100%" height="100%" background="#FE3796" >
                            Switch network
                          </Button>
                        );
                      }

                      return (
                        <div style={{ display: 'flex', gap: 12 }}>
                          <button
                            onClick={openChainModal}
                            style={{ display: 'flex', alignItems: 'center' }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button>

                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </Box>
          <Box h="5%" />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text color="#4B5563" fontWeight="600">New User?</Text><Text fontWeight="600" color="#FE3796">Register Now</Text>
          </Box>
        </Box>
      </Flex>



      <Flex magin="0" padding="0" direction="column" alignItems="center" justifyContent="center" background="linear-gradient(180deg, #F461A7 0%, #6D0034 100%)" display={{ base: "none", lg: "block" }} width={["0%", "100%"]} h="100%">
        <Flex direction="row" justifyContent="center" alignItems="end" width="100%" height={{
          sm: '0%',
          lg: "70%"
        }}  >
          <Grid templateRows="repeat(1,1fr)" templateColumns="repeat(3,1fr)" h="100%" w="80%" alignItems="center">
            <GridItem rowSpan={1} colSpan={1}>
              <Box display="block" position="relative">
                <Image src={nft2} layout="responsive" />
              </Box>
              <Box display="block" position="relative">
                <Image src={nft3} layout="responsive" />
              </Box>
            </GridItem>
            <GridItem colSpan={2} position="relative" display="block">
              <Image src={nft1} layout="responsive" />
            </GridItem>
          </Grid>
        </Flex>
        <Flex direction="column" width="100%" height="25%" alignItems="center" justifyContent="flex-start">

          <Heading w="75%" fontSize={{
            lg: '14px',
            xl: '14px',
            "2xl": '18px',
            "3xl": "20px"
          }} color="rgba(255, 255, 255, 0.6)" fontWeight="600" lineHeight="28px" >
            NFT FACTS
          </Heading>
          <Text fontSize={{
            lg: '20px',
            xl: '20px',
            "2xl": '20px',
            "3xl": "24px"
          }} w="75%" fontWeight="400" lineHeight="30px" >
            NFTs (Non-Fungible Tokens) have been used to sell digital art for millions of dollars, with the highest price paid being over $69 million for a piece by digital artist Beeple.
          </Text>
        </Flex >

        <Box>

        </Box>
      </Flex>

    </Box>
  )
}

