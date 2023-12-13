import React, {FC, JSX} from 'react';
import styles from './styles/styles.module.css';

const Navbar: FC = (): JSX.Element => {
    return (
        <header className={styles.navbar}>
            <div className={styles.companyName}>Название фирмы</div>
            <div className={styles.menuItems}>
                <div className={styles.menuItem}>Услуги</div>
                <div className={styles.menuItem}>Контакты</div>
            </div>
            <div className={styles.phoneNumber}>+7 (123) 456-7890</div>
        </header>
    );
}

export default Navbar