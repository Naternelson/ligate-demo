import { ButtonBase, ButtonBaseProps, Typography } from "@mui/material"
import { useNavigator } from "../navigation"
import React from "react"

export default function Logo(){
    const [to] = useNavigator()
    const logoButtonProps:ButtonBaseProps = {onClick: to("/"), disableRipple:true}
    return (
        <ButtonBase {...logoButtonProps}>
            <Typography variant="button" sx={{fontSize: "24px"}}>LIGATE</Typography>
        </ButtonBase>
    )
}