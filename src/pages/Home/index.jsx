import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'


const Home = () => {

    return (
        <div className='home'>
            <div className="container home_container">
                <h1 className='home__title'>Привіт! Вітаємо у застосунку компанії 'Зернова столиця'!</h1>
                <p className='home__description'>
                     Це CRUD (Create, Read, Update, Delete)
                    додаток для управління списком клієнтів нашої компанії. Додаток дозволяє додавати, переглядати,
                    оновлювати та видаляти інформацію про клієнтів, зокрема їх імена, контактну інформацію, а також
                    інформацію про замовлення та інші дані. Нам дуже приємно, що ви використовуєте наш застосунок та
                    допомагаєте нам зберігати нашу базу даних клієнтів оновленою та актуальною.
                </p>
                    <Link
                        to='/users'
                        className='home__link'
                    >
                        Будь ласка, перейдіть за посиланням на сторінку з користувачами.
                    </Link>
            </div>
        </div>
    )
}

export default Home;