import React from "react";
import './sidebar.scss'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import {generateMenus} from '../actions'

function Sidebar({sidebar, setSidebar, state}) {
    const dispatch = useDispatch()
    return (
        <div onClick={() => setSidebar(false)}  className={sidebar ? 'nav-menu active' : 'nav-menu'} >
            <div className="menu">
                <div className="header_sidebar">
                    <div className="header_right">
                        <div className="user">
                            <span>AW</span>
                        </div>
                    </div>
                    <div>
                        <div className="name_user">Hi,</div>
                        <div className="name_title">Atika Widjaya</div>
                    </div>
                </div>
            <div onClick={() => dispatch(generateMenus())} className="ul">
                 {
                     state.menus
                 }
            </div>
            </div>
        </div>
    )
}

export default Sidebar