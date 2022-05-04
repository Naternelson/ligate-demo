import { Box, Table, TableContainer } from "@mui/material";
import DemoTableBar from "../stake-table-demo/demo-bar";
import DemoBody from "../stake-table-demo/demo-body";
import DemoHeader from "../stake-table-demo/demo-header";

interface ReportingTableProps{
    title:string
}
export default function ReportingTable(props: ReportingTableProps){
    const count = Math.floor(Math.random()*10)
    return (
        <Box>
            <DemoTableBar count={count} title={props.title} unitType="member"/>
            <TableContainer>
                <Table size={"small"}>
                    <DemoHeader/>
                    <DemoBody count={7}/>
                </Table>
            </TableContainer>
        </Box>

    )
}