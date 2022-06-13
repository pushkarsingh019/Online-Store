import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreens from "./screens/ProductScreens";

// importing react router
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/products/:productId" element={<ProductScreens />} />
            </Routes>
        </main>
        {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default App;