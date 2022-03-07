import { Routes, Route, Navigate } from 'react-router-dom'

import { Menu } from 'ui'
import { Layout } from 'layout'
import { routing } from './app.config'

import './App.css'

const App = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="app-container">
        <Menu />

        <main className="app-main">
          <Routes>
            <Route path={routing.home} element={<Layout.Info />} />
            <Route path={routing.home}>
              <Route
                path="*"
                element={<Navigate to={routing.home} replace={true} />}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  </div>
)

export default App
