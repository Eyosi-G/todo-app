import React from 'react'
import {Breadcrumbs,Grid,Box,Link,Button} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
const Header = () => {
    return (
        <Box mt={5} mr={19} mb={5}>
            <Grid container justify="flex-end">
                <Breadcrumbs>
                    <Button component={RouterLink} to="/create" color="primary">Create</Button>
                </Breadcrumbs>
            </Grid>
        </Box>
        
    )
}

export default Header
