import {FC, JSX} from "react";
import styles from './styles/styles.module.css'

const AboutCompany: FC = (): JSX.Element => {
    return (
        <section className={styles.aboutCompany}>
            <h1 className={styles.title}>Юридическая компания</h1>
            <p className={styles.text}>LC department – юридическая компания, которая помогает своим клиентам добиваться
                целей
                в современном
                мире.</p>
            <button className={styles.button}>
                Получить бесплатную консультацию
            </button>
        </section>)

}

export default AboutCompany