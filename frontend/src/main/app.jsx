import React from 'react'
import '../common/template/dependecies'
import Header from '../common/components/header/header';
import Sidebar from '../common/components/sidebar/sidebar';
import Footer from '../common/components/footer/footer';

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