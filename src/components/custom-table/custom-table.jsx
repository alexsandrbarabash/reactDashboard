import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import useStyles from "../../common/styles/style";
import {IconButton} from "@material-ui/core";
import NameComponent from "../name-component";
import imgNameFirst from '../../assets/img/name-1.svg';
import imgNameSecond from '../../assets/img/name-2.svg';
import imgNameThird from '../../assets/img/name-3.svg';
import imgNameFourth from '../../assets/img/name-4.svg';

const StyledTableCell = withStyles(() => ({
    head: {
        border: 'none',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '19px',
        letterSpacing: '0.02em',
        color: '#8290A0',
        fontFamily: 'Poppins',
    },
    body: {
        fontSize: 14,
        border: 'none',
        backgroundColor: 'white'
    },
}))(TableCell);

function createData(name, price, chanee, marketCap) {
    return {name, price, chanee, marketCap};
}

const rows = [
    createData({
        name: 'Band Protocol',
        subname: 'band',
        src: imgNameFirst
    }, 2.42, 13.38, '399.8M'),
    createData({name: 'VeChain', subname: 'vet', src: imgNameSecond}, 7.48, 11.19, '152.5M'),
    createData({name: 'Aave', subname: 'AAVE', src:imgNameThird}, 0.0184, 7.57, '1.2B'),
    createData({name: 'Waves', subname: 'WAVES', src: imgNameFourth}, 30.68, 6.80, '399.8M'),
];

const CustomTable = () => {

    const {priceStyle, chaneeStyle} = useStyles()

    return (
        <Table padding={'10px'}>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Chanee</StyledTableCell>
                    <StyledTableCell align="right">Market Cap</StyledTableCell>
                    <StyledTableCell align="right">Watch</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name.name}>
                        <StyledTableCell component="th" scope="row">
                            <NameComponent {...row.name}/>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <span className={priceStyle}>
                                ${row.price}
                            </span>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <span className={chaneeStyle}>
                            +{row.chanee}%
                            </span>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <span className={priceStyle}>
                            ${row.marketCap}
                            </span>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <IconButton>
                                <StarOutlineIcon style={{fill: '#CAD0D7'}} fontSize={'medium'}/>
                            </IconButton>
                        </StyledTableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>

    );
}

export default CustomTable;
