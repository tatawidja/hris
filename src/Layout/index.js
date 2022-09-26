import React, {useEffect, useState} from "react";
import {generateMenus} from '../actions'
import {Avatar, Badge, Breadcrumb, Icon, Layout, Menu, Popover, Col, Button, Input} from 'antd';
import {withRouter, useHistory} from "react-router-dom";
import {createStore} from 'redux'
import { useDispatch, useSelector } from "react-redux"
import reducers from '../reducers'
import './index.scss'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { Logo } from "../assets/logo"
import { useWindowSize } from "../utils"
import Sidebar from "./sidebar";

const {Header, Sider, Content} = Layout;
function PageLayout(props) {
    const history = useHistory()
    const state = useSelector(state => state?.reducers)
    const routes = state.base;
    const dispatch = useDispatch()
    const responsif = useWindowSize();

    const [sidebar, setSidebar] = useState(false)
    let currentPaths = props.location.pathname.split('/').slice(1);
    currentPaths = currentPaths.map(i => i.replace(/^\S/, s => s.toUpperCase()));
    // useEffect(() => {
    //     const users = JSON.parse(localStorage.getItem("users"))
    //     props.location.pathname === '/' ? props.history.push('/dashboard') : undefined
    //     if (!users) {
    //         props.history.push('/')
    //     }
    // }, [props.history, props.location]);

    function handleLink(item) {
        const path = '/' + item.keyPath.reverse().join('/').toLowerCase();
        if (props.location.pathname === path) {
            return
        }
        props.history.push(path.replace(/\s/g, ''));
    }


    console.log("sukses", window.location.pathname)

    const breadcrumbs = [];

    function genBreadcrumbItem(routes) {
        routes.forEach(route => {
            if (route.hasOwnProperty('routes')) {
                currentPaths.includes(route.name) && breadcrumbs.push(route);
                genBreadcrumbItem(route.routes)
            } else {
                currentPaths.includes(route.name) && breadcrumbs.push(route)
            }
        })
    }

    genBreadcrumbItem(routes);

    return (
        <Layout className={'container'}>
            {
                !responsif &&
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} state={state}/>
            }
            {
                responsif ? (
                    <Sider className="sidebar" theme="light">
                        <div className="logo_content">
                            <div className="logo">
                                 <Logo />
                                 <div className="logo_text">
                                     <div className="logo_name1">HRIS</div>
                                     <div className="logo_name2">DASHBOARD</div>
                                 </div>
                            </div>
                        </div>
                        <div onClick={() => dispatch(generateMenus())} className="ul">
                             {
                                 state.menus
                             }
                        </div>
                        <div className="upgrade">
                             <div className="grid_upgrade">
                                 <div className="bulat"></div>
                                 <div className="bulat_1"></div>
                                 <div className="bulat_2"></div>
                                 <div className="text_up">
                                     <span>Upgrade to <span className="pro">PRO</span> for more features</span>
                                     <Button className="button_up">Upgrade</Button>
                                 </div>
                             </div>
                        </div>
                    </Sider>
                    )
                    : <div className="header_phone">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaBars size={20} onClick={() => setSidebar(true)} />
                            <span style={{ marginLeft: 10, fontWeight: 'bold', color: '#4318FF' }}>HRIS <span style={{ fontWeight: '700'}}>DASHBOARD</span></span>
                        </div>
                        <div>
                            <FiSearch size={20}/>
                        </div>
                    </div>
            }
            <Layout style={{ background: '#F4F7FE' }}>
                {
                    responsif &&
                    <div className="header">
                        <div>
                            <div className="name_user">Hi Atika,</div>
                            <div className="name_title">Welcome to HRIS Dashboard</div>
                        </div>
                            <div className="header_right">
                                <Input className="input" placeholder="Search" prefix={<FiSearch size={20}/>}/>
                                <div className="user">
                                    <span>AW</span>
                                </div>
                                <IoIosArrowDown onClick={() => history.push('/company')} style={{ cursor: 'pointer' }} size={20}/>
                            </div>
                    
                    </div>
                }
                <Content className="content"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {   !responsif && window.location.pathname == "/dashboard" &&
                        <div className="header">
                            <div>
                                <div className="name_user">Hi Atika,</div>
                                <div className="name_title">Welcome to HRIS Dashboard</div>
                            </div>
                        </div>
                    }
                    {props.children}
                </Content>
            </Layout>
        </Layout>);
}

export default withRouter(PageLayout);
