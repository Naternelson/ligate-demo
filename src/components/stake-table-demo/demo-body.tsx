import { Box, Checkbox, IconButton, TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Check, Delete, Edit, Error, QuestionMark } from "@mui/icons-material";
export default function DemoBody(){
    const arr:number[] = []
    for(let i = 0; i < 100;i++) {
        arr.push(i)
    }
    return (
        <TableBody>
            {arr.map(() => {
                return <DemoRow/>
            })}
        </TableBody>
    )
}

export function DemoRow(){
    const rndValue = Math.floor(Math.random() * 3)
    return (
        <TableRow hover={true}>
            <TableCell padding="checkbox" align="center"><Checkbox size={"small"}/></TableCell>
            <TableCell>{[faker.name.firstName(), faker.name.lastName()].join(" ")}</TableCell>
            <TableCell>{["Ogden",faker.random.numeric(1) , "Ward"].join(" ")}</TableCell>
            <TableCell align="right">{[faker.random.numeric(2)].join(" ")}</TableCell>
            <TableCell padding="checkbox" align="center">
                <Tooltip title={rndValue === 0 ? "Active" : rndValue === 1 ? "Inactive" : "Unknown"}>
                    <Box>
                        {rndValue === 0 && <Check fontSize="small" color="success"/>}
                        {rndValue === 1 && <Error fontSize="small" color="warning"/>}
                        {rndValue === 2 && <QuestionMark fontSize="small" color='disabled'/>}
                    </Box>
                </Tooltip>
            </TableCell>
            <TableCell padding="checkbox" align="center">
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <IconButton>
                        <Tooltip title="Edit member">
                            <Edit fontSize="small"/>
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Delete member">
                            <Delete fontSize="small"/>
                        </Tooltip>
                    </IconButton>
                </Box>
            </TableCell>
        </TableRow>
    )
}