import WomenPNG from '../../images/Women.png';
import MenPNG from '../../images/Men.png';
import EllipsSmall from '../../images/Ellipse_small.svg';
import EllipsBig from '../../images/Ellipse_big.svg';
import s from './style.module.css';
import ButtonLearnMore from '../ButtonLearnMore';
import SmallSpan from '../SmallSpan';
const HeroBar = () => {
    return (
        <div className={s.herobar}>
            <SmallSpan text="Introducing"/>
            <span className={s.herobar__madhatters}>Mad hatters,
            <br />
                <span className={s.herobar__bc}>b/c</span>
                style matters</span>
            <img className={s.herobar__ellipssmall} src={EllipsSmall} alt="ellips_small" />
            <img className={s.herobar__ellipsbig} src={EllipsBig} alt="ellips_big" />
            <img className={s.herobar__women} src={WomenPNG} alt="women" />
            <img className={s.herobar__men} src={MenPNG} alt="men" />
            <ButtonLearnMore/>


        </div>
    )
}
export default HeroBar;