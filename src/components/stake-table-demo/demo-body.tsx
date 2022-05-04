import { Box, Checkbox, IconButton, TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Check, Delete, Edit, Error, QuestionMark } from "@mui/icons-material";
import { ReactNode, useEffect, useState } from "react";
interface BodyProps{
    count: number
}
export default function DemoBody(props:BodyProps){
    const arr:number[] = []
    for(let i = 0; i < props.count; i++) {
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
    const [name, setName] = useState<string>("")
    const [ward, setWard] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [activity] = useState<number>(Math.floor(Math.random() * 3))
    useEffect(()=>{
        setName([faker.name.firstName(), faker.name.lastName()].join(" "))
        setWard([faker.address.cityName(),faker.random.numeric(1) , "Ward"].join(" "))
        setAge([faker.random.numeric(2)].join(" ")) 

    },[])
    return (
        <TableRow hover={true}>
            <TableCell padding="checkbox" align="center"><Checkbox size={"small"}/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{ward}</TableCell>
            <TableCell align="right">{age}</TableCell>
            <TableCell padding="checkbox" align="center">
                <Tooltip title={activity === 0 ? "Active" : activity === 1 ? "Inactive" : "Unknown"}>
                    <Box>
                        {activity === 0 && <Check fontSize="small" color="success"/>}
                        {activity === 1 && <Error fontSize="small" color="warning"/>}
                        {activity === 2 && <QuestionMark fontSize="small" color='disabled'/>}
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