import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FavoritesContext } from '../../contexts/FavoriteContext/FavoritesContext';
import { Container } from 'react-bootstrap';
import FavoriteButton from '../../components/FavoriteButton';
import Avatar from '@mui/material/Avatar';
import { Button, Chip, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

export default function FavoritePage() {
    const { favoritesState, } = React.useContext(FavoritesContext)
    const navigate = useNavigate()

    return (
        <Container>

            <TableContainer component={Paper}
                sx={{
                    // padding: '8px',
                    // margin: '4px',
                }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Evolution</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {favoritesState.map((row) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="pokemon-row"
                                key={row.name}
                                
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar alt={row.name} src={row.image} />
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {
                                        row.type.map((el, index) => {
                                            return <Chip color="info" size="small" label={el} key={index} className="ms-1" />
                                        })
                                    }
                                </TableCell>
                                <TableCell align="right">{row.height}</TableCell>
                                <TableCell align="right">{row.weight}</TableCell>
                                <TableCell align="right">{row.evolution}</TableCell>
                                <TableCell align="right">
                                    <FavoriteButton favorite={row} style={{ zIndex: 2 }} />
                                </TableCell>
                                <TableCell align="left">
                                    <InfoIcon color='success' onClick={() => { navigate(`/character/${row._id}`) }} />
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    );
}