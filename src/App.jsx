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
          clientId="nlw_e80b9c17e0a51ca3e7f0a0a82d573d49"
          apiKey="bf9d1971086d1826dcee6dad58bf5682078245e7c52f353ba34d14cae34bba25"
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
          clientId="nlw_4aae3f2b071308f33fa55cb4dd0a4cce"
          apiKey="59c54f167b8e9c2f900aa3d3d897239d4355d1ad4a733a38cc00ab0e7abaf77b"
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
