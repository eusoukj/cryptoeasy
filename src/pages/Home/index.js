import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: 'calc(100vh - 64px)',
        padding: 24,
           
    },
    toolbar: {
        minHeight: 64,
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path="*" element={<h1>NOT FOUND</h1>} />
                </Routes>

            {/* <Container maxWidth="lg">
             <Box display="flex">
                <NavBar />
                <Feed />
                </Box>
            </Container> */}
            </main>
        </div>
    )
}

export default Home;