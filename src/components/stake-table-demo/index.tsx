import { BoxProps, Box, TableContainer, Table } from "@mui/material";
import DemoTableBar from "./demo-bar";
import DemoBody from "./demo-body";
import DemoHeader from "./demo-header";


export default function DemoStakeTable(){
    return (
        <Box height={"100%"} sx={{overflow:'hidden'}}>
            <DemoTableBar title={"Ogden YSA 2nd Stake"} count={500} unitType="member"/>
            <TableContainer sx={{height: 'inherit'}}>
                <Box sx={{overflow:'auto', flex:1}}>
                    <Table stickyHeader size="small">
                        <DemoHeader/>
                        <DemoBody/>
                    </Table>
                </Box>
            </TableContainer>
        </Box>

    )
}