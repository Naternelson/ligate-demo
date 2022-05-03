import { Box } from "@mui/material";
import StakeMemberTable from "../../components/stake-member-table";

export default function DashboardHome(){
    return (
        <Box>
            <StakeMemberTable title="Ogden YSA 2nd Stake" unitLabel="member" headers={[]}/>
        </Box>
    )
}