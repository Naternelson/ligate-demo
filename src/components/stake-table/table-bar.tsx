import { FilterList, PersonAdd, Search, Upload, ArrowDropDown } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, InputAdornment, TextField, TextFieldProps, Typography } from "@mui/material";
import { PropsWithoutRef } from "react";
import { useStakeContext } from "./provider";


export default function TableBar(){
    const context = useStakeContext()
    if(!context) return null
    const {count, unitType, title, searchBy} = context
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py:2}
    const leftBoxProps:BoxProps = {sx:{display: 'flex', flexDirection: 'column', gap:1}}
    const titleBoxProps: TitleBoxProps = {count, unitType: unitType[0], title: title[0]}
    const buttonBoxProps: ButtonBoxProps = {searchBy}
    return (
        <Box {...boxProps}>
            <Box {...leftBoxProps}>
                <TitleBox {...titleBoxProps}/>
                <ButtonBox {...buttonBoxProps}/>
            </Box>
            <SettingBox/>
        </Box>
    )
}

interface TitleBoxProps{
    title:string,
    unitType:string
    count:number
}
function TitleBox(props:PropsWithoutRef<TitleBoxProps>){
    const countCaption = props.count > 0 ? `${props.count} ${props.unitType}s` : ""
    const titleBoxProps:BoxProps = {display:'flex', flexDirection:'row', alignItems:'center', gap:1}
    return (
        <Box {...titleBoxProps}>
            <Typography variant="h6" color={"primary"}>Ogden YSA 2nd Stake</Typography>
            <Typography variant="caption" sx={{fontStyle:"italic", color: 'grey.600'}}>{countCaption}</Typography>
        </Box>
    )
}

interface ButtonBoxProps{
    searchBy: [string, React.Dispatch<React.SetStateAction<string>>], 
}
function ButtonBox(props:PropsWithoutRef<ButtonBoxProps>){
    const boxProps:BoxProps = {sx:{display: 'flex', flexDirection: 'row', gap:1}}
    const buttonAddProps:ButtonProps = { size: 'small', variant: 'contained', color: 'primary', startIcon:<PersonAdd fontSize="small"/>}
    const buttonUploadProps:ButtonProps = {...buttonAddProps, variant:"outlined", startIcon: <Upload fontSize="small"/>}
    const buttonFilterProps:ButtonProps = {...buttonUploadProps, startIcon: <FilterList fontSize="small"/>}
    const searchField:TextFieldProps = {
        value: props.searchBy[0], 
        variant:"outlined", 
        size:'small', 
        placeholder:'search...', 
        onChange:(e) => {
            props.searchBy[1](e.target.value)
        },
        InputProps: {
            startAdornment: <InputAdornment position="start"><Search fontSize="small"/></InputAdornment>
        }
    }
    
    return (
        <Box {...boxProps}>
            <Button {...buttonAddProps}>Add</Button>
            <Button {...buttonUploadProps}>Upload</Button>
            <Button {...buttonFilterProps}>Filter</Button>
            <TextField {...searchField}/>
        </Box>
    )
}

function SettingBox(){
    const settingButtonProps:ButtonProps = {size:"small", color: 'primary', variant:"outlined", endIcon: <ArrowDropDown/>} 
    return (
        <Box>
            <Button {...settingButtonProps}>
                Settings
            </Button>
        </Box>
    )
}