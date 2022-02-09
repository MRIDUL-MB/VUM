export default function About() {
  return (
    <div>
      {/* <!-- header --> */}
      <header className='about-header'>
        <div className='container'>
          <div className='row  justify-content-center  content g-1'>
            <div className='col-lg-6 col-md-6 col-sm-12 content wow fadeInUp'>
              <h1>Micro Influencer Marketing platform</h1>
              <p className='lh-lg'>
                VUM Media is the industry leading micro influencer platform.
                We’ve developed a suite of services enabled by proprietary AI
                technology to source consumer influencers, guarantee 100% social
                promotion completions, and manage campaigns from A to Z.
              </p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-5 text-center position-relative content banner-right wow fadeInRight'>
              <img
                src='assets/img/hero.png'
                className='img-fluid right-img'
                alt='hero'
              />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header --> */}
      {/* <!-- what we believe in --> */}
      <div className='container-fluid full bg-white'>
        <div className='container text-center'>
          <div className='row justify-content-center '>
            <div className='col-sm-9 wow fadeInUp'>
              <div className='heading'>
                <h2>What we believe in</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-around mt-5 gap-3'>
            <div className='about-card col-lg-3 col-md-6 col-8 heading icon wow fadeInLeft'>
              <img
                className='transparency'
                src='assets/img/transparency.png'
                alt='transparency'
              />
              <h3 className='mt-3'>Transparency</h3>
              <p>
                We're an honest marketing partner that clients can trust. We
                treat our clients businesses as if they were our own.
              </p>
            </div>
            <div className=' about-card col-lg-3 col-md-6 col-8 heading icon wow fadeInLeft'>
              {' '}
              <img
                className='mt-3'
                src='assets/img/passion.png'
                alt='passion'
              />
              <h3 className='mt-3'>Passion</h3>
              <p>
                We take pride in our work and are passionate about what we do
                and who we work with.
              </p>
            </div>
            <div className=' about-card col-lg-3  col-md-6 col-8 heading icon wow fadeInLeft'>
              {' '}
              <img
                className='mt-3'
                src='assets/img/Proactiveness.png'
                alt='proactiveness'
              />
              <h3 className='mt-3'>Proactiveness</h3>
              <p>
                The world of social is a fast paced one, if you're not on the
                ball... you're going to get left behind. It's our job to be the
                industry eyes and ears for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- what we believe in --> */}
      {/* <!-- microinfluencers are better than online ads --> */}
      <div className='micro-container'>
        <div className='container  bg-white'>
          <div className='row  justify-content-center h-100 content g-3'>
            <div className='col-lg-5 col-md-6 col-sm-12 content wow fadeInUp'>
              <h1>microinfluencers are better than online ads</h1>
              <p className='lh-lg'>
                Shoppers trust recommendations from word-of-mouth 92% more than
                they trust online ads. Word-of-mouth endorsements also convert 5
                times more than paid media impressions. In the words of
                Zuckerberg himself, “A trusted referral influences people more
                than the best broadcast message.”
              </p>
            </div>
            <div className='col-lg-4 col-md-3 col-sm-5 text-center position-relative content banner-right wow fadeInRight'>
              <img
                src='assets/img/hero-next.png'
                className='img-fluid'
                alt='hero-next'
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- microinfluencers are better than online ads --> */}
    </div>
  );
}
