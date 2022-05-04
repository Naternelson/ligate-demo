import { Box, BoxProps, Typography } from "@mui/material"

export default function Filler(){
    
    const boxProps:BoxProps = {
        display: 'flex',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
    return (
        <Box {...boxProps}>
            <Typography variant="h1" sx={{color: 'grey.200'}}> Insert Page Here </Typography>
        </Box>
    )
}