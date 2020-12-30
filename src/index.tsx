import React from "react";
import { render } from "react-dom";
import { Top } from "./pages/tops";
import { About } from "./pages/about";
import { Service } from "./pages/service";
import { Product } from "./pages/product";
import { Impression } from "./pages/impression";
import { Footer } from "./pages/footer";
import "./css/style.css";

const App = () => {
    return (
        <>
            <Top />
            <About />
            <Service />
            <Product />
            <Impression />
            <Footer />
        </>
    );
};

render(<App />, document.getElementById("app"));
