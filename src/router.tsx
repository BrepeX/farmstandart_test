import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { New } from './pages/New';

const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/new'} element={<New />} />
    </Routes>
  );
};

export default Router;
