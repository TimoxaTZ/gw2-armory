import React from 'react';
import styles from './content.module.css'

export const Content = () => {

    return (
        <div className={styles.intro}>
            <div className={styles.inner}>
                <div>
                    <h1 className={styles.title}>About GW2 Armory</h1>
                </div>
                <div>
                    <a className={styles.button} href='#'>Learn more</a>
                </div>
            </div>
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
            {/*<p className={styles.slider}>You need to use your personal API-key, which*/}
            {/*    you can*/}
            {/*    get in your GW2 account. Next step you need to log in using this API-key. After that you can*/}
            {/*    use all*/}
            {/*    armory tools and check your characters, achievements, inventory, storage, builds and current*/}
            {/*    armor*/}
            {/*    which equipped on selected character.*/}
            {/*</p>*/}

        </div>

    )
}
