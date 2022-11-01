import styles from './index.module.scss'

export default function Header({ onChange }) {
    return (
        <header data-testid='header' className={styles.header}>
            <img alt='logo' src='rickandmorty.png' className={styles.imgLogo} />
            <input className={styles.input} onChange={onChange} placeholder='Busque pelo nome' />
        </header>
    )
}