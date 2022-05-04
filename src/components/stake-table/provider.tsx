import { SortDirection } from "@mui/material"
import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { useDeepCallback, useDeepEffect } from "../utilities/useDeepCompareEffect"
import { CustomCell } from "./header"

export interface Selected{
    [id:string]: boolean
}
export type SelectHeader<T> = (id:T) => void

export interface BodyData{
    [rowId:string]: BodyRow
}
export interface TableContext<T>{
    title:[string, React.Dispatch<React.SetStateAction<string>>]
    unitType: [string, React.Dispatch<React.SetStateAction<string>>]
    headers: [HeaderCellData<T>[], React.Dispatch<React.SetStateAction<HeaderCellData<T>[]>>]
    searchBy: [string, React.Dispatch<React.SetStateAction<string>>],
    sortDirection: [SortDirection, React.Dispatch<React.SetStateAction<SortDirection>>],
    selected: [Selected, React.Dispatch<React.SetStateAction<Selected>>], 
    selectHeader: SelectHeader<T>,
    data: [BodyData, React.Dispatch<React.SetStateAction<BodyData>>],
    display: [string[], React.Dispatch<React.SetStateAction<string[]>>], 
    activeColumn:[T, React.Dispatch<React.SetStateAction<T>>],
    count: number
}

export interface HeaderCellData<T> {
    id: T, 
    value: CustomCell | string | number | null
    sortable: boolean
}

export interface BodyCell{
    rowId: string, 
    value:  CustomCell | string | number | null
    columnId: string  
}
export interface BodyRow{
    id: string, 
    data: {[columnId: string]: BodyCell},
}

export enum MemberHeader{
    Select="select",
    Name="name",
    Ward="ward",
    Age="age",
    Activity="activity", 
    Buttons="buttons",
    Empty =""
}
export const TableContext = createContext<TableContext<MemberHeader> | undefined>(undefined)


export interface StakeProviderProps<T>{
    title: string, 
    unitType:string, 
    data: BodyData,
    headers: HeaderCellData<T>[]
}

export default function StakeProvider(props: PropsWithChildren<StakeProviderProps<MemberHeader>>){
    const selected = useState<Selected>({})
    const sortDirection = useState<SortDirection>("asc")
    const activeColumn = useState<MemberHeader>(MemberHeader.Empty)
    const data = useState(props.data)
    const title = useState(props.title)
    const unitType = useState(props.unitType)
    const headers = useState<HeaderCellData<MemberHeader>[]>(props.headers)
    const searchBy = useState("")
    const display = useState<string[]>([])

    interface SortValue{
        id: string;
        value: string | number | CustomCell;
    }
    const sortValues = useDeepCallback(() => {
        const values = Object.values(data[0]).map(row => {return {id: row.id, value: row.data[activeColumn[0]].value || ""}})
        const sorted = values.sort((a,b) =>{return +(a.value > b.value) || +(a.value === b.value) - 1;})
        return sorted 
    }, [data[0], sortDirection[0], activeColumn[0]])

    useDeepEffect(()=> {
        selected[1](previous => {
            return Object.keys(data[0]).reduce((obj, key) => {
                return {...obj, [key]: !!previous[key]}
            },{})
        })
    },[data[0]])

    useDeepEffect(() => {
        if(activeColumn[0] === "") {
            display[1](Object.keys(data[0]))
        } else {
            const sorted:SortValue[] = sortValues()
            display[1](sorted.map(s => s.id))
        }
        
    },[data[0]])

    useEffect(()=>{
        if(activeColumn[0] !== ""){
            const sorted:SortValue[] = sortValues()
            display[1](sorted.map(s => s.id))
        }

    },[activeColumn[0], sortDirection[0]])


    function selectHeader(id:MemberHeader){
        if(activeColumn[0] === id){
            sortDirection[1](previous => {
                return previous === "asc" ? "desc" : "asc"
            })
        } else sortDirection[1]("desc")
        activeColumn[1](id)
    } 

    const value:TableContext<MemberHeader> = {
        selected, 
        sortDirection, 
        activeColumn,
        data,
        title, 
        unitType,
        headers, 
        searchBy,
        selectHeader,
        display,
        count: display[0].length 
    }
    return (
        <TableContext.Provider value={value} > 
            {props.children}
        </TableContext.Provider>
    )
}


export function useStakeContext(){
    return useContext(TableContext)
}