import React from 'react'
import { NativeBaseProvider, Box, Button, Center, Flex } from 'native-base'

export default function App() {
  function handleButtonPressed() {
    alert('how ya doing?')
  }
  return (
    <NativeBaseProvider>
      <Flex
        style={{ minHeight: '100%' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Center>
          <Button
            onPress={handleButtonPressed}
            borderRadius={'lg'}
            colorScheme={'purple'}
            variant={'ghost'}
          >
            Hello world
          </Button>
        </Center>
      </Flex>
    </NativeBaseProvider>
  )
}
