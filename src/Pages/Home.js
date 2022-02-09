import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      {/* header */}
      <header>
        <div className='container'>
          <div className='row  justify-content-center h-100 content g-1'>
            <div className='col-lg-3 col-md-3 col-sm-5 position-relative text-center content wow fadeInLeft'>
              <img
                src='assets/img/banner-left.png'
                className='img-fluid left-img'
                alt='banner-left'
              />
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 text-center content wow fadeInUp'>
              <h1>
                Find Influencers
                <br />
                For Your Brand
              </h1>
              <h3 className='pe-lg-3 ps-lg-3'>
                Vum Media is a top rated marketing platform that connects you
                with influencers who can help you create content for your brand
                and products
              </h3>
              {/* <a href=''>Join as a Brand</a> */}
              <Link
                to='/'
                className='btn btn-css btn-dark d-inline rounded-0 border-0 me-1 ms-1 btn-1'
              >
                Join as a Brand
              </Link>
              {/* <a
                href=''
                className='btn btn-css btn-light d-inline rounded-0 border-0 ms-1 me-1 btn-1'
              >
                Join as an Influencer
              </a> */}
              <Link
                to='/'
                className='btn btn-css btn-light d-inline rounded-0 border-0 ms-1 me-1 btn-1'
              >
                Join as a Influencer
              </Link>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-5 text-center position-relative content banner-right wow fadeInRight'>
              <img
                src='assets/img/banner-right.png'
                className='img-fluid right-img'
                alt='banner-right'
              />
            </div>
          </div>
        </div>
      </header>
      {/* <!--header--> */}
      {/* <!--Reward--> */}
      <div className='container'>
        <div className='row align-items-center h-100'>
          <div className='col-lg-6 col-md-6 mb-3 wow fadeInUp text-center'>
            <img
              src='assets/img/reward.png'
              alt='reward'
              className='img-fluid reward-img position-relative'
            />
          </div>
          <div className='col-lg-6 col-md-6 wow fadeInUp'>
            <div className='heading'>
              <h2>Reward Influencers with Free Products </h2>
            </div>
            <p>
              {' '}
              Create a true, authentic customer experience by sending
              influencers your product for them to evaluate. Our influencers are
              some of the best in the world and will help you create content for
              your brand, at scale.{' '}
            </p>
          </div>
        </div>
      </div>
      {/* <!--Reward--> */}
      {/* <!--Full Spectrum --> */}
      <div className='container-fluid full'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-sm-9 wow fadeInUp'>
              <div className='heading mb-3'>
                <h2>Full Spectrum Influencer Marketing Platform</h2>
              </div>
              <p>
                Work with our influencers to help create unique content content
                for your brand, gather testimonials and generate organic word of
                mouth traffic.{' '}
              </p>
            </div>
          </div>
          <div className='row justify-content-center mt-5'>
            <div className='col-lg-4 col-md-6 heading icon wow fadeInLeft'>
              {' '}
              <img src='assets/img/icon1.png' alt='icon1' />
              <h3 className='mt-3'>Discover</h3>
              <p>
                Access our database of influencers and find one that best suits
                your needs.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 heading icon wow fadeInLeft'>
              {' '}
              <img src='assets/img/icon2.png' alt='icon2' />
              <h3 className='mt-3'>Discover</h3>
              <p>
                Use our platform to communicate exactly what it is your looking
                for in your content.
              </p>
            </div>
            <div className='col-lg-4  col-md-6 heading icon wow fadeInLeft'>
              {' '}
              <img src='assets/img/icon3.png' alt='icon3' />
              <h3 className='mt-3'>Engage</h3>
              <p>
                Take your custom content and engage with your followers on any
                social media platform
              </p>
            </div>
          </div>
        </div>
        <div className='text-center link'>
          <a href='./about-us.html'>
            About Our Services <img src='assets/img/arrow.png' alt='arrow' />
          </a>
        </div>
      </div>
      {/* <!--Full Spectrum --> */}
      {/* <!--start-today --> */}
      <div className='start-today'>
        <div className='container'>
          <div className='row'>
            {/* <!--start-today --> */}
            <div className='col-md-6 wow fadeInUp'>
              <div className='heading'>
                <h2>Start Today! </h2>
              </div>
              <p>
                Start creating content with our database of influencers across
                all major social media platforms.
              </p>
            </div>
            <div className='col-md-6 position-relative wow fadeInUp'>
              <div className='social-media position-absolute'>
                {' '}
                <a href='/'>
                  <img src='assets/img/twitch.png' alt='twitch' />
                </a>{' '}
                <a href='/'>
                  <img src='assets/img/tiktok.png' alt='tik-tok' />
                </a>{' '}
                <a href='/'>
                  <img src='assets/img/youtube.png' alt='youtube' />
                </a>{' '}
                <a href='/'>
                  <img src='assets/img/twitter.png' alt='twitter' />
                </a>{' '}
                <a href='/'>
                  <img src='assets/img/facebook.png' alt='facebook' />
                </a>{' '}
              </div>
            </div>
            {/* <!--start-today --> */}
            {/* <!--Launch Your Product--> */}
            <div className='col-md-6 order-lg-2 wow fadeInUp'>
              <div className='heading'>
                <h2>
                  Launch Your Product
                  <br />
                  on Any Platform
                </h2>
              </div>
              <p>
                Hand-pick the brands or influencers that best suit your needs.
                Simply create an account to access our database to hundreds of
                products. Influencers will help you to create engaging content
                for your social media channels to help drive organic traffic and
                sales to your brand.{' '}
              </p>
              <div className='link'>
                <a href='/'>
                  About Our Services{' '}
                  <img src='assets/img/arrow.png' alt='arrow' />
                </a>
              </div>
            </div>
            <div className='col-md-6 position-relative text-center order-lg-1 wow fadeInUp'>
              {' '}
              <img
                src='assets/img/launch.png'
                alt='launch'
                className='img-fluid launch'
              />{' '}
            </div>
            {/* <!--Launch Your Product--> */}
          </div>
        </div>
      </div>
    </div>
  );
}
