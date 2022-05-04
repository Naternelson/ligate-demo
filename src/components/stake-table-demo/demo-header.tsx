import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";

export default function DemoHeader(){
    return (
        <TableHead>
            <TableRow sx={{bgcolor: "#e6eef0"}}>
                <SelectBox/>
                <TableCell padding="normal" align='left'>
                    Name
                </TableCell>
                <TableCell padding="normal" align='left'>
                    Ward
                </TableCell>
                <TableCell padding="normal" align='right'>
                    Age
                </TableCell>
                <TableCell padding="checkbox" align='center'>
                    Activity
                </TableCell>
                <TableCell padding="normal" align='left'/>
            
            </TableRow>
        </TableHead>
    )
}

function SelectBox(){
    return (
        <TableCell padding={"checkbox"} align="center">
            <Checkbox/>
        </TableCell>
    )
}
