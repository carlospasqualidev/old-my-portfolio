import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// COMPONENTS
import { SystemBar } from './components/SystemBar';

// SCREENS
import { Workspace } from './screens/Workspace';

// USER

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <SystemBar>
            <Outlet />
          </SystemBar>
        }
      >
        <Route path="/" element={<Outlet />}>
          <Route index element={<Workspace />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
