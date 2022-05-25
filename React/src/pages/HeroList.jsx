import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const HeroList = ({heroes}) => {

    return ( 
    <TableContainer>
        <Table sx={{ minWidth: 500 }}>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Alias</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {heroes.map((hero, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">{hero.name}</TableCell> 
                        <TableCell>{hero.alias}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );

}

export default HeroList;