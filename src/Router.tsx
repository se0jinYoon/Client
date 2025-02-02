import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PostReservation from './pages/postReservation/PostReservationPage';
import StayDetailCombine from './pages/stayDetail/StayDetailCombine';
import WishList from './pages/wishList/WishList';
import WishListDetail from './pages/wishListDetail/WishListDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishList" element={<WishList />} />
        {/* <Route path="/reservation/post" element={<PostReservation />} /> */}
        <Route path="/postReservation/:roomId" element={<PostReservation />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/wishListDetail" element={<WishListDetail />} />
        <Route path="/stayDetail/:roomId" element={<StayDetailCombine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
