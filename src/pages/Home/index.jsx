import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'


const Home = () => {

    return (
        <div className='home'>
            <div className="container home_container">
                <h1 className='home__title'>Hello! Welcome to the application of the company "Grain Capital"!</h1>
                <p className='home__description'>
                    This is CRUD (Create, Read, Update, Delete)
                    application for managing the list of clients of our company. The application allows you to add, view,
                    update and delete information about customers, including their names, contact information, and
                    order information and other data. We are very pleased that you are using our application and
                    help us keep our customer database up-to-date and up-to-date.
                </p>
                    <Link
                        to='/users'
                        className='home__link'
                    >
                        Please follow the link to the user page.
                    </Link>
            </div>
        </div>
    )
}

export default Home;