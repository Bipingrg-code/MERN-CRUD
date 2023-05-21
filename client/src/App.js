
import Navbar from './components/Navbar';
import Bipincode from './components/Bipincode';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bipincode />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>

    </div>
  );
}

export default App;
