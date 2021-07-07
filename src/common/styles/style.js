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
        display: 'flex',
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
        background: '#222222',
        borderRadius: '15px',
        width: '56px',
        height: '56px',
        display: 'flex',
        justifyContent: 'center'

    },
    nameContent: {
        marginLeft: '15px'
    },
    mainTitleStyle: {
        fontSize: '35px',
        lineHeight: '52px',
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    headerMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIcon: {
        background: ' #F2F5FA',
        borderRadius: '50px',
        marginRight: '17px',
        display: 'flex',
        height: '48px',
        width: '48px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountWrapper: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountContentWrapper: {
        background: '#F2F5FA',
        borderRadius: '27px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        paddingLeft: '80px'
    },
    accountImgStyle: {
        position: 'absolute',
        left: 8,
        bottom: 5
    },
    advertisingBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#222222',
        height: '360px',
        borderRadius: '30px',
        padding: '30px',
        position: 'relative'
    },
    advertisingTitleStyle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '45px',
        letterSpacing: '0.02em',
        color: '#fff'
    },
    advertisingTextStyle: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.02em',
        color: '#fff'
    },
    buttonWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: '45px'
    },
    buttonStyle: {
        color: '#000000',
        background: '#BCDFFF',
        borderRadius: '23px',
        fontWeight: 600,
        fontSize: '16px',
        paddingRight: '40px',
        paddingLeft: '40px'
    },
    advertisingImg: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    subBlockFirst: {
        width: '90%',
        height: '48px',
        background: '#DFDFE3',
        borderRadius: '24px',
        position: 'absolute',
        bottom: '-16px',
        zIndex: -1
    },
    subBlockSecond: {
        width: '80%',
        height: '48px',
        background: '#F0F0F1',
        borderRadius: '24px',
        position: 'absolute',
        bottom: '-28px',
        zIndex: -2
    }
});

export default useStyles;
