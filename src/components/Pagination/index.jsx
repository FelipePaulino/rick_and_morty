import styles from './index.module.scss'

export default function Pagination({ info, actionNext, actionPrev }) {
    return (
        <div className={styles.container}>
            {info?.prev &&
                <buttom className={styles.prev} onClick={actionPrev}><img src="arrow.svg" /></buttom>
            }
            {info?.next &&
                <buttom className={styles.next} onClick={actionNext} disabled={true}>
                    <img src="arrow.svg" />
                </buttom>
            }
        </div>
    )
}