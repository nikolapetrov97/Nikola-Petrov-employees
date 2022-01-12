// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */
import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import AppWrapper from './AppWrapper'
import Routes from './utils/routes'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <Layout>
            <Switch>
              <Route path={Routes.HOME} exact component={Home} />
            </Switch>
          </Layout>
        </div>
      </AppWrapper>
    </Router>
  )
}

export default App
