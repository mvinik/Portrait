import React, { useContext, useState } from 'react';
import { cartContext } from './CartProvider';
import { Link, useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const navCartProducts=useNavigate()

  const { addToCart, order} = useContext(cartContext);

  const [formData, setFormData] = useState({
    faces: '',
    size: '',
    frameOption: '',
    frameColor: '',
    orderNote: '',
    image: null,
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const fileURL = URL.createObjectURL(file)
    setFormData((prevData) => ({
      ...prevData,
      image: fileURL,
    }));
  };

  const addCart = () => {
    addToCart(formData); // Add the form data to cart context
    navCartProducts('/cart')

  };

 

  return (
    <>
      <div>
        {order.map((product) => (
          <h6 className='text-sm p-5 ml-5' key={product.id}>
            <Link className='text-gray-400 hover:text-black' to='/'>Home</Link>
            <span className='text-gray-400'> / </span> {product.name}
          </h6>
        ))}
      </div>

      <div className="mt-2 sm:items-center mx-3 sm:mx-8 flex flex-col sm:flex-row justify-center items-start space-y-8 sm:space-x-8 mt-8">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 mx-3">
          {order.map((product) => (
            <div className='mx-5 p-5 rounded' key={product.id}>
              <img className='w-full rounded' src={product.pic} alt='img' />
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-1/2 m-5">
          {order.map((product) => (
            <div key={product.id} className="p-5 rounded">
              <h2 className='text-xl p-2 text-gray-600 font-medium'>{product.name}</h2>
              <h2 className='text-xl p-2 text-gray-600 font-medium'>{product.price}</h2>
              <div className='sm:items-center'>
                {/* Number of Faces */}
                <label className="font-medium text-md tracking-wide">Number Of Faces:</label><br />
                <select
                  name="faces"
                  value={formData.faces}
                  onChange={handleChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                >
                  <option value="">Select Faces</option>
                  <option value='1'>1 Face</option>
                  <option value='2'>2 Faces</option>
                  <option value='3'>3 Faces</option>
                  <option value='4'>4 Faces</option>
                  <option value='5'>5 Faces</option>
                  <option value='6'>6 Faces</option>
                  <option value='7'>7 Faces</option>
                  <option value='8'>8 Faces</option>
                  <option value='9'>9 Faces</option>
                  <option value='10'>10 Faces</option>
                </select>
                <br />
                {/* Choose Size */}
                <label className="font-medium text-md tracking-wide">Choose Size:</label><br />
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                >
                  <option value="">Select Size</option>
                  <option value="8X6 Inches">8X6 Inches</option>
                  <option value="12X10 Inches">12X10 Inches</option>
                  <option value="16X12 Inches">16X12 Inches</option>
                  <option value="24X16 Inches">24X16 Inches</option>
                </select>
                <br />
                {/* Framing Option */}
                <label className="font-medium text-md tracking-wide">Framing Option:</label><br />
                <select
                  name="frameOption"
                  value={formData.frameOption}
                  onChange={handleChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                >
                  <option value="">Select Framing Option</option>
                  <option value="Framed">Framed</option>
                  <option value="Framed + Video">Framed + Video</option>
                  <option value="Rolled Paper">Rolled Paper</option>
                  <option value="Rolled Paper + Video">Rolled Paper + Video</option>
                </select>
                <br /><br />
                {/* Frame Color */}
                <label className="font-medium text-md tracking-wide">Choose Frame Color:</label><br />
                <select
                  name="frameColor"
                  value={formData.frameColor}
                  onChange={handleChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                >
                  <option value="">Select Frame Color</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                </select>
                <br />
                {/* Order Note */}
                <label className="font-medium text-md tracking-wide">Add Order Note:</label><br />
                <textarea
                  name="orderNote"
                  value={formData.orderNote}
                  onChange={handleChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                />
                <br />
                {/* Choose Image */}
                <label className="font-medium text-md tracking-wide">Choose Image:</label><br />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full sm:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                />
                <br />
                {/* Add to Cart Button */}
                <button
                  onClick={addCart}
                  className="bg-teal-700 text-white font-medium w-full p-3 rounded hover:bg-teal-400 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderForm;
