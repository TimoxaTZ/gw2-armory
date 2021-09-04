import {Grid} from "@material-ui/core";
import React from "react";
import styles from './content-filling.module.css'

export const ContentFilling = () => {
    return (
        <div className={styles.intro}>
            <Grid
                direction="column"
                item xs zeroMinWidth
                justifyContent="center"
                alignItems="center">
                <div className={styles.textfield}>
                    You need to use your personal API-key, which
                    you can
                    get in your GW2 account. Next step you need to log in using this API-key. After that you can
                    use all
                    armory tools and check your characters, achievements, inventory, storage, builds and current
                    armor
                    which equipped on selected character.
                </div>
            </Grid>
        </div>
    )
}