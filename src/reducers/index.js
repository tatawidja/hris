import React from 'react'
import { Route} from "react-router-dom"
import { GEN_MENUS, GEN_ROUTES } from '../actions'
import { Link } from "react-router-dom";
import "./index.scss"
import { BsFillGridFill } from "react-icons/bs"
import { RiBillLine } from "react-icons/ri"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { BiUser, BiLayer } from "react-icons/bi"
import { FiClock, FiPieChart, FiWatch } from "react-icons/fi"

function generateRoutes(config, parentPath = '') {
  if (config.hasOwnProperty('routes')) {
      parentPath = config.path
    return <Route key={config.name} path={config.path}>{config.routes.map(item => generateRoutes(item, parentPath))}</Route>
  } else {
    return <Route key={config.name} path={parentPath + config.path} component={config.component}/>
  }
}


function generateMenuItem(menu) {
  const url = window.location.pathname
  return (
    <Link key={menu.name} to={menu?.path}>
      <li>
          <span style={url == menu?.path ? {
            color: "#fff",
            background: "linear-gradient(161deg, #868CFF , #4318FF)"
          } : {}} className='a'>
              {menu?.meta?.icon}
              <span>{menu.name}</span>
          </span>
      </li>
    </Link>
  )
}


export default function reducers (state = {
  base : [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: require('../page/dashboard/index').default,
      meta: {
        icon: <BsFillGridFill size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Company',
      path: '/company',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <HiOutlineOfficeBuilding size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Employee',
      path: '/employee',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <BiUser size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Time & Attendance',
      path: '/attendance',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <FiClock size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Payroll',
      path: '/payroll',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <FiPieChart size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Overtime',
      path: '/overtime',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <FiWatch size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Reimbursement',
      path: '/reimbursement',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <RiBillLine size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
    {
      name: 'Loan',
      path: '/loan',
      component: require('../page/notfound/index').default,
      meta: {
        icon: <BiLayer size={15}/>,
        roles: [1, 2, 3, 4, 5, 6]
      },
    },
  ],  
    menus: null,
    routes: null
}, action) {
  switch (action.type) {
    case GEN_MENUS:
      return {
        ...state,
        menus: state.base.map(item => generateMenuItem(item))
      }
      case GEN_ROUTES:
        return {
          ...state,
          routes: state.base.map(item => generateRoutes(item))
        }
        default: return state
    }
}
