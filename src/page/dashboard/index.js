import React, {useEffect, useRef, useState} from 'react'
import {Col, Icon, Row, Tooltip} from "antd";
import { FaUserFriends } from "react-icons/fa"
import { BsFillBarChartFill } from "react-icons/bs"
import { MdOutlineShowChart } from "react-icons/md"
import { useHistory } from "react-router-dom"
import { Doughnut, Bar } from "../../components/Chart"
import { FiChevronRight } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { useWindowSize } from "../../utils"
import './index.scss'

export default function PageDashboard (props) {
    const { width } = useWindowSize();
    const history = useHistory()
    return (
        <div>
            {
                width > 500 ?
            <div className='col_1'>
                <NavLink to={"/404"} className='grid_1'>
                    <div className='content_left_1'>
                        <span className='content_text'>Daily Attendance</span>
                        <span className='content_text_label'>187</span>
                    </div>
                    <div className='content_right_1'>
                        <div className="hour">
                            <div className="minute">
                                <div className="second"></div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"/404"} className='grid_2'>
                    <div className='content_left_2'>
                        <div className='grid_left_2'>
                            <FaUserFriends size={35} color="#fff" />
                        </div>
                    </div>
                    <div className='content_right_2'>
                        <span className='content_text'>Daily Attendance</span>
                        <span className='content_text_label'>187</span>
                    </div>
                </NavLink>
                <NavLink to={"/404"} className='grid_3'>
                    <div className='content_left_3'>
                        <div className='grid_left_3'>
                            <BsFillBarChartFill size={35} color="#4318FF" />
                        </div>
                    </div>
                    <div className='content_right_3'>
                        <span className='content_text'>Allowance Cost</span>
                        <span className='content_text_label'>Rp 60,122,837</span>
                    </div>
                </NavLink>
                <NavLink to={"/404"} className='grid_4'>
                    <div className='content_left_4'>
                        <span className='content_text'>Payroll Cost</span>
                        <span className='content_text_label'>Rp 140,508,000</span>
                    </div>
                    <div className='content_right_4'>
                        <MdOutlineShowChart size={50} color="#fff" />
                    </div>
                </NavLink>
            </div>
            : <div>
                
            </div>
            }
            {
                width > 500 &&
            <div className='col_2'>
                <div className='grid_1'>
                    <span className='label'>Payroll Cost</span>
                    <div className='content'>
                        <div className='col_1'>
                        </div>
                        <div className='col_2'></div>
                    </div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
                <div className='grid_2'>
                    <span className='label'>Attendance Summary</span>
                    <div className='chart'>
                        <Doughnut/>
                    </div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
            }
            {
                width > 500 &&
            <div className='col_3'>
                <div className='grid_1'>
                    <span className='label'>Announcement</span>
                    <div className='col_1'></div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
                <div className='grid_2'>
                    <span className='label'>Contract Expired</span>
                    <div className='col_1'></div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
                <div className='grid_3'>
                    <span className='label'>Employment Status</span>
                    <div className='col_1'></div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
            }
        </div>
    )
}
