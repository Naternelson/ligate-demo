import { ArrowDropDown, NotificationsNone } from "@mui/icons-material";
import { Badge, BadgeProps, Box, BoxProps, Button, ButtonBase, ButtonProps, Menu, MenuList, MenuListProps, MenuProps, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { useNavigator } from "../navigation";

export default function UserBar(){
    const [to] = useNavigator()
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<any>(null)
    const onClick = (e:any) => {
        setAnchorEl(e.currentTarget)
        setOpen(e => !e)
    }
    const onClose = () => {
        setOpen(false)
        setAnchorEl(null)
    }
    const boxProps:BoxProps = {display: 'flex', flexDirection: 'row', gap:2}
    const endIcon:ReactNode = <ArrowDropDown fontSize="small"/>
    const buttonProps:ButtonProps = {variant:"outlined", endIcon, color: 'inherit', onClick}
    const menuProps:MenuProps = {
        open, onClose, anchorEl, 
        transformOrigin: {
            horizontal: 'right',
            vertical: 'top'
        },
        anchorOrigin:{
            horizontal: 'right',
            vertical: 'bottom'
        }}
    const menuList:MenuListProps = {dense: true, sx:{px:3, py:0, minWidth:"100px", textAlign:'right'}}
    const badgeProps:BadgeProps = {
        color:"warning",
        variant:'dot'
    }
    return (
        <Box {...boxProps}>
            <ButtonBase>
                <Badge {...badgeProps}>
                    <NotificationsNone fontSize="small"/>
                </Badge>
            </ButtonBase>

            <Button {...buttonProps}>
                <Typography variant="caption">John Smith</Typography>
            </Button>
            <Menu {...menuProps}>
                <MenuList {...menuList}>
                    <ButtonBase onClick={() => {
                        to("/profile")()
                        onClose()} } 
                        sx={{p:1, width: "inherit"}} disableRipple>
                        <Typography variant="body2">Edit Profile </Typography>
                    </ButtonBase>
                </MenuList>
            </Menu>
        </Box>
    )
}