import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./auth-reducer";
import {AppRootStateType} from "../../app/store";
import {Redirect} from 'react-router-dom';


export const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }
            if (!values.apiKey) {
                return {
                    apiKey: 'API-key is required'
                }
            }

        },

        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            apiKey: ''
        },
        onSubmit: (values) => {
            // для бланка затереть эту строку
            dispatch(loginTC(values))
        },
    });

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return <Redirect to={"/characters"}/>
    }

    return <Grid container justify="center">
        <Grid item xs={4}>
            <div style={{backgroundColor: "rgba(234,234,234,0.15)"}}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <FormLabel>
                                <h3>Instructions</h3>
                                <p>
                                    1. To get your personal API-key you need to <a href={'https://account.arena.net/applications'}
                                                                                   target={'_blank'}>Open the official Guild Wars 2 API Key Management</a> then click "Applications".
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
                            {/*<TextField*/}
                            {/*    label="Email"*/}
                            {/*    margin="normal"*/}
                            {/*    // передаем в пропсы полученный текст, для бланка затереть эту строку*/}
                            {/*    {...formik.getFieldProps("email")}*/}
                            {/*/>*/}
                            {/*{formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}
                            {/*<TextField*/}
                            {/*    type="password"*/}
                            {/*    label="Password"*/}
                            {/*    margin="normal"*/}
                            {/*    // передаем в пропсы полученный текст, для бланка затереть эту строку*/}
                            {/*    {...formik.getFieldProps("password")}*/}
                            {/*/>*/}
                            {/*{formik.errors.password ? <div>{formik.errors.password}</div> : null}*/}

                            <TextField
                                label="Personal API-key:"
                                margin="normal"
                                // передаем в пропсы полученный текст, для бланка затереть эту строку
                                {...formik.getFieldProps("apiKey")}
                            />
                            {formik.errors.apiKey ? <div>{formik.errors.apiKey}</div> : null}

                            {/*<FormControlLabel*/}
                            {/*    label={'Remember me'}*/}
                            {/*    control={<Checkbox*/}
                            {/*        // передаем в пропсы полученный текст, для бланка затереть эти строки*/}
                            {/*        {...formik.getFieldProps("rememberMe")}*/}
                            {/*        checked={formik.values.rememberMe}*/}
                            {/*    />}*/}
                            {/*/>*/}
                            <Button type={"submit"} variant={'contained'} color={'secondary'}>Save your API-key</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </div>
        </Grid>
    </Grid>
}