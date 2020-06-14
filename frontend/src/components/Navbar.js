import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">

                <Typography variant="h4" color="inherit" align="left">
                SeeSaw Web Interface
                </Typography>
                <Typography variant="subtitle" color="inherit" align="right">
                    Github repo:  https://github.com/Hollund/SeesawWebInterface
                </Typography>

        </AppBar>
        </div>
    )
}
export default NavBar;