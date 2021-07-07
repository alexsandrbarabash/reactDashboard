import React from 'react';
import free from '../../assets/img/Group 29.svg'
import useStyles from "../../common/styles/style";

const AdvertisingTitle = () => {
    const {advertisingTitleStyle} = useStyles();
    return (
        <div className={advertisingTitleStyle}>
            Earn <img src={free} width={70}/>  crypto with Coinview Earn!
        </div>
    );
};

export default AdvertisingTitle;
