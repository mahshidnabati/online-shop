import { PRODUCTS } from "../../data/products";
import { Product } from "./product";

const Shop = () => {
    return (
        <div className="container">
            <h1>All Products</h1>
            <div className="row justify-content-around">
                {
                    PRODUCTS.map((productData)=><Product data={productData}/>)
                }
            </div>
        </div>
    )
}
export default Shop;