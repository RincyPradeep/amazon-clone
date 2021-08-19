import React from 'react'
import './Home.css'
import Products from '../Products/Products'

const Home = () => {
    return (
        <div className="home">
            <img src="/images/banner.jpg" alt="banner" className="banner" />
            <div className="home-row">
                <Products id={1} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={5} image="/images/products/image1.jpeg" />
                <Products id={2} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={2} image="/images/products/image1.jpeg" />
            </div>

            <div className="home-row">
                <Products id={3} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={5} image="/images/products/image1.jpeg" />
                <Products id={4} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={4} image="/images/products/image1.jpeg" />
                <Products id={5} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={5} image="/images/products/image1.jpeg" />
            </div>

            <div className="home-row">
                <Products id={7} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={3} image="/images/products/image1.jpeg" />
            </div>
            
        </div>
    )
}

export default Home
