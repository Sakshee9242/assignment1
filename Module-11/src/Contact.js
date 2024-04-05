import React from 'react'


function Contact() {
  
  return (
    <div style={{background: "#4a1831"}}>
    <div >
      <h2 className='text-center p-4 text-white'>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9385814926504!2d72.55434837430184!3d23.02602721620118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af325a448f09478!2sTops%20Technologies!5e0!3m2!1sen!2sin!4v1712148499338!5m2!1sen!2sin" height={300} width="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='container p-5'>
        <div className="row justify-content-center">
           <div className="col col-lg-5">
            <form action='https://formspree.io/f/mayrpzlg' method='POST'>
              <input className='form-control' type='text' name='username' placeholder='Username' autoComplete='off' required/> <br/>
              <input className='form-control' type='email' name='email' placeholder='Email' required /> <br/>
              <textarea className='form-control' cols='48' rows='6' name='message'></textarea>
            <input type='submit' placeholder='Send' className='btn btn-light mt-3 fw-medium shadow'/>
            </form>
           </div>
        </div>
    </div>
    </div>
  )
  
}

export default Contact
