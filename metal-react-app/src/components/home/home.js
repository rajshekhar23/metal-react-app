import React from 'react';
import cont1 from '../../images/cont1.jpg';
import cont2 from '../../images/cont2.jpg';
import cont3 from '../../images/cont3.jpg';
import cont4 from '../../images/cont4.jpg';
import slider1 from '../../images/slider1.jpg';

import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <React.Fragment>
        <div className="wrap">
            <div className="image-slider">
                <ul className="rslides" id="slider1">
                    <li><img alt=""  src={slider1} alt="" /></li>
                </ul>
                <div className="clear"> </div>
            </div>        
            <div className="main">	
                    <div className="content">
                        <div className="content-grids">
                            <div className="content-grid first-grid">
                                <ul>
                                    <li><h4><img alt=""  src="images/a.png" title="pic1" alt="" />readable</h4></li>
                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></li>
                                </ul>       
                            </div>
                            <div className="content-grid">
                                <ul>
                                    <li><h4><img alt=""  src="images/b.png" title="pic1" alt="" />incididunt</h4></li>
                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></li>
                                </ul>	
                            </div>
                            <div className="content-grid last-grid">
                            <ul>
                                <li><h4><img alt=""  src="images/c.png" title="pic1" alt="" />eiusmod</h4></li>
                                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></li>
                            </ul>
                            </div>
                                <div className="clear"></div>
                        </div>
                        <div className="content-bottom-grids">
                            <h3>About our Company</h3>
                            <div className="content-bottom-grid">
                                <div className="content-bottom-grid1">
                                    <Link to='/'><img alt=""  src="images/cont1.jpg" title="pic1" alt="" /></Link>
                                </div>
                                <div className="content-bottom-grid2">
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></li>
                                        <li><Link to="/about-us">read more</Link></li>
                                    </ul>
                                </div>
                                <div className="clear"> </div>
                                </div>
                                <div className="clear"></div>
                                </div>
                                <div className="clear"></div>
                                </div>
                                <div className="sidebar">
                                    <div className="sidebar-grids">
                                        <h3>Latest News</h3>
                                        <div className="sidebar-grid">
                                            <div className="sidebar-grid3">
                                                <Link to='/'><img alt=""  src="images/top1.jpg" title="pic1" alt="" /></Link>
                                            </div>
                                            <div className="sidebar-grid4">
                                                <ul>
                                                    <li><h4><Link to='/'>this is a sample post1</Link></h4></li>
                                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p></li>
                                                </ul>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="sidebar-grid">
                                            <div className="sidebar-grid3">
                                                <Link to='/'><img alt=""  src="images/top2.jpg" title="pic1" alt="" /></Link>
                                            </div>
                                            <div className="sidebar-grid4">
                                                <ul>
                                                    <li><h4><Link to='/'>this is a sample post1</Link></h4></li>
                                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="sidebar-grid">
                                            <div className="sidebar-grid3">
                                                <Link to='/'><img alt=""  src="images/top3.jpg" title="pic1" alt="" /></Link>
                                            </div>
                                            <div className="sidebar-grid4">
                                                <ul>
                                                    <li><h4><Link to='/'>this is a sample post1</Link></h4></li>
                                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p></li>
                                                </ul>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="sidebar-grid">
                                            <div className="sidebar-grid3">
                                                <Link to='/'><img alt=""  src="images/top3.jpg" title="pic1" alt="" /></Link>
                                            </div>
                                            <div className="sidebar-grid4">
                                                <ul>
                                                    <li><h4><Link to='/'>this is a sample post1</Link></h4></li>
                                                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p></li>
                                                </ul>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="clear"> </div>
                                    </div>
                                    <div className="clear"> </div>
                                </div>	
                                    <div className="clear"> </div>
                                <div className="tsc_carousel_hor products-list">
                                    <h1>our products</h1>
                                    <div className="l-carousel">
                                        <div className="jcarousel-container jcarousel-container-horizontal" style={{position: "relative", display: "block"}}>
                                                <div className="jcarousel-clip jcarousel-clip-horizontal" style={{overflow: "hidden", position: "relative"}}>
                                                    <ul className="carousel jcarousel-list jcarousel-list-horizontal" style={{overflow: "hidden", position: "relative", top: "0px", left: "0px", margin: "0px", padding: "0px", width: "2072px"}}>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-1 jcarousel-item-1-horizontal" jcarouselindex="1" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt={""}  src={cont1} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-2 jcarousel-item-2-horizontal" jcarouselindex="2" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont2} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-3 jcarousel-item-3-horizontal" jcarouselindex="3" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont3} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-4 jcarousel-item-4-horizontal" jcarouselindex="4" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont4} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-5 jcarousel-item-5-horizontal" jcarouselindex="5" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont1} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-6 jcarousel-item-6-horizontal" jcarouselindex="6" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont3} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-7 jcarousel-item-7-horizontal" jcarouselindex="7" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont4} width="175" height="115" border="0" /></Link></li>
                                                        <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-8 jcarousel-item-8-horizontal" jcarouselindex="8" style={{float: "left", listStyle: "none"}}> <Link to='/'><img alt=""  src={cont1} width="175" height="115" border="0" /></Link></li>
                                                    </ul>
                                                </div>
                                            <div className="jcarousel-prev jcarousel-prev-horizontal jcarousel-prev-disabled jcarousel-prev-disabled-horizontal" style={{display: "block"}} disabled="disabled">
                                            </div>
                                            <div className="jcarousel-next jcarousel-next-horizontal" style={{display: "block"}}>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="clear"> </div>
                                </div>	
                                    <div className="clear"> </div>
                            </div>                        
        </div>    
    </React.Fragment>   
  );
};
