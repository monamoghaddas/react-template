import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={
                    <PrivateRoute>
                        <UserInfoPage />
                    </PrivateRoute>} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}