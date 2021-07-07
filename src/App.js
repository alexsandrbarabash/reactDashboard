import React from "react";
import {Grid} from '@material-ui/core';
import Header from "./components/header";
import CardSection from "./components/card-section";
import FooterSection from "./components/footer-section";
import useStyles from "./common/styles/style";

function App() {
    const {root} = useStyles();

    return (
        <div className={root}>
            <Grid container justifyContent={'center'}  spacing={5}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12}>
                    <CardSection/>
                </Grid>
                <Grid item xs={12}>
                    <FooterSection/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
