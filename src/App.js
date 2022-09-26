import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Layout from './Layout';
import './App.scss';
import { PageNotFound } from "./page"
import { generateRoutes, generateMenus } from "./actions"


function App() {
  const dispatch = useDispatch()

  const state = useSelector(state => state?.reducers)

  const routes = state?.routes
  let path = []
  if (routes) {   
    for(const item of routes){
      if (item.props.children) {
        for(const childrenPath of item.props.children){
          path.push(childrenPath.props.path)
        }
      }
      else {
        path.push(item.props.path)
      }
    }
  }

  React.useEffect(() => {
    dispatch(generateRoutes())
    dispatch(generateMenus())
  },[])

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/hris-app">
            <Redirect to="/dashboard" />
          </Route>
        <Layout>
        {
          path?.map((path, index ) => (
            <Route key={index} path={path} exact component={() => (
              routes
            )}/>
          ))
        }
        <Route path='/404' component={PageNotFound} />
        </Layout>
        <Redirect from='*' to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
