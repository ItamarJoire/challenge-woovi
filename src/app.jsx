import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./routes"

import { PaymentProvider } from "./contexts/payment"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
      <PaymentProvider>
        <ToastContainer autoClose={3000}/>
        <RoutesApp />
      </PaymentProvider>
    </BrowserRouter>
  )
}


