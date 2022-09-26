import React, {useEffect, useRef, useState} from 'react'
import {Button, Col, Icon, Row, Tooltip} from "antd";
import "./index.scss"
import IconNoutFound from "../../assets/not_found"

import { useHistory } from "react-router-dom"

export default function PageNotFound (props) {
    const history = useHistory()
    return (
        <>
            <div className='contai'>
                <IconNoutFound />
                <span className='title'>Oops... Page Not Found</span>
                <Button onClick={() => history.goBack() } className='button'>Back to Dashboard</Button>
            </div>
        </>
    )
}
