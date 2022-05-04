import { ArrowDropDown, FilterList, PersonAdd, Search, Upload } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, InputAdornment, TableCell, TableCellProps, TableHead, TableRow, TableRowProps, TableSortLabel, TableSortLabelProps, TextField, TextFieldProps, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { useStakeTableContext } from ".";

export enum TableType{
    Icon,
    Text, 
    Number,
    Empty
}
export enum SortDirection{
    ASC="asc",
    DESC="desc"
}

export interface TableHeaderItem{
    type: TableType,
    value: ReactNode|string|number|null, 
    sortable:boolean, 
    sortDirection: SortDirection,
    active: boolean,
    id: string
}

export function createTableHeaderItem(id: string, params:Partial<TableHeaderItem>):TableHeaderItem{
    const item:TableHeaderItem = {
        value: params.value || null, 
        type: params.type || TableType.Empty,
        sortable: params.sortable === true ? true : false,
        sortDirection: params.sortDirection || SortDirection.ASC,
        active: false,
        id 
    }
    return item
}

export default function TableHeader(){
    const context = useStakeTableContext()
    const headers:TableHeaderItem[] = context.headers ? context.headers[0] : []
    const rowProps: TableRowProps = {sx:{bgcolor: '#edf0f2'}}
    return (
        <TableHead>
            <TableRow {...rowProps}>
                {headers.map(header => {
                    return <CustomTableHeadCell key={header.id} {...header}/>
                })}
            </TableRow>
        </TableHead>
    )
}

function CustomTableHeadCell(params: TableHeaderItem){
    
    const {sortable, type, active, sortDirection, id, value} = params
    const [direction, setDirection] = useState(sortDirection)
    const {activeColumn} = useStakeTableContext()
    const cellProps: TableCellProps = {
        align: type === TableType.Icon ? "center" : type === TableType.Number ? "right" : "left",
        padding: type === TableType.Icon ? "checkbox" : "normal"
    }
    const sortLabelProps:TableSortLabelProps = {
        active, direction, onClick: () => {
            activeColumn && activeColumn[1](id)
            setDirection(previous => {
                return previous === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC
            })
        }
    }
    const inner = <Typography variant="overline">{value}</Typography>
    return (
        <TableCell {...cellProps}>
            {sortable && <TableSortLabel {...sortLabelProps}>
                {inner}
            </TableSortLabel>}
            {!sortable && inner}
        </TableCell>
    )
}