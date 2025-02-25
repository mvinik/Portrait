import React from 'react'
import data from './Assets/product.json';
import { useQuery } from "@tanstack/react-query";
const UseQuery = () => {
    const fetchdata = () => {
        fetch("./Assets/assets/")
            .then((res) => {
                res.json()
            })
    }
    const { data, isLoading, isError, error } = useQuery(['datas'], fetchdata)
    if (isLoading) {
        <span>Loading..</span>
    }
    if (isError) {
        <span>Error:{error.message}</span>
    }
    return (
        <>  <div>{data.map((datas) => (
        <div key={data.id}>
            <h3>{data.name}</h3>
        </div>
        ))}</div> </>
    )
}

export default UseQuery