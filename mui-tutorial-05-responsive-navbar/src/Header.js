import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ShoppingCartCheckout } from '@mui/icons-material'
import DrawerComp from './DrawerComp'
import { ThemeContext } from '@emotion/react'

export const Header = () => {
    const [value, setValue] = useState();
    const isMatch = useMediaQuery(ThemeContext.breakpoints.down('md'));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckout />
                    {
                        isMatch ? (
                            <>
                                <Typography>
                                    SHOPEE
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
                                    <Tab label="Products" />
                                    <Tab label="Services" />
                                    <Tab label="Contact Us" />
                                    <Tab label="About Us" />
                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant='contained'>Sign Up</Button>
                            </>
                        )
                    }
                </Toolbar>
                <DrawerComp />
            </AppBar>
        </React.Fragment>
    )
}
