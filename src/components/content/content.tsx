import React from 'react';
import { Button } from './buttons/button';
import {ContentTitle} from "./content-title/content-title";
import { ContentFilling } from './content-filling/content-filling';
import styles from './content.module.css'
// import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";

export const Content = () => {

    return (
        <div className={styles.style}>
            <ContentTitle/>
            <Button/>
            {/*<Button variant="outlined">Default</Button>*/}
            <ContentFilling/>
        </div>
    )
}

