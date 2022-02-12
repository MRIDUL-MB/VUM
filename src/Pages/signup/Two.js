import { Link } from 'react-router-dom';

export default function Two({ prevStep, nextStep }) {
  return (
    <div className='pt-2 pb-2 fill p-0'>
      <div className='container'>
        {' '}
        {/* <a href='index.html'>
          <img src='assets/img/logo.png' />
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
                  className='active2'
                  aria-current='true'
                ></button>
                <button type='button' className='active mb-1'></button>
                <button type='button'></button>
              </div>
              <div className='clearfix'></div>
              <h3 className='mt-5'>
                What product categories interest you the most?
              </h3>
              <div className='form'>
                <p className='mt-4'>Choose as many as you like</p>
              </div>
            </div>
            <div className='pe-md-5'>
              <div className='row'>
                <div className='col-lg-6'>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    {' '}
                    Electronics{' '}
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Baby &Toddler
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Sports Fitness & Outdoors
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Office & Stationery
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    {' '}
                    Toys & Games{' '}
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose choose-active'
                  >
                    Skin Care{' '}
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Food & Snacks
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0  border-0 w-100 choose'
                  >
                    Hair Care
                  </button>
                  <input
                    name=''
                    className='form-control input-bg rounded-0 border-0'
                    type='text'
                  />
                </div>
                <div className='col-lg-6'>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    {' '}
                    Home & Garden{' '}
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    {' '}
                    Makeup
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose choose-active'
                  >
                    Arts & Entertainment
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Fashion & Accessories
                  </button>
                  <button
                    type='button'
                    className='btn  rounded-0 border-0 w-100 choose'
                  >
                    {' '}
                    Personal Care{' '}
                  </button>
                  <button
                    type='button'
                    className='btn  rounded-0 border-0 w-100 choose'
                  >
                    Beverages{' '}
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0 border-0 w-100 choose'
                  >
                    Health & Wellness
                  </button>
                  <button
                    type='button'
                    className='btn rounded-0  border-0 w-100 choose'
                  >
                    {' '}
                    Pet Supplies{' '}
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={prevStep}
              className='btn btn-dark rounded-0 border-0 btn-css2 green'
            >
              <img
                src='assets/img/arrow-w.png'
                style={{ transform: 'scaleX(-1)' }}
                alt='arrow'
              />
              Prev
            </button>{' '}
            <button
              onClick={nextStep}
              className='btn btn-dark rounded-0 border-0 btn-css2 green'
            >
              Next
              <img src='assets/img/arrow-w.png' alt='arrow' />
            </button>
          </div>
          <div className='col-md-6  col-mobile2 text-center'>
            <img
              src='assets/img/graphic2.png'
              alt=''
              title=''
              className='img-fluid ps-md-5 mt-5 '
            />
          </div>
        </div>
      </div>
    </div>
  );
}
