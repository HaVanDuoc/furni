import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Services from "./pages/Services";

const routes = [
    { path: "/", page: Home, layout: DefaultLayout },
    { path: "/shop", page: Shop, layout: DefaultLayout },
    { path: "/about", page: About, layout: DefaultLayout },
    { path: "/services", page: Services, layout: DefaultLayout },
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
