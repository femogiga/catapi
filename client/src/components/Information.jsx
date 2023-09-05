import { useContext, useEffect } from "react"
import ActionCard from "./reusablecomponent/ActionCard"
import Logo from "./reusablecomponent/Logo"
import Stats from "./reusablecomponent/Stats"
import { CatContext } from "../context/CatContext"
import { useParams } from "react-router"

const Information = () => {
    const params = useParams()
    const { data, setData } = useContext(CatContext)
    const displayedCat = data.filter(item => item.id === params.id)

    console.log('toDisplayed', displayedCat)
    useEffect(() => {

    }, [params])
    return (
        <section>
            <Logo />
            <div className="flex gap-2">
                <div>
                    <ActionCard src={displayedCat[0]?.image?.url} />
                </div>
                <div className="flex flex-col row-gap-1">
                    <h2 style={{ width: '40%' }}>{displayedCat[0]?.name}</h2>
                    <p>{displayedCat[0]?.description}</p>

                    <p><span className="bold">Temperature:</span></p>
                    <p><span className="bold">Origin:</span></p>
                    <p><span className="bold">Life Span:</span></p>
                    <Stats statTitle={'Adaptability'} stat={displayedCat[0]?.adaptability} />
                    <Stats statTitle={'Affection level'} stat={displayedCat[0]?.affection_level} />
                    <Stats statTitle={'Child Friendly'} stat={displayedCat[0]?.child_friendly} />
                    <Stats statTitle={'Grooming'} stat={displayedCat[0]?.grooming} />
                    <Stats statTitle={'Intelligence'} stat={displayedCat[0]?.intelligence} />
                    <Stats statTitle={'Health issues'} stat={displayedCat[0]?.health_issues} />
                    <Stats statTitle={'Social needs'} stat={displayedCat[0]?.social_needs} />
                    <Stats statTitle={'Stranger friendly'} stat={displayedCat[0]?.stranger_friendly} />
                </div>
            </div>
        </section>
    )
}


export default Information
