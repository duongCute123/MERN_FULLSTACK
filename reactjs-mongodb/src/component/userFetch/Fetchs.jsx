import { useState,useEffect } from "react";
export const UseFetch=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchs=async()=>{
            try {
                const response=await fetch(url)
                const data=await response.json();
                setData(data)
            } catch (error) {
                console.log(error)
                console.log("Lỗi lấy dữ liệu")
            }
        }
        fetchs()
    },[url])
    return data
}
export default UseFetch