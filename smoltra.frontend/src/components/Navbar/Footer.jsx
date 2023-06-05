import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../App.css";
import "../../fonts/Lack-Regular.otf"

const CustomFooter = () => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{marginTop:'auto'}}>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2);' }}>
                © 2023 Copyright: LepJak
            </div>
        </footer>
    )
}
export default CustomFooter;