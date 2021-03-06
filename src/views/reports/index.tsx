import { Box, Paper } from "@mui/material";
import WardList from "../../components/report-ward-list";
import MemberSidebar from "../../components/reporting-member-profile";
import DemoReportingTable from "../../components/reportingTable";

export default function ReportsView(){
    return (
        <Box flex={1} display={"flex"} justifyContent="start" alignItems={"center"} p={3} gap={1}>
            <Paper elevation={5} sx={{height: '100%'}}>
               <WardList/>
            </Paper>
            <Paper elevation={5} sx={{height: '100%', flex:1}}>
                <DemoReportingTable/>
            </Paper>
            <Paper elevation={5} sx={{height: '100%', maxWidth: "300px"}}>
                <MemberSidebar/>
            </Paper>
        </Box>
    )
}