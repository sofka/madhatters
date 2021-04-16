import MadHatters from '../../images/MAD_HATTERS_FOOTER.png';
import items from '../NavBar/items';
import s from './style.module.css';
const Footer = () => {
    return (
        <div className={s.footer}>
            <ul className={s.footer__list}>
                <li>
                    <img src={MadHatters} alt="MadHatters" />
                    <ul className={s.footer__list_child}>
                        <li className={s.footer__item}>Be better, be cooler, be a Mad Hatter and sustainably matter.</li>
                    </ul>
                </li>
                <li>
                    Shop here
                     <ul className={s.footer__list_child}>
                        {
                            items.map(({ index, text, src }) =>
                                <li key={index}>{text}</li>)
                        }
                    </ul>
                </li>
                <li>
                    The legals
                    <ul className={s.footer__list_child}>
                        <li>Copyright</li>
                        <li>Privacy</li>
                        <li>Contact</li>
                        <li>Terms</li>
                    </ul>
                </li>
            </ul>
            <span className={s.footer__copyright}>Copyright 2012 Mad Hatters, Inc. Terms & Privacy</span>
        </div>
    )
}

export default Footer;