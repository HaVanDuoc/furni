import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";

const routes = [
    { path: "/", page: Home, layout: DefaultLayout },
    { path: "/shop", page: Shop, layout: DefaultLayout },
    { path: "/about", page: About, layout: DefaultLayout },
    { path: "/services", page: Services, layout: DefaultLayout },
    { path: "/blog", page: Blog, layout: DefaultLayout },
    { path: "/contact", page: Contact, layout: DefaultLayout },
    { path: "/cart", page: Cart, layout: DefaultLayout },
    { path: "/checkout", page: Checkout, layout: DefaultLayout },
    { path: "/thankyou", page: Thankyou, layout: DefaultLayout },
];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        const { path, page: Page, layout: Layout } = route;

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
