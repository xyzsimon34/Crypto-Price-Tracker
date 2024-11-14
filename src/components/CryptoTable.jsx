import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../styles/CryptoTable.css';

const CryptoTable = ({ coins }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">24h Change</TableCell>
                        <TableCell align="right">Market Cap</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coins.map((coin) => (
                        <TableRow key={coin.id}>
                            <TableCell>{coin.name}</TableCell>
                            <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                            <TableCell align="right">${coin.current_price}</TableCell>
                            <TableCell 
                                align="right" 
                                className={coin.price_change_percentage_24h > 0 ? 'price-positive' : 'price-negative'}
                            >
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                            <TableCell align="right">
                                ${coin.market_cap.toLocaleString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CryptoTable;