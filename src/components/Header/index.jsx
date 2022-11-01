import styles from './index.module.scss'

export default function Header({ onChange }) {
    return (
        <header className={styles.header}>
            <img src='rickandmorty.png' className={styles.imgLogo} />
            <input className={styles.input} onChange={onChange} placeholder='Busque pelo nome'/>
        </header>
    )
}