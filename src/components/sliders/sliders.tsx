import styles from './sliders.module.css'

export const Sliders = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.slider} >
                <div className={styles.slider__item__active}>
                    <span className={styles.slider__num}>01 </span>
                    intro
                </div>
                <div className={styles.slider__item}>
                    <span className={styles.slider__num}>02 </span>
                    Work
                </div>

                <div className={styles.slider__item}>
                    <span className={styles.slider__num}>03 </span>
                    About
                </div>

                <div className={styles.slider__item}>
                    <span className={styles.slider__num}>04 </span>
                    Contacts
                </div>

            </div>
        </div>
    )
}