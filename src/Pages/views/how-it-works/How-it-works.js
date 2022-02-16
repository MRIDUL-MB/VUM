export default function HowitWorks() {
  return (
    <div>
      {/* <!-- header --> */}
      <header className='contact-header'>
        <div className='container '>
          <div className='row  justify-content-center h-100 content g-1'>
            <div className='col-lg-8 col-md-8 col-sm-12 text-center content wow fadeInUp'>
              <h1>how our compaigns works</h1>
              <p className='lh-lg'>
                Our influencer campaign process is simple. Get your profile
                approved, choose your product, and then post on social.
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header --> */}
      {/* <!-- steps --> */}
      <div className='container full full-p bg-white '>
        <div className='micro-container row align-items-center justify-content-center gy-5 m-auto text-center text-lg-start'>
          <div className=' col-lg-5 position-relative wow text-center fadeInRight'>
            <img
              src='./assets/img/howitworks-step1.png'
              className='img-fluid'
              alt='step-1'
            />
          </div>
          <div className='col-lg-5 wow fadeInLeft'>
            <div>
              <h1 className='d-inline'>Step</h1>
              <img src='./assets/img/1.png' alt='1' />
            </div>
            <h1 className='fs-2'>get your profile approved</h1>
            <p>
              Fill out our quick and easy application form (found here) in 5
              minutes or less and our team will review your profile.
            </p>
          </div>
          <div className='col-lg-5 position-relative wow text-center fadeInRight'>
            <img
              src='./assets/img/howitworks-step2.png'
              className='img-fluid'
              alt='step-2'
            />
          </div>
          <div className='col-lg-5 wow fadeInLeft'>
            <div>
              <h1 className='d-inline'>Step</h1>
              <img src='./assets/img/2.png' alt='2' />
            </div>
            <h1 className='fs-2'>choose your product</h1>
            <p>
              Pick your desired product from our catalog of options and get it
              shipped to your door – free.
            </p>
          </div>
          <div className='col-lg-5 position-relative wow text-center fadeInRight'>
            <img
              src='./assets/img/howitworks-step3.png'
              className='img-fluid'
              alt='step-3'
            />
          </div>
          <div className='col-lg-5 wow fadeInLeft'>
            <div>
              <h1 className='d-inline'>Step</h1>
              <img src='./assets/img/3.png' alt='3' />
            </div>
            <h1 className='fs-2'>post to instagram</h1>
            <p>
              Enjoy your new product, take a picture/video, and share your
              experience on social media as a #brandpartner
            </p>
          </div>
        </div>
      </div>
      {/* <!-- steps --> */}
    </div>
  );
}
