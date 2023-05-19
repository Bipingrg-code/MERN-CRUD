
import Navbar from './components/Navbar';
import Bipincode from './components/Bipincode';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bipincode />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUser />} />
      </Routes>

    </div>
  );
}

export default App;
