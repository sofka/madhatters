import s from './style.module.css';
const SmallSpan = ({text}) => {
    return (
        <span className={s.text}>{text}</span>
    )
}
export default SmallSpan;