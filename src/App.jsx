import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PageProvider } from "./Components/PageProvider"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { Team } from "./Pages/Team"
import { Process } from "./Pages/Process"
import { Pricing } from "./Pages/Pricing"
import { Blog } from "./Pages/Blog"




const router = createBrowserRouter([
    {
        path: '/',
        element: <PageProvider />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'team',
                element: <Team />
            },
            {
                path: 'process',
                element: <Process />
            },
            {
                path: 'pricing',
                element: <Pricing />
            },
            {
                path: 'blog',
                element: <Blog />
            }
            
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />

}

export default App