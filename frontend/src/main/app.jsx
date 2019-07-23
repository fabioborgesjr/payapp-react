import React from 'react'
import '../components/template/dependecies'
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/footer/footer';
import Routes from './routes';

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer />
    </div>
)