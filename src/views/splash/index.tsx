import { Box, ButtonBase, Divider, Typography } from "@mui/material";
import { useNavigator } from "../../components/navigation";

export default function SplashPage(){
    const [to] = useNavigator()
    return (
        <Box  sx={{bgcolor:'primary.main', position:"absolute", height:'100vh', width: "100vw", zIndex: 1000, display:'flex', alignItems:'center', justifyContent: 'center'}}>
            <ButtonBase onClick={to("/")} sx={{height: "100%", width: '100%'}}>
                <Box sx={{p:5}}>
                    <Typography variant="h1" color="white" sx={{fontSize: "200px"}}>
                        LIGATE
                    </Typography>
                    <Divider sx={{borderColor:'white'}}/>
                    <Typography variant="subtitle1" align="center" sx={{color: '#a6ccf2', fontSize: '20px', fontStyle:'italic'}}>An Inter-Stake Communication Channel</Typography>
                </Box>
            </ButtonBase>
        </Box>
    )
}