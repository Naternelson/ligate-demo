import { Box, ButtonBase, Divider, List, ListItem, Typography } from "@mui/material";

export default function LeadershipStack(){
    return (
        <Box>
            <Typography variant="h6" align="center" sx={{color:'grey.500'}}>Leadership</Typography>
            <List>
                <ListItem sx={{justifyContent: 'end'}}>
                    <ButtonBase disableRipple>
                        <Box>
                            <Typography align="right" variant={"overline"} sx={{fontSize:"10px", lineHeight:1}}>Stake President:</Typography>
                            <Divider/>
                            <Typography align="right" variant="body2" sx={{color: 'grey.600'}}>John Smith</Typography>
                        </Box>
                    </ButtonBase>
                </ListItem>
                <ListItem sx={{justifyContent: 'end'}}>
                    <ButtonBase disableRipple>
                        <Box>
                            <Typography align="right" variant={"overline"} sx={{fontSize:"10px", lineHeight:1}}>1st Counselor:</Typography>
                            <Divider/>
                            <Typography align="right" variant="body2" sx={{color: 'grey.600'}}>Ryan McBeth</Typography>
                        </Box>
                    </ButtonBase>
                </ListItem>
                <ListItem sx={{justifyContent: 'end'}}>
                    <ButtonBase disableRipple>
                        <Box>
                            <Typography align="right" variant={"overline"} sx={{fontSize:"10px", lineHeight:1}}>2nd Counselor:</Typography>
                            <Divider/>
                            <Typography align="right" variant="body2" sx={{color: 'grey.600'}}>Bill Jones</Typography>
                        </Box>
                    </ButtonBase>
                </ListItem>
            </List>
        </Box>
        
    )
}