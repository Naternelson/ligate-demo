import {Box, Table, TableContainer} from "@mui/material"
import { createContext, PropsWithChildren, useContext, useEffect, useState} from "react"
import { useDeepEffect } from "../utilities/useDeepCompareEffect"
import { TableHeaderBar } from "./table-bar"
import { TableRowData } from "./table-body"
import TableHeader, { SortDirection, TableHeaderItem } from "./table-header"
const Context = createContext<Partial<TableValue>>({})
interface TableValue{
    count: [number, React.Dispatch<React.SetStateAction<number>>],
    title: [string, React.Dispatch<React.SetStateAction<string>>],
    unitLabel?: [string, React.Dispatch<React.SetStateAction<string>>],
    headers: [TableHeaderItem[], React.Dispatch<React.SetStateAction<TableHeaderItem[]>>],
    filterBy: [string, React.Dispatch<React.SetStateAction<string>>],
    activeColumn: [string, React.Dispatch<React.SetStateAction<string>>],
    body: Body
}

interface TableProps{
    title: string,
    headers: TableHeaderItem[],
    unitLabel?: string,
    data?: {[key:string]: TableRowData}
}

interface Body{
    indexes: {[key:string]:any}
    selected: [{[key: string]: boolean }, React.Dispatch<React.SetStateAction<{[key: string]: boolean }>>]
    rawData:{[key:string]:any},
    displayData: TableRowData[]
}

export default function StakeMemberTable(props:PropsWithChildren<TableProps>){
    const count = useState(0)
    const unitLabel = useState(props.unitLabel || "item")
    const headers = useState(props.headers)
    const title = useState(props.title)
    const displayData = useState<any>({})
    const indexes = useState<{[key:string]:any}>({})
    const selected = useState<{[key: string]: boolean }>({})
    const rawData = useState(props.data|| {})
    const activeColumn = useState("")
    const filterBy = useState("")
    const value:TableValue = {
        count,
        title,
        unitLabel,
        headers,
        filterBy,
        activeColumn,
        body:{
            displayData:displayData[0],
            indexes: indexes[0],
            rawData: rawData[0], 
            selected
        }
    }
    const providerProps = {value}

    useEffect(()=>{
        headers[1](headers => {
            return headers.map(h => {
                return {
                    ...h, 
                    active: activeColumn[0] === h.id, 
                    sortDirection: SortDirection.ASC
                }
            })
        })
    },[activeColumn[0]])

    useDeepEffect(() => {
        
    },[rawData[0]])


    return (
        <Context.Provider {...providerProps}>
            <Box>
                <TableHeaderBar/>
                <TableContainer>
                    <Table>
                        <TableHeader/>
                    </Table>
                </TableContainer>
            </Box>

        </Context.Provider>
    )
}

export function useStakeTableContext(){
    return useContext(Context)
}



function headerIndex(headers: TableHeaderItem[], data: {[key:string]: TableRowData}){
    const ids = headers.map(h => h.id)
    ids.reduce((obj, id) => {
        const value = []
        
        return {}
    }, {})
}