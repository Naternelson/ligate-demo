import { Box, Tab, Tabs, BoxProps } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import ReportingTable from "./reportingTable";

export default function DemoReportingTable(){
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <Box>
            <Tabs value={tabIndex} onChange={(e, index) => {
                setTabIndex(index)
            }}>
                <Tab label="My members"/>
                <Tab label="Their members"/>
            </Tabs>
            <TabPanel active={tabIndex} value={0}>
                <Box px={2}>
                    <ReportingTable title={"Ogden YSA 2nd Stake"}/>
                </Box>
                
            </TabPanel>
            <TabPanel active={tabIndex} value={1}>
                <Box px={2}>
                    <ReportingTable title={"Salt Lake City 2nd Stake"}/>
                </Box>
            </TabPanel>
        </Box>
    )
}

interface TabPanelProps{
    active:number, value:number
}
function TabPanel(props:PropsWithChildren<TabPanelProps>){
    const boxProps:BoxProps = {
        hidden: props.value !== props.active
    }
    return <Box {...boxProps}>{props.children}</Box>
}