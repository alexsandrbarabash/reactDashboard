import React from 'react';
import {Badge} from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "../../common/styles/style";
import AccountComponent from "../account-component";

const Header = () => {
    const {mainTitleStyle, headerWrapper, headerIcon, headerMenu} = useStyles()
    return (
        <div className={headerWrapper}>
            <div>
                <h1 className={mainTitleStyle}>Overview</h1>
            </div>
            <div className={headerMenu}>
                <div className={headerIcon}>
                    <SearchIcon/>
                </div>
                <div className={headerIcon}>
                    <Badge color="secondary" variant="dot">
                        <NotificationsNoneIcon/>
                    </Badge>
                </div>
                <AccountComponent/>
            </div>
        </div>
    );
};

export default Header;
