import './App.css';
import {Routes, Route, Link} from "react-router-dom"

import Dashboard from './veiws/Dashboard';
import Details from './veiws/Details';
import Create from './veiws/Create';
import Edit from './veiws/Edit';
import Profile from './veiws/Profile';
import Register from './veiws/Login/Register';
import Login from './veiws/Login/Login';


function App() {
  return (
    <div>
      <h1>CarPhys</h1>
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>|
      
      
      
      <Routes>
        <Route path="/register" element={ <Register/>} /> 
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles/new" element={<Create />} />
        <Route path="/vehicles/edit" element={<Edit />} />
        <Route path="/vehicles/profile" element={<Profile />} />
        <Route path="/vehicles/:id" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
