import '../styles/global.css'
import { MoralisProvider } from 'react-moralis';
import Navbar from '../components/navbar';

const appID = "ZZ54tNjMceK0SIAFzmipBtf5T5Wa30rOsjrWmN9N";
const serverUrl = "https://oojyu2xi0x8a.usemoralis.com:2053/server";



export default function MyApp({ Component, pageProps }) {
  return (<MoralisProvider appId={appID} serverUrl={serverUrl}>
    <Navbar />
    <Component {...pageProps} />
  </MoralisProvider>);
}
