import Container from "./reusablecomponent/Container";
import Logo from "./reusablecomponent/Logo";
import logoTwo from "../cat/CatWikiLogo2.svg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { allBreeds } from '../utility/allCat.js'
import { useEffect, useRef, useState } from "react";
import apiService from "../apiService";
import { useNavigate } from "react-router";

const Header = (props) => {
    const { selectedOption, setSelectedOption } = props
    const [focusState, setFocusState] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const modalRef = useRef(null)
    const buttonRef = useRef(null)
    const handleFocus = () => {

        // const modal = document.querySelector('.modal')
        modalRef.current.classList.add('focussed')
        buttonRef.current.classList.remove('none')
        buttonRef.current.classList.add('reveal')
        const divi = document.querySelector('.none')
        divi.classList.remove('none')
        setFocusState(true)
        console.log(modalRef)
    }

    const handleBlur = () => {
        modalRef.current.classList.remove('focussed')
        buttonRef.current.classList.remove('reveal')
        const divi = document.querySelector('.none')
        // divi.classList.remove('none')
        setFocusState(false)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        if (windowWidth < 600) {
            setFocusState(true)
        }
        else {
            setFocusState(false)
        }

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        // const searchword = selectedOption?.label
        // const name = selectedOption?.label
        // const data = { name, searchword }
        // apiService.create("/cats", data)
        //     .then(res => res.data)
        //     .then(res => {
        //         navigate(`/${selectedOption?.id}`)
        //     })
        //     .catch(err => console.error(err))
    }, [selectedOption])
    const handleSubmit = (e) => {
        e.preventDefault()

        const searchword = selectedOption?.label
        const name = selectedOption?.label
        const data = { name, searchword }
        if (name == "" || searchword == "") {
            return;
        }
        apiService.create("/cats", data)
            .then(res => res.data)
            .then(res => {
                navigate(`/${selectedOption?.id}`)
            })
            .catch(err => console.error(err))
        modalRef.current.classList.remove("reveal")
        
    }
    return <header className='header '>
        <Container >
            <Logo />
            <form className="form" onSubmit={handleSubmit}>
                <picture>
                    <img src={logoTwo} />
                </picture>
                <p>Get to know more about your cat breed </p>
                <div className='' ref={modalRef}>
                    {focusState && <div className="none"><button ref={buttonRef} style={{ padding: '.5rem 1rem' }}>X</button></div>}
                    <Autocomplete
                        ref={inputRef}
                        disablePortal
                        id="combo-box-demo"
                        options={allBreeds}
                        sx={{ width: 300, backgroundColor: 'white', borderRadius: '30px' }}
                        renderInput={(params) => <TextField {...params} />}
                        onChange={(event, newValue) => {
                            setSelectedOption(newValue);

                        }}
                        value={selectedOption}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
        </Container>

    </header>;
};

export default Header;
