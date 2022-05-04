import faker from "@faker-js/faker"
import { Add, ArrowRight } from "@mui/icons-material"
import { BoxProps, Box, Typography, Button, ButtonProps, Divider, List, ListItemButton } from "@mui/material"
import { useEffect, useState } from "react"

export default function WardList(){
    const boxProps:BoxProps = {
        sx: {overflowY:'hidden'},
        p:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:1
    }
    const buttonProps:ButtonProps ={
        variant:'contained',
        size:'small',
        endIcon: <Add fontSize="small"/>
    }
    return (
        <Box >
            <Box {...boxProps}>
                <Typography variant='h6' sx={{color: 'grey.700'}}>Stakes</Typography>
                <Button {...buttonProps}>Add</Button>
                <Divider/>
            </Box>
            <List dense={true}>
                <ListItemButton selected={true}>
                    <Typography variant="caption" sx={{color: 'grey.700'}}>Salt Lake City 2nd Stake </Typography>
                    <ArrowRight fontSize="small" sx={{color: 'grey.600'}}/>
                </ListItemButton>
                <StakeListItems/>
            </List>
        </Box>
    )
}

function StakeListItems(){
    const [names, setNames] = useState<string[]>([])
    useEffect(()=>{
        const names = []
        for(let i = 0; i < 5; i++){
            names.push([faker.address.cityName(), faker.random.numeric(1), "Stake"].join(' '))
        }
        setNames(names)
    },[])

    return <>
        {
            names.map(name => {
                return (
                    <ListItemButton>
                        <Typography variant="caption" sx={{color: 'grey.700'}}>{name}</Typography>
                        <ArrowRight fontSize="small" sx={{color: 'grey.600'}}/>
                    </ListItemButton>
                )
            })
        }
    </>
}