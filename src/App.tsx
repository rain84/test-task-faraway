import { Routes, Route, Navigate } from 'react-router-dom'
import { Breadcrumbs as Breadcrumbs_, withURLDataProvider } from 'ui'
import { People, Info } from 'layout'

import './app.css'

const Breadcrumbs = withURLDataProvider(Breadcrumbs_)

const App = () => (
  <div className="relative overflow-hidden bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="app-container">
        <main className="p-4 mt-6 border-2 rounded-lg border-slate-200 app-main">
          <div className="flex justify-start">
            <Breadcrumbs />
          </div>
          <br />
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
