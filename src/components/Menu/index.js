import MAD_HATTERS from '../../images/MAD_HATTERS.svg';
import NavBar from '../NavBar';
import s from './style.module.css';
const Menu = () => {
    return (
        <div className={s.menu}>
            <img src={MAD_HATTERS} alt="logo" />
            <NavBar/>
        </div>
    );
}

export default Menu;