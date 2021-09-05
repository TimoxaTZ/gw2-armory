import React from 'react';
import {Main} from "../components/Main";
import {Container} from "@material-ui/core";
import { Route } from 'react-router-dom';
import { Login } from '../features/Login/Login';
import Huynya from "../huynya";
import {ContentFilling} from "../components/content/content-filling/content-filling";


function App() {
    return (
        <Main/>
        // <Huynya>
        //     <ContentFilling/>
        // </Huynya>
    )
}

export default App;
