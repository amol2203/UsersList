import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Routes>
        <Route path='/' element={<UserList searchQuery={searchQuery} />} />
        <Route path='/details/:id' element={<UserDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
