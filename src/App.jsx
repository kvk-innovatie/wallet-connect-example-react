import WalletConnectButton from "wallet-connect-button-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [attributes, setAttributes] = useState(null);

  return (
    <>
      <div id="buttons" style={{ display: attributes ? 'none' : 'block' }}>
        <div>
          <h1>Share data with your wallet</h1>
          <div>
            <h2>Using local Wallet-Connect server</h2>
            <div>
              <h3>With your personal wallet</h3>
              <WalletConnectButton
                clientId="nlw_c212597e1ef485b5401e280d6d356772"
                apiKey="c26369a948c6e287905fc5d292e65083a496a43b387bda48dbc14924099d1315"
                useLocalWcServer
                label="Share data with your wallet"
                lang="en"
                onSuccess={(attrs) => {
                  setAttributes(attrs);
                }}
              />
            </div>
            <div>
              <h3>With your business wallet</h3>
              <WalletConnectButton
                clientId="nlw_c50ec3760f9b4026ad6ca224f3d2f47f"
                apiKey="67be3968f4785ab4f49aaaee1587dc8ddb566b8d597c646817d68f17761c455b"
                useLocalWcServer
                business
                label="Share data with your business wallet"
                lang="en"
                onSuccess={(attrs) => {
                  setAttributes(attrs);
                }}
              />
            </div>
          </div>
          <div>
            <h2>Using remote Wallet-Connect server</h2>
            <div>
              <h3>With your personal wallet</h3>
              <WalletConnectButton
                clientId="nlw_bc45e349dfe586ac0290e0ad951436a7"
                apiKey="03a2d5c2665d877ee8ccd8aef8df440e3a8cbc99c2e9892bfcedca978956e2e5"
                label="Share data with your wallet (quick and easy, only frontend)"
                lang="en"
                onSuccess={(attrs) => {
                  setAttributes(attrs);
                }}
              />
              <WalletConnectButton
                clientId="nlw_c212597e1ef485b5401e280d6d356772"
                label="Share data with your wallet (secure, via backend)"
                lang="en"
                onSuccess={(attrs) => {
                  setAttributes(attrs);
                }}
              />
            </div>
            <div>
              <h3>With your business wallet</h3>
              <WalletConnectButton
                business
                clientId="nlw_bd2f376caef0d76a21c177181a9d1d89"
                apiKey="1a3e81b556e7716d8c7643fba10b09e57e8d6dedb340ec0e164ee31ce90eb4d4"
                label="Share data from your business wallet (remote, quick and easy)"
                lang="en"
                onSuccess={(attrs) => {
                  setAttributes(attrs);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Add data to your wallet</h1>
          <div>
            <h2>Using local Wallet-Connect server</h2>
            <div>
              <h3>With your personal wallet</h3>
              <WalletConnectButton
                label="Add data to your wallet"
                clientId="nlw_d0c7a4679e6756863a92a7288b3cb682"
                useLocalWcServer
                issuance
                helpBaseUrl="https://example.com/"
                lang="en"
              />
            </div>
            <div>
              <h3>With your business wallet</h3>
              <WalletConnectButton
                label="Add data to your business wallet"
                clientId="nlw_277d30d4e091b3a2a95fae1dbfb18ce8"
                useLocalWcServer
                business
                issuance
                helpBaseUrl="https://example.com/"
                lang="en"
              />
            </div>
          </div>
          <div>
            <h2>Using remote Wallet-Connect server</h2>
            <div>
              <h3>With your personal wallet</h3>
              <WalletConnectButton
                label="Add data to your wallet"
                clientId="nlw_2fe35d507c90c42aaa355cba14c3c8ed"
                issuance
                helpBaseUrl="https://example.com/"
                lang="en"
              />
            </div>
            <div>
              <h3>With your business wallet</h3>
              <WalletConnectButton
                label="Add data to your business wallet"
                clientId="nlw_a9517a99999176845e13f61fcaba262b"
                business
                issuance
                helpBaseUrl="https://example.com/"
                lang="en"
              />
            </div>
          </div>
        </div>
      </div>
      <pre id="attributes-content">
        {attributes ? JSON.stringify(attributes, null, 2) : ""}
      </pre>
    </>
  );
}

export default App;
