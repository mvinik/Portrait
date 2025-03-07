import { useQuery } from '@tanstack/react-query';
import React from 'react'
import CircularSize from './loadingpage';

const MyOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
 const  fetchMyorders= async () => {
  const res = await fetch(`https://test4-ayw7.onrender.com/api/orders?filters[users_permissions_user][documentId]=${user.documentId}&populate=orderitems.paint`);
  if (!res.ok) {
      throw new Error('Failed to fetch Orders');
  }
  const data = await res.json();
  return data.data;
};

const {data,isLoading,isError,error}=useQuery({queryKey:['orders'],queryFn:fetchMyorders})
if(isLoading){
  return<CircularSize/>
}
if(isError){
  return<span>Error:{error.message}</span>
}
console.log(data)
  return (
   <>
 <div>

 </div>
   </>
  )
}

export default MyOrders