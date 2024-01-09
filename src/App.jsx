import { Router, RouterProvider } from "react-router-dom"
import siteRoutes from "./routes"

function App() {
  return <main className="grid"><RouterProvider router={siteRoutes} /></main>
}

export default App
