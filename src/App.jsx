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
          clientId="nlw_fe98ca6b35b25dbad0717ebb184dbe68"
          apiKey="27ff4d0ceb03b0cd02a4b4d6fe4fe6436791223be38823bc97b8319a5991c769"
          label="Deel gegevens met je wallet (quick and easy, frontend only)"
          lang="en"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
      <div>
        <WalletConnectButton
          clientId="nlw_fe98ca6b35b25dbad0717ebb184dbe68"
          label="Deel gegevens met je wallet (secure, via backend)"
          lang="nl"
          onSuccess={(attrs) => {
            setAttributes(attrs);
          }}
        />
      </div>
    </>
  );
}

export default App;
