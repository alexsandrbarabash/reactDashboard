import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        paddingLeft: '69px',
        paddingRight: '69px',
    },
    moreVert: {
        color: '#fff'
    },
    cardWrapper: {
        position: 'relative',
        border: "none",
        height: '244px',
        backgroundColor: '#fff',
        paddingTop: '30px',
        paddingRight: '28px',
        paddingLeft: '20px',
        paddingBottom: '26px',
        borderRadius: '24px',
    },
    titleStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        lineHeight: '42px',
        letterSpacing: '0.02em'
    },
    subTitleStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.02em'
    },
    mainPhoto: {
        position: 'absolute',
        left: -36,
        bottom: 27
    },
    footerWrapper: {
        display: "flex",
        position: 'absolute',
        bottom: '26px',
        alignItems: "center",
        width: '100%'
    },
    photoWrapper: {
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '15px',
        width: '56px',
        height: '56px',
        display: "flex",
        justifyContent: "center"
    },
    cartFooterText: {
        color: '#896AB9',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '22px',
        marginLeft: '32px',
    },
    priceStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.02em'
    },
    chaneeStyle: {
        color: '#4BA582',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '22px',

        letterSpacing: '0.02em',

    },
    subnameStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '19px',
        letterSpacing: '0.02em',
        color: '#8290A0',
        fontFamily: 'Poppins'
    },
    nameWrapper: {
        display: 'flex',
        alignItems: "center"
    },
    nameImg: {
        background:'#222222',
        padding:'13px',
        borderRadius: '15px',
        width: '56px',
        height: '56px',
        display: "flex",
        justifyContent: "center"

    },
    nameContent: {
        marginLeft: '15px'
    }

});

export default useStyles;
