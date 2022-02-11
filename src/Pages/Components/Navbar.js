import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav
      id='navbar_top'
      className='navbar navbar-expand-lg navbar-light fixed-top'
    >
      <div className='container-xl'>
        <a className='navbar-brand' href='/'>
          <img src='assets/img/logo.png' alt='' title='' />
        </a>
        <a
          href='/'
          className='navbar-toggler border-0 collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample07XL'
          aria-expanded='false'
        >
          {/* these spans become the three lines  */}
          <span> </span> <span> </span> <span> </span>
        </a>
        <div className='collapse navbar-collapse' id='navbarsExample07XL'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                id='dropdown07XL'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                for brands
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdown07XL'>
                <li>
                  <a className='dropdown-item' href='#index'>
                    Dropdown
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#index'>
                    Dropdown
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#index'>
                    Dropdown
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#index'
                id='dropdown07XL'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                for influencers
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdown07XL'>
                <li>
                  <a className='dropdown-item' href='/one'>
                    page 1
                  </a>
                  {/* <Link className='dropdown-item' to='/one'>
                    page 1
                  </Link> */}
                </li>
                <li>
                  <a className='dropdown-item' href='/two'>
                    page 2
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/three'>
                    page 3
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/four'>
                    page 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className='ms-md-4'>
            {/* <button
              className='btn btn-dark rounded-0 border-0 join'
              type='button '
            >
              {' '}
              Join the Community{' '}
            </button> */}
            <Link to='/one' className='btn btn-dark rounded-0 border-0 join'>
              Join the Community
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
