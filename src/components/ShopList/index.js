import ShopListItem from '../ShopListItem';
import items from './items';
import s from './style.module.css';
const ShopList = () => {
    return (
        <div className={s.shopList}>
            {
                items.map(({ id, imagePath, header, text }) =>
                    <ShopListItem
                        id={id}
                        imagePath={imagePath}
                        header={header}
                        text={text}
                    />
                )
            }
        </div>
    )
}

export default ShopList;