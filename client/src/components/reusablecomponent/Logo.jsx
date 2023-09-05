
import { Link } from 'react-router-dom';
import catLogo from '../../cat/CatWikiLogo.svg';

const Logo = () => {
    return (
        <Link to = "/">
        <div className='logo flow-1' >
            <img src={catLogo} alt='logo' />
        </div>
        </Link>
    );
};

export default Logo;
