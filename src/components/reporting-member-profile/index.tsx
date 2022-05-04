import { ArrowDownward, ArrowDropDown, Edit } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, List, ListItem, Typography } from "@mui/material";

export default function MemberSidebar(){
    return (
        <Box sx={{p:3}} display={"flex"} flexDirection="column">
            <Box display="flex" flexDirection="row" justifyContent={"center"}>
                <Typography variant={"h5"} align="center">Anthony Jarvis</Typography>
                <IconButton>
                    <Edit sx={{fontSize:12}}/>
                </IconButton>
            </Box>
            <Typography variant={"caption"} align="center">Salt Lake City 2nd Stake</Typography>
            <Typography variant={"caption"} align="center">Alpine 3rd Ward</Typography>
            <Divider/>
            <Box mt={1}>
                <Button fullWidth={true} size="small" variant="outlined" sx={{gap:1}}>
                    <Typography>
                        Actions
                    </Typography>
                    <ArrowDropDown fontSize="small"/>
                </Button>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent={"center"} sx={{gap:1,mt:1}}>
                <Typography variant="body2">STATUS</Typography>
                <Typography variant="body2" color="white" sx={{bgcolor:'success.main', px:1}}>ACTIVE</Typography>
            </Box>
            <Box sx={{my: 2, p:1, borderTop:1, borderColor: 'grey.500', bgcolor:'grey.50'}}>
                <Box display="flex" flexDirection="row" justifyContent={"center"}>
                    <Typography variant="overline" align="center" sx={{textAlign:'center', width: '100%'}}>history</Typography>
                    <Divider/>
                </Box>
                <List sx={{ flex:1, height: "200px", overflowY:'auto'}}>
                    <ListItem alignItems="flex-start" sx={{gap:1, flexDirection:'column'}}>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '12px', lineHeight:1}}>
                            Anthony received a new calling
                        </Typography>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '10px',lineHeight:0.5}}>
                            @{new Date().toLocaleString()}
                        </Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{gap:1, flexDirection:'column'}}>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '12px', lineHeight:1}}>
                            Anthony met with Elder's Quorum Leadership
                        </Typography>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '10px',lineHeight:0.5}}>
                            @{new Date().toLocaleString()}
                        </Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{gap:1, flexDirection:'column'}}>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontWeight:'bold', fontSize: '12px', lineHeight:1}}>
                            Anthony's status changed from Unknown to Active
                        </Typography>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '10px',lineHeight:0.5}}>
                            @{new Date().toLocaleString()}
                        </Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{gap:1, flexDirection:'column'}}>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '12px', lineHeight:1}}>
                            Anthony met with Bishop
                        </Typography>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '10px',lineHeight:0.5}}>
                            @{new Date().toLocaleString()}
                        </Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{gap:1, flexDirection:'column'}}>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '12px', lineHeight:1}}>
                            Anthony's records were received
                        </Typography>
                        <Typography sx={{color: 'grey.600', fontStyle:"italic", fontSize: '10px',lineHeight:0.5}}>
                            @{new Date().toLocaleString()}
                        </Typography>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}