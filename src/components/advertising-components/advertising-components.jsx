import React from 'react';
import useStyles from "../../common/styles/style";
import AdvertisingTitle from "../advertising-title";
import {Button} from "@material-ui/core";
import img from '../../assets/img/Group 28.svg'

const AdvertisingComponents = () => {
    const {
        advertisingBlock,
        advertisingTextStyle,
        buttonWrapper,
        buttonStyle,
        advertisingImg,
        subBlockFirst,
        subBlockSecond
    } = useStyles();
    return (
        <div className={advertisingBlock}>
            <AdvertisingTitle/>
            <span className={advertisingTextStyle}>
                Learn about different cryptocurrencies and
                earn them for free!
            </span>
            <div className={buttonWrapper}>
                <Button variant="contained" className={buttonStyle}>
                    Earn now
                </Button>
            </div>
            <img src={img} className={advertisingImg}/>
            <div className={subBlockFirst}></div>
            <div className={subBlockSecond}></div>
        </div>
    );
};

export default AdvertisingComponents;
