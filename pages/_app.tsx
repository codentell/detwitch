import '../styles/global.css'
import { MoralisProvider } from "react-moralis";
// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return  (<MoralisProvider appId={process.env.NEXT_APP_MORALIS_APPLICATION_ID} serverUrl={process.env.NEXT_APP_MORALIS_SERVER_URL}>
        <Component {...pageProps} />
  </MoralisProvider>);
}
