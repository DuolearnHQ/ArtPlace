import {
  Heading,HStack,Box,Stack,Text, Input,Button, useMediaQuery,FormControl, FormLabel,FormErrorMessage,FormHelperText,Grid,GridItem, background} from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import Image1 from "../../assets/Rectangle 3784.jpg"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from 'zod'
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

type Inputs={
  name: string,
  email: string
}
export default function RegistrationPage() {
 
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs>=(data: any)=> console.log(data)
  return (
    <>
     
      <HStack padding="none"  margin="none"spacing="50%" position="relative" top={{ base: "none"}} width={{base: "100%"}} height={{base:"57em",md: "100vh",lg: "100vh" }}>
        <Box  position="absolute" width={{ base: "100%", lg: '50%' }}display="flex"  height={{base:"100%",md:"100%"}}top={0}  justifyContent="center">
          <Box position="absolute" w={{base:"85%",sm:"92%", md: "65%", lg:"75%"}} h={{base: "40rem",md: "32.372em"}}display={{ base: "block", lg: "flex" }} top={{ base: "11.0625em",md: "12.5625em",lg: "163px"}} >
            <Box  position="absolute" display="flex" lineHeight="1em" fontSize={{base:"26px"}} h={{md:"32px"}} width={{ base: "113.75px", md: "100%" }} fontFamily= 'Commissioner' fontStyle= "normal" fontWeight= "400">
              <Text>Art</Text>
              <Text color="#FE3796">Place</Text>
            </Box>
            <Box position="absolute" top={{base:"2.625em",md:"42px",lg:"2.625em"}} width={{base: "100%"}} height={{base: "34px",sm: "50px", md: "38px",lg: "39px"}}>
              <Text fontFamily="Inter" fontStyle="normal" fontWeight="600"fontSize={{base: "26px",sm: " 50px",md: "38px",lg:"23px",'2xl':"40px"}}lineHeight={{base:"34px",sm:"44px",md:"33.89px",lg:"39px"}}color="#FFFFFF">
                Create New Account
              </Text>
            </Box>
            <Box position="absolute" width={{base:"100%"}} top={{base:"78px",sm:"90px",md:"80px"}} h={{base:"65%",md:"60vh"}} >
              <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl top="0em" >
                <FormLabel position="relative" top={{base:"6px",sm:"10px",md:"10px",lg:"4px",'2xl':"7px"}} width={{base:"85px",sm:"100%",md:"100%"}} height={{base:"22px",sm:"22px",md:"22px"}} fontFamily="Inter" fontStyle="normal" fontWeight="600" fontSize={{base:"1em",md:"1.2em",lg:"1em",'2xl':"1.3em"}} lineHeight="19px" color="#F7FAFC">
                  Full name
                </FormLabel>
                <Input type="text" {...register('name')} position="relative"top={{base:"8px",sm:"0px",md:"11px",lg:"8px"}} mt={{sm:"10px",md:"0px"}} width={{ base: "100%" }} height={{base:"47px",sm:"65px",md:"65px",lg:"65px",'2xl':"70px"}}textColor="black" fontSize={{base:"16px",sm:"1.3em",md:"1.3em",lg:"16px",'2xl':"20px"}} lineHeight="19px" fontWeight={{sm:"400"}} padding={{base:"20px 40px",sm:"20px 43px",md:"20px 50px",lg:"20px 2.5em",'2xl':"20px 54px"}}gap="10px" background="#F3F4F6"borderRadius="8px"placeholder="Marcus"variant='unstyled'/>
                <Box position="absolute"  marginY="1vh" display="flex" justifyContent="center" width="100%" h={{base:"6vh",sm:"10vh"}} overflow="hidden" color="red" fontSize={{sm:"22px",lg:"18px"}}>
                 {errors.name?.message && <p>{errors.name?.message}</p>}
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel position="relative" top={{base:"40px",sm:"0px",md:"35.55px",lg:"34.55px"}} width={{base: "50px",sm:"100%"}}mt={{sm:"25px",md:"0px"}} height={{base:"19px",sm:"22px",md:"22px"}} fontFamily="Inter" fontStyle="normal" fontWeight="600" fontSize={{base:"16px",sm:"16px",md:"1.2em",lg:"16px",'2xl':"1.3em"}} lineHeight="19px"color="#F7FAFC">
                  Email
                </FormLabel>
                <Input position="relative" top={{base:"40.75px",sm:"0px",md:"33.55px",lg:"30px"}} mt={{sm:"10px",md:"0px"}}textColor="black" type="text" fontSize={{base:"16px",sm:"1.3em",md:"1.3em",lg:"16px",'2xl':"20px"}} fontWeight= "400" lineHeight="19px" {...register('email')} padding={{base:"20px 40px",sm:"20px 43px",md:"20px 50px",lg:"20px 40px",'2xl':"20px 54px"}}  width={{base: "100%"}} height={{base:"48px",sm:"65px",md:"65px",lg:"65px",'2xl':"70px"}}background="#F3F4F6" borderRadius="8px" placeholder="aurelius@rocketmail.com" fontFamily= 'Inter' fontStyle= "normal"color="#000000" variant='unstyled'/>
              <Box position="absolute" marginY={{base:"40px",sm:"0px",md:"30px"}} display="flex" justifyContent="center" w={{base:"100%"}} color="red" fontSize={{sm:"22px",lg:"18px"}}>
                {errors.email?.message && <p >{errors.email?.message}</p>}
              </Box>
              </FormControl>
              <Box position="absolute" top={{base:"210px",sm:"250px", md: "250.55px", lg:"245px",'2xl':"255px"}} mt={{sm:"30px",md:"0px"}} width={{base: "100%"}} height={{base:"56px",sm:"90px",md:"56px"}}>
                <Text position="absolute" fontFamily="Inter" fontStyle="normal" fontWeight="400" fontSize={{base:"3.975vw",sm:"4.377vw",md:"1.5em",lg:"0.8375em",xl:"17px",'2xl':"22.5px"}}  lineHeight={{base:"28px",sm:"45px",md:"28px"}} color="#F7FAFC">
                  Sign a message using any of your wallet to complete your registration
                </Text>
              </Box>
              <Box  position="absolute" top={{base:"290px", sm:"366px",md: "330.55px",lg:"295px", '2xl': '310px' }}mt={{sm:"30px",md:"0px",lg:"30px"}}  width={{base: "100%",md: "100%" }} height={{base:"48px",sm:"65px",md:"65px",lg:"65px",'2xl':"70px"}}
              > <Button type="submit"  display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={{base:"23px",md:"20px"}}  width={{base: "100%"}} h="100%" background="#FE3796" boxShadow="0px 30px 60px rgba(254, 55, 150, 0.15)" borderRadius="6px" fontFamily= 'Inter'fontStyle= "normal" fontWeight={{base:"600"}}  fontSize={{base:"16px",sm:"1.3em",md:"1.3em",lg:"16px",'2xl':"20px"}} lineHeight= "19px" cursor="pointer">
              Register Now
            </Button>                            
              </Box>
              <Box position="absolute" top={{base:"367px",sm:"460px",md:"414.55px", lg:"410px", '2xl': '440px'}} mt={{sm:"30px",md:"0px"}}width={{ base: "100%"}}height={{base:"19px",md:"22px"}}fontFamily="Inter"fontStyle="normal"fontWeight="600" fontSize={{base:"16px"}}lineHeight="19px"display="flex"justifyContent="center" textAlign= "center">
                <Text color="#4B5563" height={{md: "30px",}}>
                  Already Registered?{" "}
                </Text>
                <Text color="#FE3796">
                  Sign In
                </Text>
              </Box>
              </form>
            </Box>
          </Box>
        </Box>
        <Box position="absolute" w={{lg: "50%"}} h={{lg: "64.69em",'2xl':"100%"}} top={{ base: "0em",}} bg="linear-gradient(180deg, #F461A7 0%, #6D0034 100%)" display={{base:"none",lg:"flex"}}>
         <Box position={{lg:"absolute"}} top={{lg:"180.12px"}} width={{lg:"90%",xl:"85%",'2xl':"80%"}} height={{lg:"65.89%"}} left={{lg:"35px",xl:"70px",'2xl':"100px"}} > 
          <Grid position={{lg: "absolute" }} templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)"gap={1} height={{lg:"370.11px",xl:"390px",'2xl':"409px"}} width={{lg:"100%",'2xl':"97%"}} overflow="hidden" >
            <GridItem colSpan={2}>
               <Img src='/assets/Rectangle 3785.png' alt="Rectangle 3785.png" boxSize={{ lg:"100%",xl:"12.5em",'2xl':"12.68em" }} w={{lg:"100%",xl:"100%",'2xl':"100%"}} objectFit="cover"/> 
            </GridItem>
            <GridItem colSpan={3} rowSpan={2}>
              <Img src='../../assets/Rectangle 3784.png' alt="Rectangle 3784.png" boxSize={{ lg:"34em",xl:"36em", '2xl':"38.4em" }} w={{lg:"100%",'2xl':"100%"}} objectFit="cover"/>
            </GridItem>
            <GridItem colSpan={2} >
               <Img src='../../assets/Rectangle 3786.png' alt="Rectangle 3786.png" boxSize={{ lg:"100%",xl:"12.6em",'2xl':"12.68em"  }} w={{lg:"100%",xl:"100%",'2xl':"100%"}} objectFit="cover"/> 
            </GridItem>
          </Grid>
          <Box position="absolute"width={{lg: "100%"}} height={{lg: "30%"}} top={{lg: "435.91px",'2xl':"460px"}} overflow="hidden">
            <Text position="absolute" fontFamily="Inter" fontSize={{lg:"12px",'2xl':"14"}} fontWeight="600" lineHeight="28px" letterSpacing={{lg: "0.15em", xl: "0.2em" }} padding={{lg:"0px 30px ",xl:"0px 45px",'2xl':"0px 45px"}} color="rgba(255, 255, 255, 0.6)">
              NFT FACTS
            </Text>
            <Text position="absolute" width="100%" height={{lg:"122px"}} top={{ lg: "34px"}} padding={{lg:"0px 30px ",xl:"0px 2.8125em ",'2xl':"0px 2em"}} fontFamily="Inter" fontStyle="normal" fontWeight="400" fontSize={{ lg:"1.53vw",xl:"1.1em",'2xl':"1.4em"}} lineHeight="30px" color="#FFFFFF" overflow="hidden">
              NFTs (Non-Fungible Tokens) have been used to sell digital art for
              millions of dollars, with the highest price paid being over $69
              million for a piece by digital artist Beeple.
            </Text>
          </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
}
