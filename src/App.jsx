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
      <WalletConnectButton
        onSuccess={(attrs) => {
          setAttributes(attrs);
        }}
        clientId="nlw_358b64b727fff6d0b03b7b29edb7da00"
        apiKey="78396e965f9698aed80603ab517424bcc8f62b20b2e7e6d0a2ee69f6b962cd25"
        walletConnectHost="http://localhost:3021" // normally defaults to https://wallet-connect.eu
      >
        Deel gegevens met je wallet (local)
      </WalletConnectButton>

      <WalletConnectButton
        onSuccess={(attrs) => {
          setAttributes(attrs);
        }}
        clientId="nlw_fe98ca6b35b25dbad0717ebb184dbe68"
        apiKey="27ff4d0ceb03b0cd02a4b4d6fe4fe6436791223be38823bc97b8319a5991c769"
        lang="en"
      >
        Deel gegevens met je wallet (frontend only)
      </WalletConnectButton>

      <WalletConnectButton
        onSuccess={(attrs) => {
          setAttributes(attrs);
        }}
        clientId="nlw_fe98ca6b35b25dbad0717ebb184dbe68"
        lang="en"
      >
        Deel gegevens met je wallet (via backend)
      </WalletConnectButton>
    </>
  );
}

export default App;
