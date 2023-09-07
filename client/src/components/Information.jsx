import { useContext, useEffect, useState } from "react"
import ActionCard from "./reusablecomponent/ActionCard"
import Logo from "./reusablecomponent/Logo"
import Stats from "./reusablecomponent/Stats"
import { CatContext } from "../context/CatContext"
import { useParams } from "react-router"
import apiService from "../apiService"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const Information = () => {
    const [photos, setPhotos] = useState([])
    const params = useParams()
    const { data, setData } = useContext(CatContext)
    const displayedCat = data.filter(item => item.id === params.id)

    console.log('toDisplayed', displayedCat)
    useEffect(() => {
        apiService.get(`/cats/photos/${params.id}`)
            .then(res => res.data)
            .then(res => setPhotos(res))
            .catch(err => console.error(err))
    }, [params])
    console.log('photos', photos)//
    return (
        <section className="information">
            <Logo />
            <div className="flex cg-3 flex-wrap">
                <div className="avatar">
                    <ActionCard width={'21rem'} height={'21rem'} src={displayedCat[0]?.image?.url} />
                </div>
                <div className="statbar flex flex-col row-gap-2 flow-2" >
                    <h2 style={{ width: '40%' }}>{displayedCat[0]?.name}</h2>
                    <p>{displayedCat[0]?.description}</p>

                    <p><span className="bold">Temperament:</span> {displayedCat[0]?.temperament}</p>
                    <p><span className="bold">Origin: </span>{displayedCat[0]?.origin}</p>
                    <p><span className="bold">Life Span: </span>{displayedCat[0]?.life_span} </p>
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
            <div className="flow-3">
                <p className='flow-2'>Other photos</p>
                <div className="photos-cont flex flex-wrap  space-btw gap-2">

                    {photos.map((photo, index) => (<Link to={photo.url} key={index} style={{ display: 'content' }}><ActionCard width={'17rem'} height={'17rem'} key={photo.id} src={photo.url} /></Link>))}
                </div>
            </div>
            <Footer />
        </section>
    )
}


export default Information
