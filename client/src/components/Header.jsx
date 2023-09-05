import Container from "./reusablecomponent/Container";
import Logo from "./reusablecomponent/Logo";
import logoTwo from "../cat/CatWikiLogo2.svg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { allBreeds } from '../utility/allCat.js'

const Header = () => {

    return <header className='header '>
        <Container >
            <Logo />
            <form className="form">
                <picture>
                    <img src={logoTwo} />
                </picture>
                <p>Get to know more about your cat breed </p>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={allBreeds}
                    sx={{ width: 300, backgroundColor: 'white', borderRadius: '12px' }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </form>
        </Container>

    </header>;
};

export default Header;
