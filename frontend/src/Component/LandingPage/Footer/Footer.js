import React from "react";
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
        <Box style={{backgroundColor:'#f9f9f9'}}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    HAI BANK
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
  }

export default Footer;