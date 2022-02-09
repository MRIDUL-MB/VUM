import { Link } from 'react-router-dom';

export default function Three() {
  return (
    <div className='pt-2 pb-2 fill'>
      <div className='container'>
        {' '}
        {/* <a href='index.html'>
          <img src='assets/img/logo.png' />
        </a> */}
        <Link to='/'>
          <img src='assets/img/logo.png' alt='logo' />
        </Link>
        <div className='row'>
          <div className='col-md-6 col-mobile pt-0 heading'>
            <div className='col-lg-9'>
              <div className='step-button align-middle'>
                <button
                  type='button'
                  className='active2'
                  aria-current='true'
                ></button>
                <button type='button' className='active2 mb-1'></button>
                <button
                  type='button'
                  className='active'
                  aria-current='true'
                ></button>
              </div>
              <div className='clearfix'></div>
              <div className='form mt-5'>
                <div className='mb-3'>
                  <div>
                    <p className='mt-4'>Enter your first name</p>
                    <input
                      name=''
                      className='form-control input rounded-0 border-2'
                      placeholder='Type your answer here...'
                      type='text'
                    />
                  </div>
                  <div className='mb-3'>
                    <p className='mt-4'>Your gender</p>
                    <div className='row g-2'>
                      <div className='col'>
                        <input
                          name='Female'
                          placeholder='Female'
                          className='form-control input-bg rounded-0 border-0'
                          type='text'
                        />
                      </div>

                      <div className='col'>
                        <input
                          name='Male'
                          className='form-control input-bg rounded-0 border-0'
                          placeholder='Male'
                          type='text'
                        />
                      </div>

                      <div className='col'>
                        <input
                          name='Non-Binary'
                          placeholder='Non-Binary'
                          className='form-control input-bg rounded-0 border-0'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <p className='mt-4'>Please enter your email*</p>
                    <input
                      name=''
                      className='form-control input rounded-0 border-2'
                      placeholder='name@example.com'
                      type='text'
                    />
                  </div>
                  <div className='mb-3'>
                    <p className='mt-4'>What country do you live in?</p>
                    <select
                      className='form-select select-css  rounded-0 border-2'
                      aria-label='Default select example'
                    >
                      <option selected>Type or select an option</option>
                      <option value='1'>country</option>
                      <option value='2'>country</option>
                      <option value='3'>country</option>
                    </select>
                    <div className='mb-3'>
                      <p className='mt-4'>When is your birthday?</p>
                      <div className='input-group date'>
                        <input
                          type='text'
                          className='form-control input rounded-0 border-2'
                          placeholder='Day  /  Month  /  Year'
                        />
                        <span className='input-group-addon'></span>{' '}
                      </div>
                    </div>
                    <div className='mb-3'>
                      <p className='mt-4'>Please confirm your mobile number</p>
                      <div className='row'>
                        <div className='col-4'>
                          {/* <!-- Example split danger button --> */}
                          <div className='dropdown'>
                            <button
                              className='btn flag dropdown-toggle p-0'
                              type='button'
                              id='dropdownMenuButton2'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              {' '}
                              <img alt=' ' src='assets/img/flag.png' />{' '}
                              <img alt=' ' src='assets/img/arrow-1.png' />{' '}
                            </button>
                            <ul
                              className='dropdown-menu dropdown-menu-2 w-auto border-0 rounded-0'
                              aria-labelledby='dropdownMenuButton2'
                            >
                              <li className='mb-2'>
                                <img alt=' ' src='assets/img/flag.png' />
                              </li>
                              <li className='mb-2'>
                                <img alt=' ' src='assets/img/flag2.png' />
                              </li>
                              <li className='mb-2'>
                                <img alt=' ' src='assets/img/flag3.png' />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='col-8'>
                          <div className='input-group date'>
                            <input
                              type='text'
                              className='form-control input rounded-0 border-2'
                              placeholder='(201) 555-0123'
                            />
                            <span className='input-group-addon'>
                              <i className='glyphicon glyphicon-calendar'></i>
                            </span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className='mb-3 mt-5'>
                        <div className='form-check'>
                          <input
                            className='form-check-input me-3 rounded-0 border-2'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault'
                          >
                            <p className='fw-bold mt-3 mb-0'>I Accept</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a
                    href='4.html'
                    className='btn btn-dark rounded-0 border-0 btn-css2 green'
                  >
                    Next <img src='assets/img/arrow-w.png' />
                  </a>{' '} */}
                  <Link
                    to='/four'
                    className='btn btn-dark rounded-0 border-0 btn-css2 green'
                  >
                    Next <img alt=' ' src='assets/img/arrow-w.png' />
                  </Link>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-mobile2'>
            <div className='row g-0'>
              <img
                alt=' '
                src='assets/img/graphic3.png'
                className='img-fluid graphic3 position-relative'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
