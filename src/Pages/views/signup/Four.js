import { Link } from 'react-router-dom';
export default function Four() {
  return (
    <div className='fill'>
      <div className='container-fluid p-0'>
        <div className='row align-items-center h-100 g-0 justify-content-center'>
          <div className='col-md-6 p-lg-5 heading col-mobile'>
            <div className='inner-text'>
              {/* <a href='index.html'>
                <img className='inner-logo' src='assets/img/inner-logo.png' />
              </a> */}
              <Link to='/'>
                <img
                  src='assets/img/logo.png'
                  className='inner-logo'
                  alt='logo'
                />
              </Link>
              <h3 className='mt-5'>
                Thank you for completing your submission!
              </h3>
              <p className='mt-4'>
                We are reviewing your profile and will reach out to you shortly!{' '}
              </p>
              <a
                href='#instagram'
                className='btn btn-dark rounded-0 border-0 btn-css2'
              >
                Follow us on Instagram
              </a>{' '}
            </div>
          </div>
          <div className='col-lg-6 col-sm-6 text-end col-mobile2'>
            <img
              src='assets/img/graphic1.png'
              alt=''
              title=''
              className='img-fluid ps-lg-5'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
