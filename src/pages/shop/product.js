import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, title, image, price, description, category } = props.data;
  const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)

  const isInCart=cartItems?.some((item)=>item.id===id)
  return (
    <div className="col-xl-3 col-md-4 col-sm-5 mb-3">
      <div className="card card-img-top p-2 border border-dark-subtle ">
        <div className="ratio-container">
          <img src={image} className="card-img-top img-fluid" alt={title} />
        </div>
        <div className="card-body ">
          <p className="card-title">
            {title.substring(0, 25)}
            {title.length > 25 && "..."}
          </p>
          <h5 className="card-text text-danger p-2">{price} $</h5>
          <button className="btn btn-light btn-sm border border-dark-subtle" onClick={()=>addToCart(id)}> 
          <FontAwesomeIcon icon={faPlus} />
           </button>
           {cartItems?.filter((row)=> row.id===id)[0]?.count === 0 || cartItems?.filter((row)=> row.id===id)[0]?.count === undefined ? <span className="mx-1 badge text-bg-warning p-2">0</span> :<span className="mx-1 badge text-bg-warning p-2"> {cartItems?.filter((row)=> row.id===id)[0]?.count} </span>}
          

          {
            <button className="btn btn-light btn-sm border border-dark-subtle" onClick={()=>removeFromCart(id)}> 
          <FontAwesomeIcon icon={faMinus} />
           </button>}
        </div>
      </div>
    </div>
  );
};
