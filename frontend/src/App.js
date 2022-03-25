import { BrowserRouter as  Router, Routes , Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Post from "./components/Post/Post";
import {ADMIN_URI}  from './constants/const';

function App() {
  return (

    <Router>
      <Dashboard />

      <Routes>        
        
        <Route path={`/${ADMIN_URI}/post`} element={<Post />}></Route>
        

      </Routes>
    </Router>
    
  )
}

export default App;
