import "../styles/global.css"
import { MoralisProvider } from "react-moralis"
import Navbar from "../components/navbar"

// const appID = 'jBIXs8qDgrH7qcIVOk9Q7zqRwQX9JhDbxD3RpZ5E';
// const serverUrl = 'https://oyfyipwo2rdn.usemoralis.com:2053/server';

export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="qsCKafTgk7Qkz0EBERQboQDNQnziW7HDLrYGybU9"
      serverUrl="https://vxudzflk4mxl.usemoralis.com:2053/server"
    >
      <Navbar />
      <Component {...pageProps} />
    </MoralisProvider>
  )
}
