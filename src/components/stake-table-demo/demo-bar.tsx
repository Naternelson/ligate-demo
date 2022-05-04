import { Search, PersonAdd, Upload, FilterList, ArrowDropDown } from "@mui/icons-material"
import { Box, BoxProps, Button, ButtonProps, InputAdornment, TextField, TextFieldProps, Typography } from "@mui/material"
import { PropsWithoutRef } from "react"

interface DemoProps{
    count: number, title:string, unitType: string
}
export default function DemoTableBar(props:DemoProps){
    const {count, title, unitType} = props
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py:2}
    const titleBoxProps: TitleBoxProps = {count, unitType, title}
    const leftBoxProps:BoxProps = {sx:{display: 'flex', flexDirection: 'column', gap:1}}
    return (
        <Box {...boxProps}>
            <Box {...leftBoxProps}>
                <TitleBox {...titleBoxProps}/>
                <ButtonBox/>
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
            <Typography variant="h6" color={"primary"}>{props.title}</Typography>
            <Typography variant="caption" sx={{fontStyle:"italic", color: 'grey.600'}}>{countCaption}</Typography>
        </Box>
    )
}


function ButtonBox(){
    const boxProps:BoxProps = {sx:{display: 'flex', flexDirection: 'row', gap:1}}
    const buttonAddProps:ButtonProps = { size: 'small', variant: 'contained', color: 'primary', startIcon:<PersonAdd fontSize="small"/>}
    const buttonUploadProps:ButtonProps = {...buttonAddProps, variant:"outlined", startIcon: <Upload fontSize="small"/>}
    const buttonFilterProps:ButtonProps = {...buttonUploadProps, startIcon: <FilterList fontSize="small"/>}
    const searchField:TextFieldProps = {
        variant:"outlined", 
        size:'small', 
        placeholder:'search...', 
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
                Download as PDF
            </Button>
        </Box>
    )
}