import React from "react";
import PropTypes from 'prop-types';
import '../CartPage.css';
import Item from "./Item";

function CartPage({items, onAddOne, onRemoveOne}) {
    return (
        <ul className="CartPage-items">
            {items.map(item =>
            <li key={item.id} className="CartPage-item">
                <Item item={item}/>
            </li>)}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;