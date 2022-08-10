import {useState,useEffect} from "react"
import { get } from "../services/apiService"

const useFetch = (url)=>{
    const [apiData,setApiData] = useState([])
    useEffect(()=>{
        const fetchData = async (url)=>{
                const {ok,data} = await get(url)
                setApiData(state=> ok ? data : state)
        }
        fetchData(url)
    },[])

    return{
        apiData
    }
}


export default useFetch