import React from 'react';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './navbar';

const App = () => {
    return ( 
        <>
        <Navbar /> { /* Use Navbar component like this */} 
            <Home />
        </>
        );
}

        export default App;