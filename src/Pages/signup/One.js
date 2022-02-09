import { Link } from 'react-router-dom';
export default function One() {
  return (
    <div id='#one' className='pt-2 pb-2 fill'>
      <div className='container'>
        {' '}
        {/* <a href='#homepage'>
          <img src='assets/img/logo.png' alt='logo' />
        </a> */}
        <Link to='/'>
          <img src='assets/img/logo.png' alt='logo' />
        </Link>
        <div className='row align-items-center h-100 g-0'>
          <div className='col-md-6 pt-0 heading'>
            <div className='col-md-9'>
              <div className='step-button align-middle'>
                <button
                  type='button'
                  className='active mb-1'
                  aria-current='true'
                ></button>
                <button type='button'></button>
                <button type='button'></button>
              </div>
              <div className='clearfix'></div>
              <h3 className='mt-5'>
                We'd love to send you <br />
                FREE product collabs :
              </h3>
              <div className='form'>
                <p className='mt-4'>Enter your Instagram handle*</p>
                <input
                  name=''
                  className='form-control input rounded-0 border-2'
                  placeholder='Type your answer here...'
                  type='text'
                />
              </div>
              {/* <a
                href='2.html'
                className='btn btn-dark rounded-0 border-0 btn-css2 green'
              >
                Next <img src='assets/img/arrow-w.png' alt='arrow' />
              </a>{' '} */}
              <Link
                className='btn btn-dark rounded-0 border-0 btn-css2 green'
                to='/two'
              >
                Next <img src='assets/img/arrow-w.png' alt='arrow' />
              </Link>{' '}
            </div>
          </div>
          <div className='col-md-6 text-center  col-mobile2'>
            {' '}
            <img
              src='assets/img/instagram.png'
              alt=''
              title=''
              className='img-fluid instagram  ps-md-5'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
