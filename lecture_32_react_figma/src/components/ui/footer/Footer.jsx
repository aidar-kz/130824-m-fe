import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <span>Мой первый сайт &copy;</span>
            <span>2025</span>
        </div>
    )
}

export default Footer