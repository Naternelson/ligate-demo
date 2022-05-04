import { Box, BoxProps, IconButton, Paper, Tooltip } from "@mui/material";
import StakeTable from "../../components/stake-table";
import { BodyCell, BodyData, BodyRow, MemberHeader, StakeProviderProps } from "../../components/stake-table/provider";
import {faker} from '@faker-js/faker'
import { startCase } from "lodash";
import { CustomCell } from "../../components/stake-table/header";
import { Check, Delete, Edit, PriorityHigh, Warning } from "@mui/icons-material";
import DemoStakeTable from "../../components/stake-table-demo";
export default function DashboardHome(){
    return (
        <Box height="75%" display="flex" flexDirection="row" gap={2} my={2}>
            <Paper elevation={5} sx={{p:3}}>Hi</Paper>
            <Paper elevation={5} sx={{flex:1, p:3, overflow:'hidden'}}>
                <DemoStakeTable/>
            </Paper>
            <Paper elevation={5} sx={{p:3}}>Hi</Paper>
        </Box>
    )
}
// export default function DashboardHome(){
//     // const headers: TableHeaderItem[] = [
//     //     createTableHeaderItem("name", {value: 'Name', sortable:true, type: TableType.Text}),
//     //     createTableHeaderItem("ward", {value: 'Ward', sortable:true, type: TableType.Text}),
//     // ]
//     function createHeaderCell(id:MemberHeader, name?:string | null, sortable:boolean = false){
//         const cellName = name === undefined ? id.toUpperCase() : name 
//         return {id, value:cellName, sortable}
//     }
//     const nameHeader = createHeaderCell(MemberHeader.Name)
//     const wardHeader = createHeaderCell(MemberHeader.Ward)
//     const ageHeader = createHeaderCell(MemberHeader.Age)
//     const activityHeader = createHeaderCell(MemberHeader.Activity)
//     const buttonHeader = createHeaderCell(MemberHeader.Buttons, null)
//     const fakerFn =  (columnId: string, value: string|CustomCell, rowId:number| string) => {
//         const bc:BodyCell =  {
//             columnId, value, rowId: String(rowId)
//         }
//         return bc
//     }
//     const data:BodyData = {}
//     for(let i = 0; i < 300; i++){
//         data[String(i)]  = {
//             id: String(i),
//             data: {
//                 [nameHeader.id]: fakerFn(nameHeader.id, [faker.name.firstName(), faker.name.lastName()].join(" "), i), 
//                 [wardHeader.id]: fakerFn(wardHeader.id, [startCase(faker.lorem.word()), "ward"].join(" "), i),
//                 [ageHeader.id]: fakerFn(ageHeader.id, faker.random.numeric(2),i),
//                 [activityHeader.id]: fakerFn(activityHeader.id, ()=><ActivityCell/>, i),
//                 [buttonHeader.id]: fakerFn(buttonHeader.id, () => <ButtonCell/>, i)
//             }
//         }
//     }

//     const stakeTableProps:StakeProviderProps<MemberHeader> = {
//         title: "Ogden YSA 2nd Stake",
//         unitType: 'member',
//         headers: [nameHeader, wardHeader, ageHeader, activityHeader, buttonHeader],
//         data
//     }
//     return (
//         <Box>
//             <StakeTable {...stakeTableProps}/>
//             {/* <StakeMemberTable title="Ogden YSA 2nd Stake" unitLabel="member" headers={headers}/> */}
//         </Box>
//     )
// }

// function ActivityCell(){
//     const rndValue = Math.floor(Math.random() * 3)  

//     switch (rndValue){
//         case 0: 
//             return <Tooltip title="Active"><Check color="success" fontSize="small"/></Tooltip>
//         case 1: 
//             return <Tooltip title="Inactive"><Warning color="warning" fontSize="small"/></Tooltip>
//         case 2: 
//             return <Tooltip title="Member needs help"><PriorityHigh color="error" fontSize="small"/></Tooltip>
//         default: 
//             return null 
//     }
// }

// function ButtonCell(){
//     const boxProps:BoxProps = {display:'flex', flexDirection:'row', gap:1}
//     return (
//         <Box {...boxProps}>
//             <IconButton><Edit/></IconButton>
//             <IconButton><Delete/></IconButton>
//         </Box>
//     )
// }