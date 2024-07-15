import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./routes"

import { PaymentProvider } from "./contexts/payment"

export function App() {
  return (
    <BrowserRouter>
      <PaymentProvider>
        <RoutesApp />
      </PaymentProvider>
    </BrowserRouter>
  )
}


