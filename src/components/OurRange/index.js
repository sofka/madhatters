import ShopList from '../ShopList';
import s from './style.module.css';

const OurRange = () => {
    return (
        <div className={s.ourRange}>
            <span className={s.ourRange__smallText}>Hat’s that bring the fire</span>
            <br/>
            <span className={s.ourRange__bigText}>Our Range</span>
            <ShopList/>
        </div>
    )
}

export default OurRange;