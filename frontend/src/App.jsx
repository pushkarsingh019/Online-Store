import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreens from "./screens/ProductScreens";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddressScreen from "./screens/AddressScreen";

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
                <Route path="/users/profile" element={<ProfileScreen />} />
                <Route path="/signin" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/address" element={<AddressScreen />} />
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