import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { cartContext } from './CartProvider'; // Import cart context if needed
import { Link } from 'react-router-dom';
const CartPage = () => {
  const { cart, setCart } = useContext(cartContext); // Using context for the cart
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null); // To handle errors if the request fails
  const user = JSON.parse(localStorage.getItem('user'));
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    setTotal(cart.reduce((acc ,curr)=>acc+parseFloat(curr.paint.price),0))
  },[cart])
  // Fetch cart data when component mounts
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('https://test4-ayw7.onrender.com/api/paintcarts?filters[users_permissions_user][documentId]=ady18x10n29cov15vq9qw84g&populate=paint.image&populate=users_permissions_user');
        setCart(response.data.data); // Set the cart items in context or state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart data'); // Handle error
        setLoading(false);
      }
    };

    fetchCartData();
  }, [setCart]);

  const handleDelete = async (id) => {
    try {
      // Make the delete request
      await axios.delete(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`);

      // Update the cart in the context or local state without refreshing the page
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    } catch (err) {
      alert("Failed to remove the product");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="m-10">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <button>
            <img
              src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png"
              alt="cart"
              className="w-50"
            />
          </button>
        </Link>
        <p className="text-lg text-center pl-3 font-bold text-teal-800">Your cart is empty!</p>
      </div>
      ) : (
        <div className="flex flex-wrap gap-8">
          <p className="text-3xl font-thin">Cart Product</p>
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="w-full md:w-1/4 p-4 border m-2 border-gray-500 rounded shadow-lg"
            >
              <div>
                <img src={cartItem.paint.image.url} alt="" />
                <h3 className="font-medium text-lg">{cartItem.paint.name}</h3>
                <p className="text-md text-gray-700">{cartItem.paint.price}</p>
                <button
                  className="bg-red-800 text-white rounded py-1 px-3 mt-2 hover:bg-red-700 transition duration-300"
                  onClick={() => handleDelete(cartItem.id)}  // Use the correct ID here
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

{cart.length > 0 && <h3 className='m-10 font-bold'>{total}</h3>}
    </div>
  );
};

export default CartPage;
