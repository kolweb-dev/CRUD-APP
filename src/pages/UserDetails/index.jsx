import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';

import {fetchUsers} from "../../store/userSlice";
import Loading from "../../components/Loading";

import './index.css'
import UserDialog from "../../components/UserDialog";


const UserDetails = () => {
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const [isOpenEditUser, setIsOpenEditUser] = useState(false);

    const {
        users,
        loading
    } = useSelector(state => state.users)
    const {userId} = useParams();

    const [user, setUser] = useState(null)
    const [nextUserId, setNextUserId] = useState(null)
    const [prevUserId, setPrevUserId] = useState(null)

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        } else {
            setUser(users.find((el) => el.id === Number(userId)))
            const currentUserIndex = users.findIndex(element => element.id === Number(userId));
            setNextUserId(users[currentUserIndex + 1]?.id)
            setPrevUserId(users[currentUserIndex - 1]?.id)
        }
    }, [dispatch, users, userId])

    const handleChangeUser = (id) => navigate(`/users/${id}`)

    if (loading || !user) {
        return <Loading/>
    }
    return (
        <div className="user">
            <h1 className='user__title'>
                {user.username} Details
            </h1>
            <button
                type='btn'
                className='user__edit-btn'
                onClick={() => setIsOpenEditUser(true)}
            >
                Edit {user.username}
            </button>
            <ul className="user-list">
                <li>
                    <span>Id:</span> {user.id}
                </li>
                <li>
                    <span>Name:</span> {user.name}
                </li>
                <li>
                    <span>Username:</span> {user.username}
                </li>
                <li>
                    <span>Email:</span> {user.email}
                </li>
                <li>
                    <span>Address:</span>
                    <ul>
                        {Object.keys(user.address).map((key) => (
                            <li key={key}>
                                {
                                    key !== 'geo' ? (
                                        <><span>{key}:</span> {user.address[key]}</>
                                    ) : (
                                        <>
                                            GEO
                                            <ul>
                                                <li><span>lat:</span> {user.address[key].lat}</li>
                                                <li><span>lng:</span> {user.address[key].lng}</li>
                                            </ul>
                                        </>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <span>GEO:</span>
                    <ul>
                        <li>
                            <span>Street:</span> {user.address?.geo?.lat}
                        </li>
                        <li>
                            <span>Suite:</span> {user.address?.geo?.lng}
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Phone:</span> {user.phone}
                </li>
                <li>
                    <span>Website:</span> {user.website}
                </li>
                <li>
                    <span>Company:</span>
                    <ul>
                        {Object.keys(user.company).map((key) => (
                            <li key={key}>
                                <span>{key}:</span> {user.company[key]}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <div className="user_buttons">
                <Button
                    variant="contained"
                    className="user_buttons-btn"
                    disabled={!Boolean(prevUserId)}
                    onClick={()=> handleChangeUser(prevUserId)}
                >Prev User</Button>
                <Button
                    variant="contained"
                    className="user_buttons-btn"
                    disabled={!Boolean(nextUserId)}
                    onClick={()=> handleChangeUser(nextUserId)}
                >Next User</Button>
            </div>
            <UserDialog
                isOpen={isOpenEditUser}
                setIsOpne={setIsOpenEditUser}
                isEdit={true}
                user={user}
            />
        </div>
    )
}

export default UserDetails;
