import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/auth/register";
import Dashboard from "./components/dashboard/Dashboard";
import Post from "./components/post/Post";
import Category from "./components/category/Category";
import { ADMIN_URI } from "./store/constants/const";
import PostAdd from "./components/post/PostAdd";
import About from "./components/about/About";
// import DashboardTemplate from "./components/pages/DashboardTemplate";
import Contact from "./components/contact/Contact";
import Login from "./components/auth/Login";
import DashboardHOC from "./components/pages/DashboardHOC";
import Home from "./components/Home/Home";
import PostEdit from "./components/post/PostEdit";
import CategoryEdit from "./components/category/CategoryEdit";
import DashboardTemplate from "./components/dashboardTemplate/DashboardTemplate";




function App() {
  return (

    <Router>
      {/* <Dashboard /> */}
      <Routes>

        <Route exact path={`/${ADMIN_URI}/dashboardTemplate`} element={<DashboardTemplate /> } />
        

        <Route path={`/${ADMIN_URI}/login`} element={<Login />} />
        <Route path={`/${ADMIN_URI}/register`} element={<Register />} />
        

        {/* <Route path={`/${ADMIN_URI}/post`} element={<Post />}  /> */}
        
        
        
        {/* <Route path={`/${ADMIN_URI}/categoryEdit`}  element={<CategoryEdit />} /> */}

          
        <Route element ={< DashboardTemplate />}>
          <Route path={`/${ADMIN_URI}/post`} element={<Post />}  />
          <Route path={`/${ADMIN_URI}/postAdd`} element={<PostAdd />} />
          <Route path={`/${ADMIN_URI}/postEdit`} element={<PostEdit />}  />

          <Route path={`/${ADMIN_URI}/category`}  element={<Category />} />

        </Route>

      </Routes>
    </Router>

  )
}

export default App;
