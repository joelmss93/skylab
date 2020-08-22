import Head from 'next/head'
import { Heading, Grid, Flex } from '@chakra-ui/core'


export default function Home() {
  return (
    <Grid 
      as="main"
      height="100vh"
      templateColumns="1fr 480px 1fr"
      templateRows="1fr 400px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
  >
    <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
      <img src="/rocketseat.svg" alt="Rocketseat"/>
      <Heading size="2xl" lineHeight="shorter" marginTop={16}>Faça seu login na plataforma
      </Heading>
    </Flex>
    <Flex
      gridArea="form"
      height="100%"
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      padding={16}
      >


    </Flex>
  )
}
