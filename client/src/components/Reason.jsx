import ActionCard from "./reusablecomponent/ActionCard"
import Container from "./reusablecomponent/Container"
import firstImage from '../cat/image 1.png'
import secondImage from '../cat/image 2.png'
import thirdImage from '../cat/image 3.png'
import {Link} from 'react-router-dom'



const Reason = () => {
    const url = "https://www.catonsvillecatclinic.com/holmes-corner/the-psychological-benefits-of-owning-a-cat/"
    return (
        <div className='reason flex space-btw gap-2 pad-2 '>

            <article className="flex-col row-gap-2" style={{ width: '40%', display: 'flex' }}>
                <h2 style={{fontSize:'2.8rem'}}>Why should you have a cat?</h2>
                <p className='reasontext'>Having a cat around you actually
                    trigger the release of calming chemical in
                    your body which lowers your stress and anxiety
                </p>
                <p><Link to={url }>READ MORE </Link><span>&#8594;</span></p>
            </article>
            <article>
                <div className="flex cg-2">
                    <div className="flex flex-col space-btw two">
                        <ActionCard width='17rem' height='10rem' src={secondImage} />
                        <div style={{ paddingLeft: "5rem" }}>
                            <ActionCard width='12rem' height='18rem' src={ firstImage} />
                        </div>

                    </div>
                    <div>
                        <ActionCard width='14rem' height='24rem' src={ thirdImage} />
                    </div>

                </div>
            </article>

        </div>
    )
}

export default Reason
