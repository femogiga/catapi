import { useContext } from "react"
import ActionCard from "./reusablecomponent/ActionCard"
import Container from "./reusablecomponent/Container"
import { CatContext } from "../context/CatContext"
import { Link } from "react-router-dom"


const MostSearched = () => {
    const { data, setData, count } = useContext(CatContext)
    let cut
    if (count.length > 0){
         cut = count.slice(0, 4)
    }

    const mapped = data.filter(item => {
        return  cut.find(cat => {
            return cat?.searchword === item?.name
        })
    })

    console.log('mapped', mapped)
    return (
        <div className="mostsearched  cont-radius flow-3 ">
            <Container>
                <article className="flex flex-col row-gap-2 col-gap-2">
                    <p><span className = "underline">Most</span> Searched Breeds</p>
                    <div className="flex space-btw gap-2 pad-row-2 flex-wrap">
                        <h2 style={{ fontSize: '2.8rem' }}>66+ Breeds For you to discover</h2>
                        <p className="seemore" style={{ paddingInlineEnd: '0rem', alignSelf: 'flex-end' }}><Link to={'/mostsearched'}>SEE MORE <span>&#8594;</span></Link></p>
                    </div>
                    <div className=' flex space-btw cg-2 flex-wrap pad-1-media' style={{ maxWidth: '100%' }}>
                        {
                            mapped.map(cat => (<Link to={cat.id} key={cat.id}><ActionCard key={cat.id} withText={true} height={'10rem'} width={'10rem'} src={cat?.image?.url} breed={cat?.name} /></Link>))}

                    </div>

                </article>
            </Container>
        </div>
    )
}


export default MostSearched
