import { NativeBaseProvider } from 'native-base'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  )
}

export default MyApp
