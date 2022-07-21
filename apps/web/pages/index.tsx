import { Button, Center, Text } from 'native-base'

import styles from '../styles/index.module.css'

export default function Web() {
  return (
    <div className={styles.container}>
      <Center>
        <Text fontSize='5xl'>Hello world</Text>
        <Button
          onPress={() => console.log('hello world')}
          borderRadius={'lg'}
          colorScheme={'purple'}
        >
          Click Me
        </Button>
      </Center>
    </div>
  )
}
