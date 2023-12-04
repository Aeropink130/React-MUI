import React, { useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select, Toolbar, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { AppBar } from '@mui/material'
import { Tabs, Tab } from '@mui/material'



const Test = () => {

    return (

        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://reptilesmagazine.com/wp-content/uploads/data-import/1b08138d/green-iguana-shutterstock_637249666.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        SAVE
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

const MyAppBar = () => {
    const [value, setValue] = useState();
    const [anchorEl, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    }
    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab label="First" />
                        <Tab label="Second" />
                        <Tab label="Third" />
                    </Tabs>
                    <Button variant='contained' onClick={handleClick}>Open Menu</Button>
                    <Button color='inherit' onClick={handleClick}>Open Menu Again</Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Balance</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Test;