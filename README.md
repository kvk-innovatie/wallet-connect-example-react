# Example of the Wallet Connect Button in a React app 

This repo shows an example of the integration of the Wallet Connect Button in a React app. It is based on the standard React + Vite setup. For further explanation and documentation, visit: https://wallet-connect.eu

In src/App.jsx there are two example buttons. The Quick & easy (frontend only) variant and the secure (via backend) variant. If you want to run the secure variant, you need to run a backend. To run the NodeJS backend example, use: 
```
npm run server:node
```

To run the Python backend example, use:
```
npm run server:python
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
