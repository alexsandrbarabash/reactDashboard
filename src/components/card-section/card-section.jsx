import React from 'react';
import {Grid} from '@material-ui/core';
import CustomCard from "../custom-card";
import useStyles from '../../common/styles/style';
import CardFooter from "../card-footer";
import mainCard from '../../assets/img/main-card.svg';
import cardFirst from '../../assets/img/card-1.svg';
import cardSecond from '../../assets/img/card-2.svg';
import cardThird from '../../assets/img/card-3.svg';

const CardSection = () => {
    const {titleStyle, mainPhoto} = useStyles();
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={4} className={titleStyle}>Portfolio</Grid>
                <Grid item xs={8} className={titleStyle}>Your Assets</Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <CustomCard
                        backgroundColor={'#E5F2FE'}
                        title={'$ 17 643.41'}
                        subTitle={'Portfolio balance'}
                        FooterComponent={() => <img className={mainPhoto} src={mainCard}/>}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <CustomCard
                                backgroundColor={'#E5DEF0'}
                                title={'1.25 BTC'}
                                subTitle={'$ 2948.04'}
                                FooterComponent={() => <CardFooter img={cardFirst} text={0.14}/>}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomCard
                                backgroundColor={'#D6EDDA'}
                                title={'0.32 LTC'}
                                subTitle={'$ 2948.04'}
                                FooterComponent={() => <CardFooter img={cardSecond} text={0.31}/>}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomCard
                                backgroundColor={'#F6F0D8'}
                                title={'1.25 ETH'}
                                subTitle={'$ 2948.04'}
                                FooterComponent={() => <CardFooter img={cardThird} text={0.27}/>}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default CardSection;
