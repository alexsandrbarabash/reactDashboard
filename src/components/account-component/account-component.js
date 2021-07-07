import React from 'react';
import accountImg from '../../assets/img/account.svg';
import useStyles from '../../common/styles/style';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const AccountComponent = () => {
    const {accountWrapper, accountContentWrapper, accountImgStyle} = useStyles()
    return (
        <div className={accountWrapper}>
            <img src={accountImg} className={accountImgStyle}/>
            <div className={accountContentWrapper}>
                <span>Zoia M.</span>
            <KeyboardArrowDownIcon/>
            </div>
        </div>
    );
};

export default AccountComponent;
