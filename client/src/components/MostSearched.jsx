import ActionCard from "./reusablecomponent/ActionCard"
import Container from "./reusablecomponent/Container"

const MostSearched = () => {
    return (
        <div className="mostsearched  cont-radius">
            <Container>
                <article className="flex flex-col row-gap-2 col-gap2">
                    <p>Most Searched Breeds</p>
                    <div className="flex space-btw gap-2 pad-row-2">
                        <h2 style={{ width: '40%' }}>66+ Breeds For you to discover</h2>
                        <p style={{ width: '40%', textAlign: 'end', paddingInlineEnd: '2rem' }}>SEE MORE</p>
                    </div>
                    <div className='flex space-btw cg-2' style={{maxWidth:'100%'}}>
                        <ActionCard withText={true} height={'12.5rem'} width={'12rem'} />
                        <ActionCard withText={true} height={'12.5rem'} width={'12.5rem'} />
                        <ActionCard withText={true} height={'12.5rem'} width={'12.5rem'} />
                        <ActionCard withText={true} height={'12.5rem'} width={'12.5rem'} />
                    </div>

                </article>
            </Container>
        </div>
    )
}


export default MostSearched
