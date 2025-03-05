import { assets } from "./Assets/assets";
import React from 'react'

import ProductList from "./Components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { Snackbar } from '@mui/material';
import { useFeedback } from './FeedbackContext';
import MuiAlert from '@mui/material/Alert';
import CircularSize from "./loadingpage";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} style={{color:'white',backgroundColor:'#3775d1',borderRadius:'8px'}} ref={ref} variant="filled" {...props} />;
  });

const Home = () => {
    const { feedback } = useFeedback();
    const fetchProducts = async () => {
        const res = await fetch('https://test4-ayw7.onrender.com/api/paints?populate=image');
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data.data;
    };

    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products'],  // Query key
        queryFn: fetchProducts,  // The query function
    });

    if (isLoading) {
        return <CircularSize/>
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div>

                <section className="bg-white-800 mt-16 leading-10 text-black text-center ">
                    <h1 className="text-4xl font-thin ">Custom Portrait Drawings, Created Just For You</h1>
                    <p className="text-lg mt-4">Turn your favorite memories into beautiful art pieces with our professional artists.</p>
                    {/* <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Order Your Portrait</button> */}
                </section>

                <div className='mx-auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {products.map((product) => (

                        <ProductList key={product.id} product={product} />
                    ))}
                </div>

                {/* How it work*/}
                {/* <HowItWorks /> */}

                {/*Coummunity */}
                <div className="container mt-12 mx-auto flex px-10 items-center flex-col md:flex-row ">
                    <section className="md:w-1/2 mb-12 mt-12 ">
                        <img className="h-100 w-100 mx-auto " src={assets.team} alt='img' />
                    </section>
                    <section className="md:w-1/2 text-center items-center mb-12 mt-12 leading-8">
                        <h1 className="text-4xl font-thin mb-5 ">Community of artists</h1>
                        <p className="text-lg p-3 leading-8">
                            Our passion lies in supporting and promoting the incredible talent within the artistic community. Our vision is to build a strong network of exceptional artists..
                        </p>
                        <button className="mt-6 px-5 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition" >KNOW MORE</button>
                    </section>
                </div>
                <Snackbar open={!!feedback} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <div style={{}}>
                        <Alert  severity="success" sx={{ backgroundColor: 'green', color: 'white' }}>{feedback}</Alert>
                    </div>
                </Snackbar>

            </div>

        </>
    )
}
export default Home;