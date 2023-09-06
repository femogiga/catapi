import ActionCard from "./reusablecomponent/ActionCard"
import Container from "./reusablecomponent/Container"
import firstImage from '../cat/image 1.png'
import secondImage from '../cat/image 2.png'
import thirdImage from '../cat/image 1.png'

const Reason = () => {
    return (
        <div className='reason flex space-btw gap-2 pad-2 '>

            <article className="flex-col row-gap-2" style={{ width: '30%', display: 'flex' }}>
                <h2>Why should have a cat?</h2>
                <p>Having a cat around you actually
                    trigger the release of calming chemical in
                    your body which lowers your stress and anxiety
                </p>
                <p>READ MORE <span>&#8594;</span></p>
            </article>
            <article>
                <div className="flex cg-2">
                    <div className="flex flex-col space-btw two">
                        <ActionCard width='17rem' height='10rem' src={ firstImage} />
                        <div style={{ paddingLeft: "5rem" }}>
                            <ActionCard width='12rem' height='18rem' src={secondImage } />
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
