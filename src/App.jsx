import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />

}

export default App