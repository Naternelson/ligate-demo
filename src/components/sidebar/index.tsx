import { ArrowRight } from "@mui/icons-material";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";

export default function Sidebar(){
    return (
        <List dense={true}>
            <ListItemButton selected={true}>
                <ListItemText primary={<Typography variant="overline" sx={{fontSize: 12}}>My Stake</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
            <Divider sx={{mt:1}}/>
            <ListItemButton sx={{pl:3}}>
                <ListItemText primary={<Typography variant="overline">Ogden 1 Ward</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{pl:3}}>
                <ListItemText primary={<Typography variant="overline">Ogden 2 Ward</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{pl:3}}>
                <ListItemText primary={<Typography variant="overline">Ogden 3 Ward</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{pl:3}}>
                <ListItemText primary={<Typography variant="overline">Ogden 4 Ward</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{pl:3}}>
                <ListItemText primary={<Typography variant="overline">Ogden 5 Ward</Typography>}/>
                <ListItemIcon><ArrowRight/> </ListItemIcon>
            </ListItemButton>
        </List>
    )
}