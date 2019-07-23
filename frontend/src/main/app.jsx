import React from 'react'
import '../components/template/dependecies'
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/footer/footer';

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <h1>Sample content</h1>
        </div>
        <Footer />
    </div>
)