import Container from "./reusablecomponent/Container"
import logoTwo from "../cat/CatWikiLogo2.svg";

const Footer = () => {
    return (
        <div className='footer' style={{backgroundColor:'black' , color:'white'}}>
            <Container>

            <div className="flex align-center space-btw">
                <div>
                    <img src={logoTwo} alt="" />
                </div>
                <p>created by username - devChallenges.io 2021</p>

                </div>
            </Container>
        </div>
    )
}

export default Footer
