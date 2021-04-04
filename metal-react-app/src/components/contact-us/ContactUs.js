import React from 'react';

export const ContactUs = () => {
  return (    
        <div className="wrap">
			<div className="cont-main">
                <div className="section group">	
                    <div className="contact_info">
                        <h3>Our Location</h3>
                        <div className="map">
                            <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br/><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265" style={{color:"#81532E",textAlign:"left",fontSize:"12px"}}>View Larger Map</a></small>
                        </div>	
                    </div>		
                    <div className="col span_1_of_2">							    	      				
                        <div className="company_address">
                            <h3>Company Information :</h3>
                            <p>500 Lorem Ipsum Dolor Sit,</p>
                            <p>22-56-2-9 Sit Amet, Lorem,</p>
                            <p>USA</p>
                            <p>Phone:(00) 222 666 444</p>
                            <p>Fax: (000) 000 00 00 0</p>
                            <p>Email: <a href="mailto:info@gmail.com">info[at]mycompany.com</a></p>
                            <p>Follow on: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>
                    </div>
                    </div>				
                    <div className="col span_2_of_4">
                    <div className="contact-form">
                        <h3>Contact Form</h3>
                            <form method="post">
                                <div>
                                    <span><input type="text" className="textbox" value="Name:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" /></span>
                                </div>
                                <div>
                                    <span><input type="text" className="textbox" value="Email:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" /></span>
                                </div>
                                <div>
                                    <span><input name="userPhone" type="text" className="textbox" value="mobile:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mobile';}" /></span>
                                </div>
                                <div>
                                    <span><textarea value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message</textarea></span>
                                </div>
                            <div>
                                    <span><input type="submit" value="Submit" /></span>
                            </div>
                            </form>
                        </div>
                    </div>				
                </div>
                <div className="clear"></div>
			</div>
        </div>
  )
}