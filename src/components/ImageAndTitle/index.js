import ButtonLearnMore from '../ButtonLearnMore';
import SmallSpan from '../SmallSpan';
import Woomen2 from '../../images/Women2.png';
import s from './style.module.css';
const ImageAndTitle = () => {
    return (
        <div className={s.imageAndTitle}>
            <img className={s.imageAndTitle__woomen} src={Woomen2} alt="Woomen2" />
            <div className={s.imageAndTitle__textBlock}>
                <SmallSpan text="Become sexy" />
                <span className={s.imageAndTitle__text}>Mad love for f ire headwear</span>

                <ButtonLearnMore />
            </div>

        </div>
    )
}
export default ImageAndTitle;