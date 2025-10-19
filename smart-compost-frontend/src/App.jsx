import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import DetailAnalysis from './pages/DetailAnalysis.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Routing Halaman */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail" element={<DetailAnalysis />} />
        </Routes>
      </main>
    </div>
  )
}
