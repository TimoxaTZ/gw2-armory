import React from 'react';
import {Button, ButtonPropsType} from './buttons/button';
import {ContentTitle} from "./content-title/content-title";
import {ContentFilling} from './content-filling/content-filling';
import styles from './content.module.css'
// import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";


export const Content = () => {

    const token = localStorage.getItem('token')

    return (
        <Container className={styles.style}>
            <div>
                <ContentTitle/>
                <ContentFilling/>

                <div className={styles.buttons}>
                    <Button buttonUrl={'/characters'} buttonName='Characters' buttonStyle={2}/>
                    {token == null ?
                        <Button buttonUrl={'/auth'} buttonName='Login' buttonStyle={1}/>
                            : <div/>
                        // <Button resetStorage={true} buttonUrl={'/auth'} buttonName='Change API-key' buttonStyle={1}/>
                        }
                    {/*<Button buttonUrl={'/login'} buttonName='Change API token'buttonStyle={1}/>*/}
                </div>
            </div>
        </Container>
    )
}

