import React, {useEffect, useRef, useState} from 'react'
import { Select, Row, Button, Col } from 'antd';
import { FaUserFriends } from "react-icons/fa"
import { BsFillBarChartFill } from "react-icons/bs"
import { MdOutlineShowChart } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { useWindowSize } from "../../utils"
import { BarChart } from '../../components/BarChart';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { AiFillCaretUp } from "react-icons/ai"
import Legend from "../../components/Legend"
import PieChart from "../../components/PieChart"
import ProgressBar from "@ramonak/react-progress-bar";

import './index.scss'

const { Option } = Select;


export default function PageDashboard (props) {
    const responsif = useWindowSize();
    return (
        <div>
            {
              responsif ?
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
            : 
            <>        
                <div className='col_1_mobile'>
                    <NavLink to={"/404"} className='grid_1'>
                        <div className='content_right_1'>
                            <div className="hour">
                                <div className="minute">
                                    <div className="second"></div>
                                </div>
                            </div>
                        </div>
                        <div className='content_left_1'>
                            <span className='content_text'>Daily Attendance</span>
                            <span className='content_text_label'>187</span>
                        </div>
                    </NavLink>
                    <NavLink to={"/404"} className='grid_2'>
                        <div className='content_left_2'>
                            <div className='grid_left_2'>
                                <FaUserFriends size={20} color="#fff" />
                            </div>
                        </div>
                        <div className='content_right_2'>
                            <span className='content_text'>Daily Attendance</span>
                            <span className='content_text_label'>187</span>
                        </div>
                    </NavLink>
                </div>
                <div className='col_2_mobile'>
                    <NavLink to={"/404"} className='grid_1'>
                        <div className='content_left_3'>
                            <div className='grid_left_3'>
                                <BsFillBarChartFill size={25} color="#4318FF" />
                            </div>
                        </div>
                        <div className='content_left_1'>
                            <span className='content_text'>Allowance Cost</span>
                            <span className='content_text_label'>Rp 60,122,837</span>
                        </div>
                    </NavLink>
                    <NavLink to={"/404"} className='grid_2'>
                        <div className='content_left_2'>
                            <div className='grid_left_2'>
                                <MdOutlineShowChart size={30} color="#fff" />
                            </div>
                        </div>
                        <div className='content_right_2'>
                            <span className='content_text'>Payroll Cost</span>
                            <span className='content_text_label'>Rp 140,508,000</span>
                        </div>
                    </NavLink>
                </div>
            </>
            }
            {
                responsif ?
            <div className='col_2'>
                <div className='grid_1'>
                    <Row>
                        <div className='content_1'>
                            <div className='label'>
                                <span>Payroll Cost</span>
                                <Row>
                                    <Select
                                      className="select"
                                      defaultValue="lucy"
                                      size='small'
                                      style={{
                                        width: 120,
                                        borderRadius: 10,
                                      }}
                                    //   onChange={handleChange}
                                    >
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="disabled" disabled>
                                        Disabled
                                      </Option>
                                      <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <Button style={{ margin: '0 5px'}} icon={<FiChevronLeft size={20} />} size="small" />
                                    <Button icon={<FiChevronRight size={20} />} size="small" />
                                </Row>
                            </div>
                            <BarChart height={215} />
                        </div>
                        <div className='content_2'>
                            <span className='label'>Juni 2022</span>
                            <Row className='content_legend'>
                                <span>Total Employee</span>
                                <span className='value'>263</span>
                            </Row>
                            <div style={{ flex: 1 }}>
                            {
                                [
                                    {
                                        label: 'Take Home Pay',
                                        value: 'Rp 103,508,000',
                                        color: '#D3DEF8'
                                    },
                                    {
                                        label: 'BPJS TK',
                                        value: 'Rp8,500,000',
                                        color: '#FEBD38'
                                    },
                                    {
                                        label: 'BPJS KS',
                                        value: 'Rp8,500,000',
                                        color: '#4318FF'
                                    },
                                    {
                                        label: 'Tax',
                                        value: 'Rp 20,000,000',
                                        color: '#6ABBFF'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value}</span>
                                    </Row>
                                ))
                            }
                            </div>
                            <div className='previous'>
                                <AiFillCaretUp color='red' size={15}/>
                                <span>20% form previous month</span>
                            </div>
                        </div>
                    </Row>
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
                        <div className='chart_1'>
                            <PieChart/>
                        </div>
                        <div className='chart_2'>
                            <span className='label'>15/05/2022 - 15/05/2022</span>
                            {
                                [
                                    {
                                        label: 'Present',
                                        value: '143',
                                        percent: '52.0%',
                                        color: '#4318FF'
                                    },
                                    {
                                        label: 'Leave',
                                        value: '68',
                                        percent: '34.0%',
                                        color: '#6ABBFF'
                                    },
                                    {
                                        label: 'Absent',
                                        value: '40',
                                        percent: '10.0%',
                                        color: '#FFD572'
                                    },
                                    {
                                        label: 'Sick',
                                        value: '12',
                                        percent: '4.0%',
                                        color: '#FF6767'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value}</span>
                                        <span className='value'>{items.percent}</span>
                                    </Row>
                                ))
                            }
                        </div>
                    </div>
                    <NavLink to={"/404"} className='selanjutnya'>
                        <div>Lihat Selengkapnya</div>
                        <div>
                            <FiChevronRight size={25}/>
                        </div>
                    </NavLink>
                </div>
            </div>
            : <div  className='col_payrol_mobile'>
                <div className='grid_1'>
                    <div className='content_1'>
                        <div className='label'>
                            <span>Payroll Cost</span>
                            <Row>
                                <Select
                                  className="select"
                                  defaultValue="lucy"
                                  size='small'
                                  style={{
                                    width: 120,
                                    borderRadius: 10,
                                  }}
                                //   onChange={handleChange}
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                  <Option value="disabled" disabled>
                                    Disabled
                                  </Option>
                                  <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                <Button style={{ margin: '0 5px'}} icon={<FiChevronLeft size={20} />} size="small" />
                                <Button icon={<FiChevronRight size={20} />} size="small" />
                            </Row>
                        </div>
                        <BarChart width={window.innerWidth - 52} />
                    </div>
                    <div className='content_2'>
                            <span className='label'>Juni 2022</span>
                            <Row className='content_legend'>
                                <span>Total Employee</span>
                                <span className='value'>263</span>
                            </Row>
                            <div style={{ flex: 1 }}>
                            {
                                [
                                    {
                                        label: 'Take Home Pay',
                                        value: 'Rp 103,508,000',
                                        color: '#D3DEF8'
                                    },
                                    {
                                        label: 'BPJS TK',
                                        value: 'Rp8,500,000',
                                        color: '#FEBD38'
                                    },
                                    {
                                        label: 'BPJS KS',
                                        value: 'Rp8,500,000',
                                        color: '#4318FF'
                                    },
                                    {
                                        label: 'Tax',
                                        value: 'Rp 20,000,000',
                                        color: '#6ABBFF'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value}</span>
                                    </Row>
                                ))
                            }
                            </div>
                            <div className='previous'>
                                <AiFillCaretUp color='red' size={15}/>
                                <span>20% form previous month</span>
                            </div>
                        </div>
                </div>
            </div>
            }
            {
                responsif &&
                <div className='col_3'>
                    <div className='grid_1'>
                        <span className='label'>Announcement</span>
                        <div className='col_1'>
                            <div style={{ width: '100%'}}>
                            {
                                [
                                    {
                                        label: 'Candra Nugroho',
                                        value: 'Annual Meeting for HRGA Team'
                                    },
                                    {
                                        label: 'Dian Dwi Puspita',
                                        value: 'Sosialisasi BPJS Document'
                                    },
                                    {
                                        label: 'Eko Darmawan',
                                        value: 'Text Document New Empoyee'
                                    },
                                ].map((items, index) => (
                                    <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={index}>
                                        <div>
                                            <div className='label_value'>{items.label}</div>
                                            <div className='value_value'>{items.value}</div>
                                        </div>
                                        <div style={{ 
                                            marginRight: 10, 
                                            height: 20, 
                                            width: 50, 
                                            backgroundColor: '#A3AED0', 
                                            color: '#fff',
                                            fontWeight: '700',
                                            borderRadius: 3,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>View</div>
                                    </Row>
                                ))
                            }
                            </div>
                        </div>
                        <NavLink to={"/404"} className='selanjutnya'>
                            <div>Lihat Selengkapnya</div>
                            <div>
                                <FiChevronRight size={25}/>
                            </div>
                        </NavLink>
                    </div>
                    <div className='grid_2'>
                        <span className='label'>Contract Expired</span>
                        <div className='col_1'>
                            <div style={{ width: '100%'}}>
                            {
                                [
                                    {
                                        label: 'Rizki Putra Kusnendi',
                                        value: 'Staff Marketing'
                                    },
                                    {
                                        label: 'Lia Wardani',
                                        value: 'Staff Admin'
                                    },
                                    {
                                        label: 'Nanda Ayu Pertiwi',
                                        value: 'Staff Finance'
                                    },
                                ].map((items, index) => (
                                    <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={index}>
                                        <div>
                                            <div className='label_value'>{items.label}</div>
                                            <div className='value_value'>{items.value}</div>
                                        </div>
                                        <div style={{ 
                                        fontWeight: '700',
                                        marginRight: 10
                                        }}>25 Jun 2022</div>
                                    </Row>
                                ))
                            }
                            </div>
                        </div>
                        <NavLink to={"/404"} className='selanjutnya'>
                            <div>Lihat Selengkapnya</div>
                            <div>
                                <FiChevronRight size={25}/>
                            </div>
                        </NavLink>
                    </div>
                    <div className='grid_3'>
                        <span className='label'>Employment Status</span>
                        <div style={{ flex: 1, padding: '0 10px' }}>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#EC75FF' width='100%' completed={60} />
                            <div style={{ height: 10}}/>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#6ABBFF' width='100%' completed={80} />
                            <div style={{ height: 10}}/>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#FFB547' width='100%' completed={40} />
                            <div style={{ height: 15}}/>
                            {
                                [
                                    {
                                        label: 'Permanent',
                                        value: '60%',
                                        value_1: '76',
                                        color: '#EC75FF'
                                    },
                                    {
                                        label: 'Contract',
                                        value: '80%',
                                        value_1: '134',
                                        color: '#6ABBFF'
                                    },
                                    {
                                        label: 'Probation',
                                        value: '40%',
                                        value_1: '53',
                                        color: '#FFB547'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value_1}</span>
                                        <span className='value'>{items.value}</span>
                                    </Row>
                                ))
                            }
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
                !responsif && 
                <div className='announcement_mobile'>
                    <div className='grid_1'>
                        <span className='label'>Announcement</span>
                        <div className='col_1'>
                            <div style={{ width: '100%'}}>
                            {
                                [
                                    {
                                        label: 'Candra Nugroho',
                                        value: 'Annual Meeting for HRGA Team'
                                    },
                                    {
                                        label: 'Dian Dwi Puspita',
                                        value: 'Sosialisasi BPJS Document'
                                    },
                                    {
                                        label: 'Eko Darmawan',
                                        value: 'Text Document New Empoyee'
                                    },
                                ].map((items, index) => (
                                    <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={index}>
                                        <div>
                                            <div className='label_value'>{items.label}</div>
                                            <div className='value_value'>{items.value}</div>
                                        </div>
                                        <div style={{ 
                                            marginRight: 10, 
                                            height: 20, 
                                            width: 50, 
                                            backgroundColor: '#A3AED0', 
                                            color: '#fff',
                                            fontWeight: '700',
                                            borderRadius: 3,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>View</div>
                                    </Row>
                                ))
                            }
                            </div>
                        </div>
                        <NavLink to={"/404"} className='selanjutnya'>
                            <div>Lihat Selengkapnya</div>
                            <div>
                                <FiChevronRight size={25}/>
                            </div>
                        </NavLink>
                    </div>

                    {/* <div  className='col_payrol_mobile'> */}
                    <div className='grid_2'>
                        <div className='content_1'>
                            <div className='label'>
                                <span>Attendance Summary</span>
                            </div>
                            <div className='chart'>
                                <PieChart/>
                            </div>
                        </div>
                        <div className='chart_2'>
                            <span className='label'>15/05/2022 - 15/05/2022</span>
                            {
                                [
                                    {
                                        label: 'Present',
                                        value: '143',
                                        percent: '52.0%',
                                        color: '#4318FF'
                                    },
                                    {
                                        label: 'Leave',
                                        value: '68',
                                        percent: '34.0%',
                                        color: '#6ABBFF'
                                    },
                                    {
                                        label: 'Absent',
                                        value: '40',
                                        percent: '10.0%',
                                        color: '#FFD572'
                                    },
                                    {
                                        label: 'Sick',
                                        value: '12',
                                        percent: '4.0%',
                                        color: '#FF6767'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value}</span>
                                        <span className='value'>{items.percent}</span>
                                    </Row>
                                ))
                            }
                        </div>
                        <NavLink to={"/404"} className='selanjutnya'>
                            <div>Lihat Selengkapnya</div>
                            <div>
                                <FiChevronRight size={25}/>
                            </div>
                        </NavLink>
                    </div>
                    {/* </div> */}

                    <div className='grid_3'>
                        <span className='label'>Contract Expired</span>
                        <div className='col_1'>
                            <div style={{ width: '100%'}}>
                            {
                                [
                                    {
                                        label: 'Rizki Putra Kusnendi',
                                        value: 'Staff Marketing'
                                    },
                                    {
                                        label: 'Lia Wardani',
                                        value: 'Staff Admin'
                                    },
                                    {
                                        label: 'Nanda Ayu Pertiwi',
                                        value: 'Staff Finance'
                                    },
                                ].map((items, index) => (
                                    <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={index}>
                                        <div>
                                            <div className='label_value'>{items.label}</div>
                                            <div className='value_value'>{items.value}</div>
                                        </div>
                                        <div style={{ 
                                        fontWeight: '700',
                                        marginRight: 10
                                        }}>25 Jun 2022</div>
                                    </Row>
                                ))
                            }
                            </div>
                        </div>
                        <NavLink to={"/404"} className='selanjutnya'>
                            <div>Lihat Selengkapnya</div>
                            <div>
                                <FiChevronRight size={25}/>
                            </div>
                        </NavLink>
                    </div>

                    <div className='grid_4'>
                        <span className='label'>Employment Status</span>
                        <div style={{ flex: 1, padding: '0 10px' }}>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#EC75FF' width='100%' completed={60} />
                            <div style={{ height: 10}}/>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#6ABBFF' width='100%' completed={80} />
                            <div style={{ height: 10}}/>
                            <ProgressBar height="15px" labelSize="9px" baseBgColor="#F4F7FE" bgColor='#FFB547' width='100%' completed={40} />
                            <div style={{ height: 15}}/>
                            {
                                [
                                    {
                                        label: 'Permanent',
                                        value: '60%',
                                        value_1: '76',
                                        color: '#EC75FF'
                                    },
                                    {
                                        label: 'Contract',
                                        value: '80%',
                                        value_1: '134',
                                        color: '#6ABBFF'
                                    },
                                    {
                                        label: 'Probation',
                                        value: '40%',
                                        value_1: '53',
                                        color: '#FFB547'
                                    },
                                ].map((items, index) => (
                                    <Row key={index} className='content_legend'>
                                        <Row className='isi_content'>
                                            <Legend width={10} height={10} backgroundColor={items.color}/>
                                            <span>{items.label}</span>
                                        </Row>
                                        <span className='value'>{items.value_1}</span>
                                        <span className='value'>{items.value}</span>
                                    </Row>
                                ))
                            }
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
        </div>
    )
}
