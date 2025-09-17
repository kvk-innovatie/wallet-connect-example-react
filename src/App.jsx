import WalletConnectButton from "wallet-connect-button-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [attributes, setAttributes] = useState(null);

  if (attributes) {
    return (
      <div>
        <h3>Received attributes:</h3>
        <pre>{JSON.stringify(attributes, null, 2)}</pre>
      </div>
    );
  }

  return (
    <>
      {/* <div>
        <WalletConnectButton
          clientId="nlw_358b64b727fff6d0b03b7b29edb7da00"
          apiKey="78396e965f9698aed80603ab517424bcc8f62b20b2e7e6d0a2ee69f6b962cd25"
          label="Deel gegevens vanuit je wallet (local)"
          lang="nl"
          walletConnectHost="http://localhost:3021" // normally defaults to https://wallet-connect.eu
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div> */}
      <div>
        <WalletConnectButton
          clientId="nlw_c960db8c1ccf3b56734bbb3af4f3853d"
          apiKey="de857820619ec931817863d4cf84b0f471feb9ad6f336d0882e2b9a3a6f52169"
          label="Deel gegevens vanuit je wallet (quick and easy, frontend only)"
          lang="en"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
      <div>
        <WalletConnectButton
          clientId="nlw_76039d745d088b940ad21703374a0cb6"
          label="Deel gegevens vanuit je wallet (secure, via backend)"
          lang="nl"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
      <div>
        <WalletConnectButton
          issuance
          label="Voeg data toe aan je wallet"
          clientId="nlw_66d939a49ec11a32856280dfeafe3f9d"
          helpBaseUrl="https://example.com/"
          lang="nl"
        ></WalletConnectButton>
      </div>
    </>
  );
}

export default App;
