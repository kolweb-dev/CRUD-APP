import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './pages/Home'
import UserList from "./pages/UsersList";

import PageNotFound from './pages/404'
import Header from "./components/Header";

import "./App.css";
import {fetchUsers} from "./store/userSlice";
import UserDetails from './pages/UserDetails'

// const UserDetails = React.lazy(() => import('./pages/UserDetails'));
function App() {
    const dispatch = useDispatch()
    const {
        users,
    } = useSelector(state => state.users)

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        }
    }, [dispatch, users.length])

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
