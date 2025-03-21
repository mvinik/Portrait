import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsList from "./Reviewpage";
import './style.css';
import axios from "axios";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navDetails = useNavigate()
  const { id } = useParams(); // Get the product id from URL params
  const [product, setProduct] = useState(null); // State to hold the product data
  const [loading, setLoading] = useState(true); // State for loading state
  const [cartloading, setCartLoading] = useState(false); // State for loading state
  const [error, setError] = useState(null); // State for error handling
  const [selectedImage, setSelectedImage] = useState(""); // State for the clicked image

  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

  useEffect(() => {
    // Function to fetch product details based on id
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://test4-ayw7.onrender.com/api/paints/${id}?populate=image`);
        const data = await response.json();
          console.log(data,'Response')
        if (response.ok) {
          setProduct(data.data); // Assuming 'data' contains the product
          setSelectedImage(data.data.image[0].url); // Default to the first image as the selected image
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        setError(err.message); // Set error if any
      } finally {
        setLoading(false); // Stop loading once data is fetched or error occurs
      }
    };

    fetchProductData(); // Fetch the product data when component mounts
  }, [id]); // Depend on id, so the fetch is triggered whenever the id changes

  const addCart = async () => {
    if (!user) {
      alert("User not logged in.");
      return;
    }
    setCartLoading(true)
    const checkcart = await axios(`https://test4-ayw7.onrender.com/api/paintcarts?filters[paint][documentId]=${product.documentId}`)
    console.log(checkcart,'check cart') 


    
    const data1 = {
      users_permissions_user: user.documentId,
      paint: product.documentId,
      qty: 1
    };  // Add product to cart and send POST request

    console.log(data1,'Data1')
    try {
     const res = await axios.post("https://test4-ayw7.onrender.com/api/paintcarts", { data: data1 }, {
      headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res,'data')
      setCartLoading(false)
      // alert("Added to cart");
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product to cart.');
    }

    if (checkcart.data.data.length > 0) {
      console.log(checkcart.data.data.length)
      navDetails('/cartpage')
      return;
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Update selected image when a thumbnail is clicked
  };

  if (loading) {
    return <CircularProgress/>
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="product-details container mx-auto px-20 py-8">
        {/* Flexbox to arrange three divs in a row */}
        <div className="flex flex-col mt-10 md:flex-row gap-8">
          {/* First div: Related images (with conditional styling to highlight selected image) */}
          <div className="w-full md:w-1/10 flex flex-col gap-4">
            {product.image?.map((image, index) => (
              <img
                key={index}
                src={image?.url}
                alt={`related-image-${index}`}
                className={`cursor-pointer object-contain w-full mb-2 ${selectedImage === image?.url ? "border-1 border-teal-400" : ""
                  }`} // Add a border for the selected image
                onClick={() => handleImageClick(image?.url)}
                style={{ height: "80px", borderRadius: "8px" }} // Fixed height and rounded corners
              />
            ))}
          </div>

          {/* Second div: Main image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={selectedImage || product.image[0]?.url}
              alt="Main product"
              className="max-w-full max-h-96 object-contain"
            />
          </div>

          {/* Third div: Product details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-lg mt-2">{product.description}</p>
            <h3 className="text-xl font-bold mt-4">Price: ${product.price}</h3>
            <div className="mx-auto flex flex-col justify-center">
              <button className="bg-teal-400 font-medium text-lg mt-5 p-3 rounded hover:bg-teal-200 transition"
                onClick={addCart}>

                {cartloading? <Stack spacing={2} direction="row" style={{justifyContent:'center'}}>
                  <CircularProgress size="30px" />
                </Stack>:  'add to cart'}
              </button><br />
              <button className="button-with-inner-border rounded border border-teal-400 text-teal-400 text-lg font-medium my-5 p-3">
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>
        <ReviewsList id={id} />
      </div>
    </>
  );
}
