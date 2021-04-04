import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (  
      <React.Fragment>
        <div className="footer-bg">
            <div className="wrap">
                <div className="footer-grid">
                    <h3>About Us</h3>
                        <ul>
                            <li><Link to="/">Online Shopping</Link></li>
                            <li><Link to="/">Finance Service</Link></li>
                            <li><Link to="/">Marketing</Link></li>
                            <li><Link to="/">Economic News</Link></li>
                            <li><Link to="/">Business Help</Link></li>
                        </ul>
                </div>
                <div className="footer-grid">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Our Services</Link></li>
                        <li><Link to="/">Contact Our Team</Link></li>
                        <li><Link to="/">Short Code</Link></li>
                    </ul>
                </div>
                <div className="f-box">
                    <h3>Recent Post</h3>
                    <ul>
                        <li className="active1"><Link to="/">Join Our Facebook Page</Link></li>
                        <li><Link to="/">Join Our Twitter</Link></li>
                        <li><Link to="/">Rss Feed</Link></li>
                        <li><Link to="/">Follow Us Google+</Link></li>
                    </ul>
                </div>
                <div className="footer-grid1">
                    <h3>News-Letters</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque nulla ipsum, pretium ac ultrices non, tincidunt id quam. Mauris dignissim dolor quis risus molestie et ,</p>
                </div>
                    <div className="clear"></div>
            </div>
                    <div className="clear"></div>
        </div>
    </React.Fragment>      
  )
}