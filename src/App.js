import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router';
import Home from './components/Home';
import Page from './components/Page';
import NoMatch from './components/NoMatch';
import './App.css';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/page',
    component: Page,
  },
  {
    path: '/headline',
    // component: Todos,
    // loadData: () => loadData('todos')
  },
  {
    path: '/source/{source}',
    // component: Todos,
    // loadData: () => loadData('todos')
  },
  {
    component: NoMatch
  }
];

const AppRoutes = () => (
  <Switch>
    {renderRoutes(Routes)}
  </Switch>
);

// const AppRoutes = ({ store }) => (
//   <Switch>
//     <Route path="/" component={Home} exact />
//     <Route path="/page" component={Page} exact />
//     {/* <Route path="/page" render={() => {
//       if (store) {
//         // Bad & ugly just to change the store server side through actions before rendering
//         store.dispatch(addTodo('This should come renderer from server (on /Page direct hit)'));  
//       }
      
//       return <Page />; 
//     }} exact /> */}
//     <Route render={NoMatch} />
//   </Switch>
// )

function App({ store, location }) {
  return (
    <Provider store={store}>
      {
        location
        ? (
          <StaticRouter location={location} context={{}}>
            <AppRoutes store={store}/>
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>  
        )
      }
    </Provider>
  );
}

export default App;
