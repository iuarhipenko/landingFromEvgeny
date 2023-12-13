import {FC, JSX} from "react";
import styles from "./styles/styles.module.css";
import ItemList from "./components/ItemList/ItemList";
import isArrayWithLength from "../../helpers/helpers";

const OurAdvantages: FC = (): JSX.Element => {
    const listData = [
        {
            title: 'Годы практики',
            subText: 'Все наши специалисты имеют опыт юридической практики не менее 5 лет.',
            imgSrc: '/',
            key: '1'
        },
        {
            title: 'Конфиденциальность',
            subText: 'В начале работы мы заключаем договор о неразглашении. Ваша частная информация не покинет пределов нашего офиса.',
            imgSrc: '/',
            key: '2'
        },
        {
            title: 'Персональный подход',
            subText: 'Индивидуальная работа с каждым клиентом позволяет решать даже самые сложные проблемы.',
            imgSrc: '/',
            key: '3'
        },
        {
            title: 'Годы практики',
            subText: 'Все наши специалисты имеют опыт юридической практики не менее 5 лет.',
            imgSrc: '/',
            key: '1'
        },
        {
            title: 'Конфиденциальность',
            subText: 'В начале работы мы заключаем договор о неразглашении. Ваша частная информация не покинет пределов нашего офиса.',
            imgSrc: '/',
            key: '2'
        },
        {
            title: 'Персональный подход',
            subText: 'Индивидуальная работа с каждым клиентом позволяет решать даже самые сложные проблемы.',
            imgSrc: '/',
            key: '3'
        }
    ]
    return (
        <section className={styles.ourAdvantages}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Наши преимущества</h3>
                <p className={styles.titleSubText}>
                    Клиенты доверяют нам в самых сложных вопросах, потому что знают, что мы поможем им снизить риски для
                    бизнеса.
                </p>
            </div>
            {isArrayWithLength(listData) && (
                <ul className={styles.listWrapper}>
                    {listData.map(({title, subText, imgSrc, key}) => {
                        return (
                            <ItemList key={key} imgSrc={imgSrc} subText={subText} title={title}/>
                        )
                    })}
                </ul>
            )}
        </section>
    )
}

export default OurAdvantages