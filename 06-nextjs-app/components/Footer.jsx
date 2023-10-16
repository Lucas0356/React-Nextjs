import styles from '../styles/Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer} >
            <h4 className={styles.title}>
                <span className={styles.span}>Next.js</span>
                App
            </h4>
        </footer>
    )
}