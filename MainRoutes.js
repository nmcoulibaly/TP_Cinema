import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../pages/Films";
import About from "../pages/About";
import DetailFilm from "../pages/DetailFilm";
function MainRoutes() {
    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<DetailFilm />} />
            </Routes>
        </>
    )
}
export default MainRoutes;