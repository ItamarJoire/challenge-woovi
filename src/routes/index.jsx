import { Routes, Route } from 'react-router-dom'

import { Pix, CreditCard, CreditCardConfirm, Home } from '../pages'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pix" element={<Pix />} />
      <Route path="/credit-card" element={<CreditCard />} />
      <Route path="/credit-card-confirm" element={<CreditCardConfirm />} />
    </Routes>
  )
}