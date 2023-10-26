import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context/index";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider
  activeChain="goerli"
      >
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
    </ThirdwebProvider>,
)
