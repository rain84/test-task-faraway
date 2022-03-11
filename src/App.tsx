import { Routes, Route, Navigate } from 'react-router-dom'
import { Menu } from 'ui'
import { People, Info } from 'layout'

import './app.css'

const App = () => (
  <div className="relative overflow-hidden bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="app-container">
        <Menu />

        <main className="app-main">
          <Routes>
            <Route path="/">
              <Route index element={<DefaultRoute />} />
              <Route path="people" element={<People />} />
              <Route path="people/:id" element={<Info />} />
              <Route path="*" element={<DefaultRoute />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  </div>
)

function DefaultRoute() {
  return <Navigate to={'/people'} replace={true} />
}

export default App
