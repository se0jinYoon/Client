import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/main/HomePage/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
