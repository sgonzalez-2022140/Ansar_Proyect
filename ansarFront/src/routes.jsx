import App from "./App"

// /////////////////////////////// //
// Rutas de las vistas de Usuario //
// /////////////////////////////// //
import { HomePrincipal } from "./Pages/User/HomePrincipal"
import { QuienesSomos } from "./Pages/User/QuienesSomos"
import { Programas } from "./Pages/User/Programas"
import { Contacto } from "./Pages/User/Contacto"
import { Galeria } from "./Pages/User/Galeria"

import LayoutMain from "./Components/User/LayoutMain"

export const routes = [
    {
        path: '/',
        element: <LayoutMain><HomePrincipal /></LayoutMain>
    },
    {
        path: '/home',
        element: <LayoutMain><HomePrincipal /></LayoutMain>
    },
    {
        path: '/historia',
        element: <LayoutMain><QuienesSomos /></LayoutMain>
    },
    {
        path: '/programa',
        element: <LayoutMain><Programas /></LayoutMain>
    },
    {
        path: '/contacto',
        element: <LayoutMain><Contacto /></LayoutMain>
    },
    {
        path: '/galeria',
        element: <LayoutMain><Galeria /></LayoutMain>
    }
]
