import { ArrowDropDown, FilterList, PersonAdd, Search, Upload } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, InputAdornment, TextField, TextFieldProps, Typography } from "@mui/material";
import { ReactNode } from "react";
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
    active: boolean
}

export function createTableHeaderItem(params:Partial<TableHeaderItem>):TableHeaderItem{
    const item:TableHeaderItem = {
        value: params.value || null, 
        type: params.type || TableType.Empty,
        sortable: params.sortable === true ? true : false,
        sortDirection: params.sortDirection || SortDirection.ASC,
        active: false 
    }
    return item
}

export default function TableHeader(){
    const context = useStakeTableContext()
    const {count, unitLabel} = context
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p:2}
    const settingButtonProps:ButtonProps = {size:"small", color: 'primary', variant:"outlined", endIcon: <ArrowDropDown/>} 
    const countCaption = `${count ? count[0] : 0} ${unitLabel ? unitLabel[0] : "individual"}s`
    const titleBoxProps:BoxProps = {display:'flex', flexDirection:'row', alignItems:'center', gap:1}
    const buttonAddProps:ButtonProps = { size: 'small', variant: 'contained', color: 'primary', startIcon:<PersonAdd fontSize="small"/>}
    const buttonUploadProps:ButtonProps = {...buttonAddProps, variant:"outlined", startIcon: <Upload fontSize="small"/>}
    const buttonFilterProps:ButtonProps = {...buttonUploadProps, startIcon: <FilterList fontSize="small"/>}
    const searchField:TextFieldProps = {
        value: context.filterBy ? context.filterBy[0] : "", 
        variant:"outlined", 
        size:'small', 
        placeholder:'search...', 
        onChange:(e) => {
            if(context.filterBy) context.filterBy[1](e.target.value)
        },
        InputProps: {
            startAdornment: <InputAdornment position="start"><Search fontSize="small"/></InputAdornment>
        }
    }
    return (
        <Box {...boxProps}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap:1}}>
                <Box {...titleBoxProps}>
                    <Typography variant="h6" color={"primary"}>Ogden YSA 2nd Stake</Typography>
                    <Typography variant="caption" sx={{fontStyle:"italic", color: 'grey.600'}}>{countCaption}</Typography>
                </Box>
                <Box  sx={{display: 'flex', flexDirection: 'row', gap:1}}>
                    <Button {...buttonAddProps}>Add</Button>
                    <Button {...buttonUploadProps}>Upload</Button>
                    <Button {...buttonFilterProps}>Filter</Button>
                    <TextField {...searchField}/>
                </Box>
            </Box>
            <Box>
                <Button {...settingButtonProps}>
                    Settings
                </Button>
            </Box>
        </Box>
    )
}