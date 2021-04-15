
import s from './style.module.css';

const NewsLetter = () => {
    return (
        <div className={s.newsletter}>
            <span className={s.smalltext}>Keep up-to-date on us</span>
            <br />
            <span className={s.bigtext}>Newsletter</span>
            <form>
                <input className={s.newsletter__input} placeholder="Enter your email" />
                <button className={s.newsletter__submit} type="submit">Submit</button>
            </form>
        </div>
    )
}
export default NewsLetter;