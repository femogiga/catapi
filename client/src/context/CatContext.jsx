import { createContext, useState, useEffect } from "react"
import apiService from "../apiService"


export const CatContext = createContext('CatContext')
const CatProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [count, setCount] = useState([])

    useEffect(() => {
        apiService.get(`/cats`)
            .then(res => res.data)
            .then(res => setData(res))
            .catch(error => console.error(error))

        apiService.get(`/cats/count`)
            .then(res => res.data)
            .then(res => setCount(res))
            .catch(error => console.error(error))
    }, [])
    console.log(count)
    return (
        <CatContext.Provider value={{ data, setData, count }}>
            {children}
        </CatContext.Provider>
    )
}


export default CatProvider
