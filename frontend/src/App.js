import { BrowserRouter as  Router, Routes , Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/register";
import Dashboard from "./components/dashboard/Dashboard";
import Post from "./components/Post/Post";
import {ADMIN_URI}  from './constants/const';

function App() {
  return (

    <Router>
      {/* <Dashboard /> */}

      <Routes>        
          <Route path={`/${ADMIN_URI}/login`} element={<Dashboard />}  />
          <Route path={`/${ADMIN_URI}/register`} element={<Register />} /> 
          <Route path={`/${ADMIN_URI}/dashboard`} element={<Dashboard />}  />



        {/* <Route path='*' element={ console.log('Not found') }></Route> */}

      </Routes>
    </Router>
    
  )
}

export default App;
