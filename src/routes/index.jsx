import { Routes, Route } from 'react-router-dom'

import { Pix, CreditCard, Home } from '../pages'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pix" element={<Pix />} />
      <Route path="/credit-card" element={<CreditCard />} />
    </Routes>
  )
}