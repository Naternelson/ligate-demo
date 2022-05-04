import { Box, BoxProps, ButtonBase, ButtonBaseProps, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigator } from "../navigation";

export default function NavLinks(){
    const boxProps:BoxProps = {display:'flex', flexDirection:'row', height: "64px", flex:1, justifyContent:'center'}
    return (
        <Box {...boxProps}>
            <NavLink label="Members" location="/"/>
            <NavLink label="Reports" location="/reports"/>
            <NavLink label="Profile" location="/profile"/>
        </Box>
    )
}

interface NavLinkProps{
    label: string,
    location: string  
}

function NavLink(props:NavLinkProps){
    const location = useLocation()
    const [to] = useNavigator()
    const boxProps:BoxProps = {display: 'flex', alignItems: 'center', height: '100%', py:0, px: 2, sx:{borderTop: location.pathname === props.location ? 4 : 0, borderColor: "primary.main"}}
    const buttonProps:ButtonBaseProps = {onClick: to(props.location)}
    return (
        <ButtonBase {...buttonProps}>
            <Box {...boxProps}>
                <Typography variant={"button"}>{props.label}</Typography>
            </Box>
        </ButtonBase>

    )
}