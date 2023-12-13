import {FC, JSX} from "react";
import styles from "./styles/styles.module.css";


const AreaOfExpertise: FC = (): JSX.Element => {
    return (
        <section className={styles.areaOfExpertise}>
            <img src="/" alt="img" className={styles.img}/>
            <h2 className={styles.title}>Область экспертизы</h2>
            <p className={styles.text}>
                Мы — юридическая компания широкого профиля и готовы помочь вам по различным вопросам. Регистрируем,
                вносим изменения в реестр и ликвидируем компании,
                консультируем по вопросам недвижимости, имущества и наследства.
            </p>
        </section>
    )
}

export default AreaOfExpertise