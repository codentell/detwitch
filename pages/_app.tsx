import '../styles/global.css'
import { MoralisProvider } from "react-moralis";

// This default export is required in a new `pages/_app.js` file.

const appID = process.env.NEXT_APP_MORALIS_APPLICATION_ID ;
const serverUrl = process.env.NEXT_APP_MORALIS_SERVER_URL;



export default function MyApp({ Component, pageProps }) {
  return  (<MoralisProvider appId={appID} serverUrl={serverUrl}>
        <Component {...pageProps} />
  </MoralisProvider>);
}
