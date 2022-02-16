export default function Contact() {
  return (
    <div>
      {/* <!-- header --> */}
      <header className='contact-header mb-5'>
        <div className='container'>
          <div className='row  justify-content-center h-100 content g-1'>
            <div className='col-lg-6 col-md-8 col-sm-12 text-center content wow fadeInUp'>
              <h1>Get in touch with us</h1>
              <p>
                Don’t hesitate to get in touch with us if you have any questions
                about our campaigns and/or our community!
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header --> */}
      {/* <!-- form --> */}

      <div className='container full bg-white'>
        <div className='row justify-content-center align-items-center content '>
          <div className='col-lg-6 col-md-6 mb-3 wow fadeInUp text-center'>
            <img
              src='assets/img/mobile-phone.png'
              alt='mobile-phone'
              className='img-fluid  position-relative'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-8 wow fadeInDown '>
            <form className='form'>
              <div className='form-group'>
                <div className='mb-3'>
                  <input
                    className='form-control '
                    type='text'
                    placeholder='Full Name'
                    aria-label='default input example'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email Address'
                    aria-label='default input example'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    className='form-control'
                    type='tel'
                    placeholder='Phone Number'
                    aria-label='default input example'
                  />
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    placeholder='Message'
                    rows='5'
                    aria-label='default input example'
                  ></textarea>
                </div>
                <div className='mb-3 d-grid'>
                  <button className='btn btn-lg btn-dark border-0'>
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- form --> */}
    </div>
  );
}
