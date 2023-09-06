import { useContext } from "react"
import ActionCardWithInfo from "./reusablecomponent/ActionCardWithInfo"
import Logo from "./reusablecomponent/Logo"
import { CatContext } from "../context/CatContext"

const TopTen = () => {

    const { data, count } = useContext(CatContext)
    const topTen = data.filter(item => count.find(cat => cat.searchword === item.name))

    console.log('Top ten', topTen)
    return (
        <div>
            <div> <Logo /></div>
            <h1 className="flow-2">Top 10 most searched breed</h1>
            {
                topTen.map((cat, index) => <ActionCardWithInfo key={cat?.id} {...cat} index={index + 1} />)
            }
        </div>
    )
}


export default TopTen
