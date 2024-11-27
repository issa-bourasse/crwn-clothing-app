import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='cart-dropdown-container' ref={dropdownRef}>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button buttonType='inverted' onClick={goToCheckoutHandler}>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;