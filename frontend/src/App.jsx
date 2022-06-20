import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreens from "./screens/ProductScreens";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

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
                <Route path="/signin" element={<LoginScreen />} />
                <Route path="/cart" element={<CartScreen />}>
                    <Route path="/cart/:productId" element={<CartScreen />} />
                </Route>
                <Route path="/checkout/" element={<h1>Checkout Page</h1>} />
            </Routes>
        </main>
        {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default App;