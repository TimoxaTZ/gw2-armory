import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import styles from "../../components/content/content-filling/content-filling.module.css";


export const Characters = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.intro}>
                <Grid
                    direction="column"
                    item xs zeroMinWidth
                    justifyContent="center"
                    alignItems="center">
                    <div className={styles.textfield}>
                        THERE WILL PLACED CHARACTERS LIST
                    </div>
                </Grid>
            </div>
        </div>
    )
}




