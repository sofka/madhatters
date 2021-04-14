import items from './items';
import style from './style.module.css';
const List = () => {
    return (
        <ul className={style.list}>
            {
                items.map(({ key, text, subItems }) =>
                    <li key={key}>
                        {text}
                        <ul className={style.subList}>
                            {
                                subItems.map(({ key, text }) =>
                                    <li key={key}>
                                        {text}
                                    </li>
                                )
                            }

                        </ul>
                    </li>
                )
            }

        </ul>
    )
}

export default List;