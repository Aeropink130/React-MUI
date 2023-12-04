import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp