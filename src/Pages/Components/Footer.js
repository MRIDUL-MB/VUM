import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    // footer
    <footer className='footer-bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 text-center'>
            <h2>Start Your Influencer Journey Today</h2>
            <a href='1.html' className='sign-up-now'>
              Sign up Now
            </a>{' '}
          </div>
        </div>
        <div className='clearfix'></div>
        <div className='col-12'>
          <hr />
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6'>
            <img
              src='assets/img/footer-logo.png'
              alt=''
              title=''
              className='img-fluid'
            />
            <div className='copy-right'>
              <h4 className='mt-4'>©2021 VUM Media</h4>
              <p>16727 Park Row Houston, TX</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='row'>
              <div className='col-6 mb-4'>
                <h3>for Brands</h3>
                <ul>
                  <li>
                    <Link to='/about'>about us</Link>
                  </li>
                  <li>
                    <Link to='/ourservices'>our services</Link>
                  </li>
                  <li>
                    <Link to='/'>ournetwork</Link>
                  </li>
                  <li>
                    <Link to='/'>our pricing</Link>
                  </li>
                </ul>
              </div>
              <div className='col-6 mb-4'>
                <h3>for Influencer</h3>
                <ul>
                  <li>
                    <Link to='/influencerbenefit'>influencer benefits</Link>
                  </li>
                  <li>
                    {/* <a href='#index'>how it works</a> */}
                    <Link to='/howitworks'>how it works</Link>
                  </li>
                  <li>
                    {/* <a href='#index'>VUM community</a> */}
                    <Link to='/community'>VUM community</Link>
                  </li>
                  <li>
                    {/* <a href='#index'>contact us</a> */}
                    <Link to='/contact'>contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='footer-icon'>
              <a href='#index'>
                <img src='assets/img/twitch1.png' alt='twitch' />
              </a>{' '}
              <a href='#index'>
                <img src='assets/img/tiktok1.png' alt='tiktok' />
              </a>
              <a href='#index'>
                <img src='assets/img/youtube1.png' alt='youtube' />
              </a>
              <a href='#index'>
                <img src='assets/img/twitter1.png' alt='twitter' />
              </a>{' '}
            </div>
          </div>
          <div className='terms'>
            {' '}
            <a href='#index' className='me-md-5 me-xs-5'>
              Terms of Use{' '}
            </a>{' '}
            &nbsp; <a href='#index'>Privacy Policy</a>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}
