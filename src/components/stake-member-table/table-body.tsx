import { Checkbox, TableBody, TableCell, TableCellProps, TableRow, TableRowProps } from "@mui/material"
import { PropsWithoutRef, ReactNode } from "react"
import { useStakeTableContext } from "."
import { TableType } from "./table-header"

export interface TableRowData{
    id:string, 
    data: {[column:string]: TableDataCell}  
}

export interface TableDataCell{
    type: TableType,
    value: ReactNode | string | number,
    column: string  
}

export function StakeTableBody(){
    const context = useStakeTableContext()
    return (
        <TableBody>
            {
                context.body && context.body.displayData.map(d => {
                    return <StakeTableRow key={d.id} {...d}/>
                })
            }
        </TableBody>
    )
}

export function StakeTableRow(params: TableRowData){
    const context = useStakeTableContext()
    const selected = context.body ? context.body.selected[0][params.id] : false 
    const rowProps:TableRowProps = {hover: true, selected}
    const arr:TableDataCell[] = (context.headers ? context.headers[0] : []).map(header => {
        return params.data[header.id]
    })
    return (
        <TableRow {...rowProps}>
            <SelectBox id={params.id} selected={selected}/>
            {
                arr.map(cell => {
                    return <StakeCell key={cell.column} {...cell}/>
                })
            }
        </TableRow>
    )
}

export function StakeCell(params:TableDataCell){
    const cellProps:TableCellProps = {
        align: params.type === TableType.Number ? "right" : params.type === TableType.Icon ? "center" : "left",
        padding: params.type === TableType.Icon ? "checkbox" : "normal",
        size: 'small'
    }
    return (
        <TableCell {...cellProps}>
            {params.value}
        </TableCell>
    )
}

interface SelectBoxProps{
    id:string,
    selected: boolean
}
export function SelectBox(params:PropsWithoutRef<SelectBoxProps>){
    const context = useStakeTableContext()
    const checked = params.selected
    const onChange = () => {
        context.body && context.body.selected[1](previous => ({...previous, [params.id]: !previous[params.id]}))
    }
    const element = <Checkbox checked={checked} onChange={onChange}/>
    const data = {
        type: TableType.Icon, value: element, column: "select"
    }
    return <StakeCell {...data}/>
}