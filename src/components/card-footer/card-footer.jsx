import React from 'react';
import useStyles from "../../common/styles/style";

const CardFooter = ({text, img}) => {
    const {photoWrapper, cartFooterText, footerWrapper} = useStyles();
    return (
        <div className={footerWrapper}>
            <img className={photoWrapper} src={img}/>
            <div className={cartFooterText}><span>+ {text}%</span></div>
        </div>
    );
};

export default CardFooter;
