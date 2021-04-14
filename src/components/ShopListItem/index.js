import s from './style.module.css';
const ShopListItem = ({ id, imagePath, header, text }) => {
    return (
        <div key={id} className={s.shopListItem}>
            <img src={imagePath} alt={header} />
            <div className={s.shopListItem__textBlock}>
                <span className={s.shopListItem__header}>{header}</span>
                <br/>
                <span className={s.shopListItem__text}>{text}</span>
            </div>
        </div>
    )
}
export default ShopListItem;