import { Table, TableContainer } from "@mui/material";
import { PropsWithoutRef } from "react";
import TableHeader from "./header";
import StakeProvider, { MemberHeader, StakeProviderProps } from "./provider";
import TableBar from "./table-bar";

export default function StakeTable(props:PropsWithoutRef<StakeProviderProps<MemberHeader>>){
    return (
        <StakeProvider {...props}>
            <TableBar/>
            <TableContainer>
                <Table>
                    <TableHeader/>
                </Table>
            </TableContainer>
        </StakeProvider>
    )
}