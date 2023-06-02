import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailMovie from './pages/detailmovie/DetailMovie';
import Layout from './components/Layout/Layout';
import UpComing from './pages/UpComing/UpComing';
import Trending from './pages/Trending/Trending';
import Popular from './pages/popular/Popular';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Layout>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/detail/:id" element={<DetailMovie />} />
                <Route path='/upcoming' element={<UpComing />}/>
                <Route path='trending' element={<Trending/>}/>
                <Route path='/popular' element={<Popular />}/>
            </Routes>
        </Layout>
    </Router>

);


