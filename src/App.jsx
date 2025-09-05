import WalletConnectButton from "wallet-connect-button-react";
import { useState } from "react";

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
          label="Deel gegevens met je wallet (local)"
          lang="nl"
          walletConnectHost="http://localhost:3021" // normally defaults to https://wallet-connect.eu
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div> */}
      <div>
        <WalletConnectButton
          clientId="nlw_76039d745d088b940ad21703374a0cb6"
          apiKey="4edafd47a67584c563d6fc3f4d105d2900062c57352ec3db2dc1c962b57dce2e"
          label="Deel gegevens met je wallet (quick and easy, frontend only)"
          lang="en"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
      <div>
        <WalletConnectButton
          clientId="nlw_76039d745d088b940ad21703374a0cb6"
          label="Deel gegevens met je wallet (secure, via backend)"
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
          clientId="nlw_1e2fd1d4c972207a0298fcfededac1c1"
          helpBaseUrl="https://example.com/"
          lang="nl"
        ></WalletConnectButton>
      </div>
    </>
  );
}

export default App;
