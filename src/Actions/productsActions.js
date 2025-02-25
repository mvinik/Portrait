import { productsFail, productsRequest, productsSuccess } from '../Slices/productsSlice';
import data from '../Assets/product.json'
export const getProducts = async (dispatch) => {
  try {
    dispatch(productsRequest());
    const response = await fetch('data');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFail(error.message)); // Sending a more general error message
  }
};
