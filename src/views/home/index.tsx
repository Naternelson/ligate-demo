import { Box } from "@mui/material";
import StakeMemberTable from "../../components/stake-member-table";
import { createTableHeaderItem, TableHeaderItem, TableType } from "../../components/stake-member-table/table-header";

export default function DashboardHome(){
    const headers: TableHeaderItem[] = [
        createTableHeaderItem("name", {value: 'Name', sortable:true, type: TableType.Text}),
        createTableHeaderItem("ward", {value: 'Ward', sortable:true, type: TableType.Text}),
    ]
    return (
        <Box>
            <StakeMemberTable title="Ogden YSA 2nd Stake" unitLabel="member" headers={headers}/>
        </Box>
    )
}