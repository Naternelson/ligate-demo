import { Checkbox, CheckboxProps, TableBody, TableCell, TableCellProps, TableRow, TableRowProps } from "@mui/material";
import { PropsWithoutRef } from "react";
import { BodyCell, useStakeContext } from "./provider";

export default function CustomTableBody(){
    const context = useStakeContext() 
    if(!context) return null 
    return (
        <TableBody>
            {context.display[0].map(key => {
                return <CustomTableRow id={key} key={key}/>
            })}
        </TableBody>
    )
}

export interface RowProps{
    id:string
}

function CustomTableRow(props: PropsWithoutRef<RowProps>){
    const context = useStakeContext() 
    if(!context) return null 
    const selected = context.selected[0][props.id]
    const rowProps: TableRowProps = {
        selected, hover:true, 
    }
    return (
        <TableRow {...rowProps}>
            <SelectCell id={props.id} selected={selected}/>
            {context.headers[0].map(header => {
                const cellProps:BodyCell = context.data[0][props.id].data[header.id]
                return <CustomTableCell {...cellProps}/>
            })}
        </TableRow>
    )
}

interface SelectCellProps{
    selected:boolean, 
    id:string 
}
function SelectCell(props: PropsWithoutRef<SelectCellProps>){
    const context = useStakeContext() 
    if(!context) return null 
    const checkProps:CheckboxProps = {
        checked: props.selected,
        onChange: () => {
            context.selected[1](previous => ({...previous, [props.id]: !previous[props.id]}))
        }
    }
    const cellProps:TableCellProps= {
        padding: 'checkbox', align:'center'
    }
    return (
        <TableCell {...cellProps}>
            <Checkbox {...checkProps}/>
        </TableCell>
    )
}



function CustomTableCell(props:PropsWithoutRef<BodyCell>){
    const context = useStakeContext() 
    const {rowId, columnId} = props 
    const value = typeof props.value === "function" ? props.value(rowId, columnId, context) : props.value ? props.value : ""

    const cellProps: TableCellProps = {
        align: typeof props.value === "function" ? "center" : typeof props.value === "number" ? "right" : "left",
        padding: typeof props.value === "function" ? "checkbox" : "normal"
    }
    return (
        <TableCell {...cellProps}>
            {value}
        </TableCell>
    )
}