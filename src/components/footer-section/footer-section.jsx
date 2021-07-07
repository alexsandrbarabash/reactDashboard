import React from 'react';
import {Grid} from "@material-ui/core";
import CustomTable from "../custom-table";
import useStyles from "../../common/styles/style";

const FooterSection = () => {
    const {titleStyle} = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <div className={titleStyle}>Market is down 0.80%</div>
            </Grid>
            <Grid item xs={7}>
                <CustomTable/>
            </Grid>
        </Grid>
    );
};

export default FooterSection;
