import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers} from "../../store/userSlice";

import Loading from "../../components/Loading";

import './index.css'
import Table from "../../components/Table";
import UserDialog from "../../components/UserDialog";


const UserList = () => {
    const {
        users,
        loading
    } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [isOpenAddUser, setIsOpenAddUser] = useState(false)

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        }
    }, [users.length, dispatch])


    if (loading) {
        return <Loading/>
    }

    return (
        <div className='users-list'>
            <div className='container'>
                <h1 className='users-list__title'>Users list</h1>
                <button
                    type='btn'
                    className='users-list-btn'
                    onClick={() => setIsOpenAddUser(true)}
                >
                   + Add User
                </button>
                <Table users={users}/>
                <UserDialog
                    isOpen={isOpenAddUser}
                    setIsOpne={setIsOpenAddUser}
                    isEdit={false}
                />
            </div>
        </div>
    )
}

export default React.memo(UserList);