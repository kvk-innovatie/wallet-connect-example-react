import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json());

const API_KEY = 'c26369a948c6e287905fc5d292e65083a496a43b387bda48dbc14924099d1315';
// const UPSTREAM = 'https://wallet-connect.eu';
const UPSTREAM = 'http://localhost:5021';

async function proxyToWalletConnect(req, res) {
  try {
    const response = await axios({
      method: req.method,
      url: `${UPSTREAM}${req.url}`,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Proxy error', message: error.message });
    }
  }
}

app.all('/api/*', proxyToWalletConnect);

app.listen(5030, () => {
  console.log('Node.js backend running on port http://localhost:5030');
});
