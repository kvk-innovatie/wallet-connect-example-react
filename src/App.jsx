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
          clientId="nlw_a4b30ed44135963dd1826e1d51814ab3"
          apiKey="ee1c64c4e3d2f6bb1f9f0f4b9cabdffac1391966456e2e59760194b3478b2bad"
          label="Deel gegevens met je wallet (quick and easy, frontend only)"
          lang="en"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
      <div>
        <WalletConnectButton
          clientId="nlw_a4b30ed44135963dd1826e1d51814ab3"
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
          clientId="nlw_7487503f8b815f12b56cfb9c917ee94a"
          helpBaseUrl="https://example.com/"
          lang="nl"
        ></WalletConnectButton>
      </div>
    </>
  );
}

export default App;
