import React from 'react';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (    
	<div className="wrap">
	<div className="main1">
	<div className="product-main">
		<h4>Our Products</h4>
		<div className="ser-para"></div>
		<div className="product-grid-list">
            <h5>Product 01</h5>
            <img src={pic1} alt="" />
            <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
            <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
		    <h5>Product 02</h5>
			<img src={pic2} alt="" />
		    <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et,placerat ut scelerisque Nunc easi diam risus, placerat ut scelerisque et, </p>
		    <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
		    <h5>Product 03</h5>
			<img src={pic3} alt="" />
	        <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
			<div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list last-grid">
		    <h5>Product 04</h5>
			<img src={pic1} alt="" />
	    	<p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
		    <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
		    <h5>Product 05</h5>
			<img src={pic2} alt="" />
		    <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et,placerat ut scelerisque Nunc easi diam risus, placerat ut scelerisque et, </p>
		    <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
	    	<h5>Product 06</h5>
			<img src={pic3} alt="" />
	        <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
			<div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
		    <h5>Product 07</h5>
			<img src={pic1} alt="" />
		    <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et,placerat ut scelerisque Nunc easi diam risus, placerat ut scelerisque et, </p>
		    <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list last-grid">
		    <h5>Product 08</h5>
			<img src={pic2} alt="" />
	        <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
			<div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list">
		    <h5>Product 09</h5>
			<img src={pic3} alt="" />
	        <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
			<div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="product-grid-list last-grid">
		    <h5>Product 10</h5>
			<img src={pic1} alt="" />
		    <p>Qsi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et, placerat ut scelerisque ,Nunc easi diam risus, placerat ut scelerisque et, </p>
		    <div className="readmore">
				<p><Link to='/'>Read More</Link></p>
			</div>
		</div>
		<div className="clear"></div>
	</div> 
		<div className="clear"></div>
	</div>
	</div>     
  )
}