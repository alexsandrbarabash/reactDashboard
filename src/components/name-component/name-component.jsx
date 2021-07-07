import React from 'react';
import useStyles from "../../common/styles/style";

const NameComponent = ({name, subname, src}) => {
    const {priceStyle, subnameStyle, nameWrapper, nameImg, nameContent} = useStyles()
    return (
        <div className={nameWrapper}>
            <div className={nameImg}>
                <img src={src} alt="" width={30}/>
            </div>
            <div className={nameContent}>
                <div className={priceStyle}>{name}</div>
                <div className={subnameStyle}>{subname.toUpperCase()}</div>
            </div>
        </div>
    );
};

export default NameComponent;
