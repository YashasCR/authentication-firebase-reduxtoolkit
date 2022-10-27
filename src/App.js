import { Switch, Route } from 'react-router-dom';
import MainNavigation from './components/Layout/MainNavigation'
import AuthForm from './components/Auth/AuthForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router'
function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

  return (
    <>
    <MainNavigation />
      <Switch> 
      
        {!isLoggedIn && (
          <Route path='/auth'>
            <AuthForm />
          </Route>
        )}
        <Route path='*'>
          <Redirect to='/auth' />
        </Route>
      </Switch>
      </>
  );
}

export default App;
