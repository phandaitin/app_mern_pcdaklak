import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ADMIN_URI }          from "./store/constants/const";

// admin 
import Register               from "./components/admin/auth/register";
import Post                   from "./components/admin/post/Post";
import Category               from "./components/admin/category/Category";
import PostAdd                from "./components/admin/post/PostAdd";
import Login                  from "./components/admin/auth/Login";

import PostEdit               from "./components/admin/post/PostEdit";
import DashboardHOC           from "./components/admin/dashboardHOC/DashboardHOC";
import About                  from "./components/admin/about/About";
import Contact                from "./components/admin/contact/Contact";

//home
import HomeHOC           from "./components/home/HomeHOC";




function App() {
  return (

    <Router>
      {/* <Dashboard /> */}
      <Routes>

        {/* BACKEND ROUTES */}
        <Route path={`/${ADMIN_URI}/login`} element={<Login />} />
        <Route path={`/${ADMIN_URI}/register`} element={<Register />} />
        <Route exact path={`/${ADMIN_URI}/dashboardHOC`} element={<DashboardHOC /> } />

        <Route   element ={< DashboardHOC />}>
          <Route path={`/${ADMIN_URI}/post`} element={<Post />}  />
          <Route path={`/${ADMIN_URI}/postAdd`} element={<PostAdd />} />
          <Route path={`/${ADMIN_URI}/postEdit`} element={<PostEdit />}  />

          <Route path={`/${ADMIN_URI}/category`}  element={<Category />} />
        </Route>


        {/* FRONTEND ROUTES */}
        <Route path={'/home'} element={<HomeHOC />}  />        
        <Route path={'/'} element={<HomeHOC />}  />        
        
        <Route element={<HomeHOC />}  >        
          <Route path={`/about`} element={<About />} />
          <Route path={`/contact`} element={<Contact   />} />          
        </Route>
        

      </Routes>
    </Router>

  )
}

export default App;
