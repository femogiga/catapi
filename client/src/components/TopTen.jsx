import { useContext } from "react"
import ActionCardWithInfo from "./reusablecomponent/ActionCardWithInfo"
import Logo from "./reusablecomponent/Logo"
import { CatContext } from "../context/CatContext"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const TopTen = () => {

    const { data, count } = useContext(CatContext)
    const topTen = data.filter(item => count.find(cat => cat.searchword === item.name))

    console.log('Top ten', topTen)
    return (
        <div className='topten'>
            <div> <Logo /></div>
            <h1 className="flow-2">Top 10 most searched breed</h1>

            {
                topTen.map((cat, index) => (<Link to={cat.wikipedia_url} key={index}> <ActionCardWithInfo key={cat?.id} {...cat} index={index + 1} /></Link>))
            }

            <Footer />
        </div>
    )
}


export default TopTen
