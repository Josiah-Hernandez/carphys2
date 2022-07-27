import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './veiws/Main';
import Dashboard from './veiws/Dashboard';
import Details from './veiws/Details';
import Create from './veiws/Create';
import Edit from './veiws/Edit';
import Profile from './veiws/Profile';

function App() {
  return (
    <div>
      <h1>CarPhys</h1>
      <Routes>

      <Route path="/main" element={<Main />} />
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
