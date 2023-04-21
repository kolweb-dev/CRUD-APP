import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './pages/Home'
import UserList from "./pages/UsersList";

import PageNotFound from './pages/404'
import Header from "./components/Header";

import "./App.css";


const UserDetails = React.lazy(() => import('./pages/UserDetails'));
function App() {

    return (
        <div className='app'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="users" element={<UserList/>}/>
                    <Route path="/users/:userId" element={<UserDetails/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
