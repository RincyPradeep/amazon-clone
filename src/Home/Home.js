import React from 'react'
import './Home.css'
import Products from '../Products/Products'

const Home = () => {
    return (
        <div className="home">
            <img src="/images/banner.jpg" alt="banner" className="banner" />
            <div className="home-row">
                <Products id={1} title="Midea 6 kg Fully Automatic Front Load Washing Machine (MWMFL060HEF, White, In-built Heater)" price={22850} rating={5} image="/images/products/image1.jpeg" />
                <Products id={2} title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls" price={17658} rating={4} image="/images/products/image2.jpeg" />
            </div>

            <div className="home-row">
                <Products id={3} title="HP All-in-One 24-df0215in 23.8-Inch (60.4 cm) FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 2019/Jet Black)" price={43490} rating={5} image="/images/products/image3.jpg" />
                <Products id={4} title="SanDisk Cruzer Blade 32GB USB Flash Drive" price={399} rating={4} image="/images/products/image4.jpeg" />
                <Products id={5} title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)" price={499} rating={4} image="/images/products/image5.jpeg" />
            </div>

            <div className="home-row">
                <Products id={7} title="Echo Dot (Grey) Combo with Wipro 9W Smart Bulb - Easy Set-Up" price={2050} rating={5} image="/images/products/image6.jpeg" />
            </div>
            
        </div>
    )
}

export default Home
