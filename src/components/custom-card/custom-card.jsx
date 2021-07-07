import React from 'react';
import {Card, IconButton, Grid, CardContent} from '@material-ui/core';
import useStyles from "../../common/styles/style";
import MoreVert from '@material-ui/icons/MoreVert';

const CustomCard = ({title = '', subTitle = '', style = '', backgroundColor = '', FooterComponent}) => {
    const {cardWrapper, titleStyle, subTitleStyle, moreVert, marginTop} = useStyles();

    return (
        <Card variant="outlined" className={`${cardWrapper} ${style}`} style={{backgroundColor}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={11}>
                        <div className={titleStyle}>
                            {title}
                        </div>
                        <div className={subTitleStyle}>
                            {subTitle}
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <MoreVert className={moreVert} style={{fill: '#A09BA8'}} fontSize={'large'}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} mt={10} className={marginTop}>

                        <FooterComponent/>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
        ;
};

export default CustomCard;
