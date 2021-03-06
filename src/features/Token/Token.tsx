import React, {useEffect} from 'react';
import {Button, FormControl, FormLabel, Grid, TextField} from "@material-ui/core";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {getCharactersTC} from "../Characters/characters-reducer";
import {setTokenTC} from "./token-reducer";
import {useAppSelector} from "../../app/useAppSelector";


export const Token = () => {

    const dispatch = useDispatch()
    // const token = localStorage.getItem("token")


    const formik = useFormik({
        validate: (values) => {
            if (!values.apiKey) {
                return {
                    apiKey: 'API-key is required'
                }
            }
        },

        initialValues: {
            apiKey: ''
        },
        onSubmit: (values) => {
            // для бланка затереть эту строку
            dispatch(setTokenTC(values.apiKey))
        },
    });

    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const token = useAppSelector(state => state.token.account.token)

    if (token) {
        return <Redirect to={'/'}/>
    }

    return <div style={{padding: 100}}>
        <Grid container
              justify="center">
            <div style={{backgroundColor: "rgba(234,234,234,0.15)"}}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <h3 style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>Instructions</h3>
                            <p>
                                1. To get your personal API-key you need to <a
                                href={'https://account.arena.net/applications'}
                                target={'_blank'}>Open the official Guild Wars 2 API Key Management</a> then click
                                "Applications".
                            </p>
                            <p>
                                2. Click on the "New Key" button.
                            </p>
                            <p>
                                3. Enter a name of your choice and check all permission checkboxes.
                            </p>
                            <p>
                                4. Copy your new API key. (CTRL + C)
                            </p>
                            <p>
                                5. Paste it in the form below. (CTRL + V)
                            </p>
                            <p>
                                6. Click the "Save new API key" button.
                            </p>
                            <p>
                                7. You are set, have fun exploring your account!
                            </p>
                        </FormLabel>

                        <TextField
                            label="Personal API-key:"
                            margin="normal"
                            // передаем в пропсы полученный текст, для бланка затереть эту строку
                            {...formik.getFieldProps("apiKey")}
                        />
                        {formik.errors.apiKey ? <div>{formik.errors.apiKey}</div> : null}

                        <Button type={"submit"} variant={'contained'} color={'secondary'}>Save your API-key</Button>
                    </FormControl>
                </form>
            </div>
        </Grid>
    </div>

}

// onClick={() => setToken(formik.values.apiKey)}
