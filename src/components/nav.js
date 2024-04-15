import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import witchImg from "../assets/witch-icon.png";
import { ShopContext } from "../context/shopContext";
const Nav = () => {
    const {cartItems}=useContext(ShopContext)
    const itemCount=cartItems?.reduce((prev , current)=>{
        return prev + current.count
    },0)
    return (
        <nav className="navbar navbar-light bg-body-secondary navbar-expand-lg fixed-top shadow pt-3 pb-3">
            <div className="container-fluid">
                <a className="navbar-brand nav-font-brand fw-semibold">
                    <img
                        src={witchImg}
                        className="image-fluid logo-top d-inline-block align-text-bottom mx-2"
                    />
                    MoonlitWitch <span className="text-danger">Shop</span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse fw-semibold"
                    id="navbarTogglerDemo03"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/online-shop" className="nav-link">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {itemCount>0 && <span className="mx-1 badge text-bg-danger p-1">{itemCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
