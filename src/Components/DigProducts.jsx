import {  useNavigate } from 'react-router-dom';
const DigProducts = ({ product }) => {
  const name=product.name.length > 20 ? product.name.substring(0,20)+"..":product.name;

  // const { cart, setCart } = useContext(cartContext);  // Access cart and setCart from context
  const navDetails = useNavigate();  // Hook for navigation

 

  const handleClick = () => {
    navDetails(`/productdetails/${product.documentId}`); // Navigate to the root URL
  };
  console.log(product)
  // console.log(data1)
  return (
    <div className='flex flex-wrap justify-center gap-6'>
       {product.image && product.image.length > 0 ? (
        <div className="border border-rounded p-5 rounded flex flex-col items-center w-60">
          <div onClick={handleClick} className="cursor-pointer">
            <img
              className='w-50 h-50 object-cover rounded'
              src={product.image[0].url}
              alt={product.name}
            />
          </div>

            <p className='text-lg text-black mt-3'>
              <span className="font-medium text-lg">Name:</span> {name}
            </p>
            <p className='text-lg text-black font-bold'>
              <span className="font-medium text-lg">Price:</span> {product.price}
            </p>

        </div>
      
    ) : (
      <p>No images available</p>
    )}
  </div>
  );
};

export default DigProducts;
