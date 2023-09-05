import { createContext, useState, useEffect } from "react"
import apiService from "../apiService"


export const CatContext = createContext('CatContext')
const CatProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiService.get(`/cats`)
            .then(res => res.data)
            .then(res => setData(res))
            .catch(error => console.error(error))
    }, [])
    return (
        <CatContext.Provider value={{ data, setData }}>
            {children}
        </CatContext.Provider>
    )
}


export default CatProvider
