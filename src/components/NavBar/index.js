import menuItems from './items';
import s from './style.module.css';

const NavBar = () => {
    return (
        <ul className={s.navbar}>
            {
                menuItems.map(({ index, text, src }) =>
                    <li key={index}><a href={src}>{text}</a></li>
                )
            }
        </ul>
    )
}
export default NavBar;