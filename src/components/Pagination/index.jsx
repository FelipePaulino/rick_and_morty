import styles from './index.module.scss'

export default function Pagination({ info, actionNext, actionPrev }) {
    return (
        <div data-testid='pagination' className={styles.container}>
            {info?.prev &&
                <button data-testid='prev' className={styles.prev} onClick={actionPrev}>
                    <img alt='arrow' src="arrow.svg" />
                </button>
            }
            {info?.next &&
                <button data-testid='next' className={styles.next} onClick={actionNext} >
                    <img alt='arrow' src="arrow.svg" />
                </button>
            }
        </div>
    )
}