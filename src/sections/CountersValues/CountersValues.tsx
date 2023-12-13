import {FC, JSX} from "react";
import styles from "./styles/styles.module.css";

interface ICountersValues {
    count1: string,
    count2: string,
    count3: string
}

const CountersValues: FC<ICountersValues> = ({count1, count2, count3}): JSX.Element => {
    return (
        <section className={styles.countersValues}>
            <div className={styles.counters}>
                <div className={styles.countWrapper}>
                    <h5 className={styles.count}>{count1}</h5>
                    <p className={styles.countText}>лет успешной юридической практики</p>
                </div>
                <div className={styles.countWrapper}>
                    <h5 className={styles.count}>{count2}</h5>
                    <p className={styles.countText}>среднее количество консультаций в месяц</p>
                </div>
                <div className={styles.countWrapper}>
                    <h5 className={styles.count}>{count3}</h5>
                    <p className={styles.countText}>успешных дел, проведенных специалистами нашей фирмы</p>
                </div>
            </div>
        </section>
    )
}

export default CountersValues