import styles from './Header.module.scss'
import { Link } from 'react-router'

function Header() {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link}>Главная</Link>
            <Link to="/cart" className={styles.link}>Корзина</Link>
        </div>
    )
}

export default Header