import React from 'react'
import {Container,Grid} from '@material-ui/core'
import Header from '../components/Header'
import TaskItemList from '../components/TaskItemList'
const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <Grid container direction="column" justify="center" alignItems="stretch"> 
                    <TaskItemList/>
                </Grid>
            </Container>
        </>
        
    )
}

export default Home
