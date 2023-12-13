import {FC, JSX} from "react";
import styles from "./style/style.module.css";

interface IItemList {
    title: string,
    subText: string,
    imgSrc: string
    key: string
}

const ItemList: FC<IItemList> = ({key, title, subText, imgSrc}): JSX.Element => {
    return (
        <section key={key} className={styles.itemList}>
            {imgSrc && (
                <img src={imgSrc} alt="item-list-img" className={styles.img}/>
            )}
            {title && (
                <>
                    <h6 className={styles.title}>{title}</h6>
                    <p className={styles.subText}>
                        {subText}
                    </p>
                </>
            )}
        </section>
    )
}

export default ItemList