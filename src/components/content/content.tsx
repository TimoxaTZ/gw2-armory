import React from 'react';
import styles from './content.module.css'

export const Content = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.inner}>
                <h1 className={styles.title}>About GW2 Armory</h1>
            </div>

            <p>You need to use your personal API-key, which
                you can
                get in your GW2 account. Next step you need to log in using this API-key. After that you can
                use all
                armory tools and check your characters, achievements, inventory, storage, builds and current
                armor
                which equipped on selected character.
            </p>
        </div>
    )
}
