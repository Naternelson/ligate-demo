import { Box, Checkbox, CheckboxProps, SortDirection, TableCell, TableCellProps, TableHead, TableRow, TableSortLabel, TableSortLabelProps, Typography } from "@mui/material"
import { PropsWithoutRef, ReactNode } from "react"
import {useStakeContext, HeaderCellData, MemberHeader} from "./provider"

export default function TableHeader(){
    const context = useStakeContext()
    if(!context) return null 
    const headers = context.headers[0]
    return (
        <TableHead>
            <TableRow>
                <SelectCell/>
                {headers.map(header => {
                    return <TableHeaderCell key={header.id} {...header}/>
                })}
            </TableRow>
        </TableHead>
    )
}

 export type CustomCell = (id?:string, cell?:any, context?:any) => ReactNode 
 export interface HeaderCellProps{
    sortable:boolean, 
    id:string, 
    value: CustomCell | string | number | null,
}
export function TableHeaderCell(props: PropsWithoutRef<HeaderCellProps>){
    const context = useStakeContext()
    if(!context) return null 
    const value = typeof props.value === "function" ? props.value(props.id, null, context) : props.value
    const sortLabelProps:TableSortLabelProps = {
        active: context.activeColumn[0] === props.id,
        direction: context.sortDirection[0] || "asc",
        onClick: () => {
            context.activeColumn[1](props.id as MemberHeader)
            const sameCol = context.activeColumn[0] === props.id
            context.sortDirection[1](previous => {
                if(sameCol) return previous === "asc" ? "desc" : "asc"
                else return "desc"
            })
        }
    }
    const cellProps: TableCellProps = {
        align: typeof props.value === "number" ? "right" : typeof props.value === "function" ? "center" : "left",
        padding: typeof props.value === "function" ? "checkbox" : "normal"
    }
    return (
        <TableCell {...cellProps}>
            {props.sortable && <TableSortLabel {...sortLabelProps}>{value}</TableSortLabel>}
            {!props.sortable && value}
        </TableCell>
    )
}


function SelectCell(){
    const context = useStakeContext() 
    if(!context) return null     
    const countSelected = Object.values(context.selected[0]).reduce((count, bool) => !!bool ? count+1 : count, 0)
    let checked:boolean 
    let indeterminate:boolean 
    if(context.count > 0){
        checked = countSelected === context.count
        indeterminate = countSelected !== context.count  
    } else {
        checked = false 
        indeterminate = false 
    }
    const checkboxProps:CheckboxProps = {checked, indeterminate, onChange: () => {
        if(checked || indeterminate) context.selected[1](previous => {
            for(const key in previous) previous[key] = false 
            return previous 
        }) 
        else context.selected[1](previous => {
            for(const key in previous) previous[key] = true 
            return previous 
        }) 
    }}
    const cellProps: TableCellProps ={
        padding: 'checkbox', align: 'center'
    }
    return (
        <TableCell {...cellProps}>
            <Checkbox {...checkboxProps}/>
        </TableCell>
    )
}