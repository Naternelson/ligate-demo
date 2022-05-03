import {Box} from "@mui/material"
import { createContext, PropsWithChildren, useContext, useState} from "react"
import TableHeader, { TableHeaderItem } from "./table-header"
const Context = createContext<Partial<TableValue>>({})
interface TableValue{
    count: [number, React.Dispatch<React.SetStateAction<number>>],
    title: [string, React.Dispatch<React.SetStateAction<string>>],
    unitLabel?: [string, React.Dispatch<React.SetStateAction<string>>],
    headers: [TableHeaderItem[], React.Dispatch<React.SetStateAction<TableHeaderItem[]>>],
    filterBy: [string, React.Dispatch<React.SetStateAction<string>>]
}

interface TableProps{
    title: string,
    headers: TableHeaderItem[],
    unitLabel?: string
}
export default function StakeMemberTable(props:PropsWithChildren<TableProps>){
    const count = useState(0)
    const unitLabel = useState(props.unitLabel || "item")
    const headers = useState(props.headers)
    const title = useState(props.title)
    const filterBy = useState("")
    const value:TableValue = {
        count,
        title,
        unitLabel,
        headers,
        filterBy
    }
    const providerProps = {value}
    return (
        <Context.Provider {...providerProps}>
            <TableHeader/>
        </Context.Provider>
    )
}

export function useStakeTableContext(){
    return useContext(Context)
}

