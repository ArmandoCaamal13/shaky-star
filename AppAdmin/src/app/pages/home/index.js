import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHardHat } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.scss'
const Home = () => {
    return (
        <>
            <div className={style.home}>
                <FontAwesomeIcon icon={faHardHat} style={{ fontSize: "100px" }} />
                <br />
                <br />
                HOME EN CONSTRUCCION
            </div>
        </>
    )
}
export default Home