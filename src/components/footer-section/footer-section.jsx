import React from 'react';
import {Grid} from "@material-ui/core";
import CustomTable from "../custom-table";
import useStyles from "../../common/styles/style";
import AdvertisingComponents from "../advertising-components";

const FooterSection = () => {
    const {titleStyle} = useStyles();
    return (
        <Grid container spacing={5}>
            <Grid item xs={7}>
                <div className={titleStyle}>Market is down 0.80%</div>
                <CustomTable/>
            </Grid>
            <Grid item xs={5}>
                <AdvertisingComponents />
            </Grid>
        </Grid>
    );
};

export default FooterSection;
