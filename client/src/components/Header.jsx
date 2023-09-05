import Container from "./reusablecomponent/Container";
import Logo from "./reusablecomponent/Logo";
import logoTwo from "../cat/CatWikiLogo2.svg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { allBreeds } from '../utility/allCat.js'
import { useEffect } from "react";
import apiService from "../apiService";
import { useNavigate } from "react-router";

const Header = (props) => {
    const { selectedOption, setSelectedOption } = props
    const navigate = useNavigate()
    useEffect(() => {
        const searchword = selectedOption?.label
        const name = selectedOption?.label
        const data = { name, searchword }
        apiService.create("/cats", data)
            .then(res => res.data)
            .then(res => {
                navigate(`/${selectedOption?.id}`)
            })
            .catch(err => console.error(err))
    }, [selectedOption])

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
                    onChange={(event, newValue) => {
                        setSelectedOption(newValue);
                        console.log(newValue)
                    }}
                    value={selectedOption}
                />
            </form>
        </Container>

    </header>;
};

export default Header;
