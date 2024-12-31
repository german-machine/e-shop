import React from "react"
import "./Home.css"
import Product from "./Product"
import Header from "./Header"

function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="1232134"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellant Fabric for Men and Women (Blue)"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id="49538094"
                            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                            price={239.0}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="4903850"
                            title="All the light we Cannot See: The Breathtaking World Wid Bestseller Paperback"
                            price={199.99}
                            rating={3}
                            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://th.bing.com/th/id/OIP.LcPCfoWQtSgtG1fDeSijQgHaL7?w=115&h=180&c=7&r=0&o=5&pid=1.7"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://th.bing.com/th/id/OIP.N7QrGW76RyolDDsHtNjyuAHaFj?rs=1&pid=ImgDetMain" />
                    </div>

                    <div className="home__row">
                        <Product
                            id=""
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://th.bing.com/th/id/OIP.XZm7W8AoMrgZinqqUzVGAgHaDI?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home