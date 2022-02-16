import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signupAPI from './signupAPI';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInputField from './phoneInputField/PhoneInputField';

export default function Three({ nextStep, prevStep, username }) {
  const [message, setMessage] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [click]);

  const newDate = () => {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split('T')[0];
    return currentDate;
  };

  return (
    <div className='pt-2 pb-2 fill'>
      <div className='container'>
        {' '}
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
              <Formik
                initialValues={{
                  first_name: '',
                  last_name: '',
                  email: '',
                  gender: '',
                  password: '',
                  phone_number: '',
                  country: '',
                  date_of_birth: '',
                  status: 'Active',
                  role: {
                    role_name: 'Influencer',
                    role_status: 'Active',
                  },
                  acceptTerms: false,
                }}
                validationSchema={Yup.object().shape({
                  first_name: Yup.string().required('First Name is required'),
                  last_name: Yup.string().required('Last Name is required'),
                  email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                  password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
                  gender: Yup.string().required('Gender is required'),
                  phone_number: Yup.string().required(
                    'Phone Number is required'
                  ),
                  country: Yup.string().required('Country is required'),
                  date_of_birth: Yup.string().required(
                    'Date of Birth is required'
                  ),
                  acceptTerms: Yup.bool().oneOf(
                    [true],
                    'Accept Terms & Conditions is required'
                  ),
                })}
                onSubmit={(fields) => {
                  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));

                  // console.log(fields);
                  signupAPI({ ...fields, username: username })
                    .then((data) => {
                      console.log(data);
                      if (data.status_code === 200) {
                        nextStep();
                      } else {
                        setMessage(JSON.stringify(data.message));
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                {({ errors, touched }) => (
                  <Form method='get'>
                    <div className=' mt-5 border-0'></div>
                    {message && (
                      <div class='d-inline  text-danger'>{message}</div>
                    )}
                    <div className='form mt-5'>
                      <div className='form-group mb-3'>
                        <label htmlFor='first_name'>First Name</label>
                        <Field
                          name='first_name'
                          type='text'
                          className={
                            'form-control input rounded-0 border-2' +
                            (errors.first_name && touched.first_name
                              ? ' is-invalid'
                              : '')
                          }
                          placeholder='eg. John'
                        />
                        <ErrorMessage
                          name='first_name'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='last_name'>Last Name</label>
                        <Field
                          name='last_name'
                          type='text'
                          className={
                            'form-control input rounded-0 border-2' +
                            (errors.last_name && touched.last_name
                              ? ' is-invalid'
                              : '')
                          }
                          placeholder='eg. Daniel'
                        />
                        <ErrorMessage
                          name='last_name'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='gender'>Gender</label>
                        <Field
                          as='select'
                          name='gender'
                          className={
                            'form-select form-control input rounded-0 border-2' +
                            (errors.gender && touched.gender
                              ? ' is-invalid'
                              : '')
                          }
                        >
                          <option value='' disabled>
                            select
                          </option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Other'>Other</option>
                        </Field>
                        <ErrorMessage
                          name='gender'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='email'>Email</label>
                        <Field
                          name='email'
                          type='text'
                          className={
                            'form-control form-control input rounded-0 border-2' +
                            (errors.email && touched.email ? ' is-invalid' : '')
                          }
                        />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='password'>Password</label>
                        <Field
                          name='password'
                          type='password'
                          className={
                            'form-control input rounded-0 border-2' +
                            (errors.password && touched.password
                              ? ' is-invalid'
                              : '')
                          }
                        />

                        <ErrorMessage
                          name='password'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='confirmPassword'>
                          Confirm Password
                        </label>
                        <Field
                          name='confirmPassword'
                          type='password'
                          className={
                            'form-control input rounded-0 border-2' +
                            (errors.confirmPassword && touched.confirmPassword
                              ? ' is-invalid'
                              : '')
                          }
                        />
                        <ErrorMessage
                          name='confirmPassword'
                          component='div'
                          className='invalid-feedback'
                        />
                      </div>
                      <div className='mb-3'>
                        <div>
                          <p className='mt-4'>What country do you live in?</p>
                          <Field
                            as='select'
                            name='country'
                            className={
                              'form-select form-control input rounded-0 border-2' +
                              (errors.country && touched.country
                                ? ' is-invalid'
                                : '')
                            }
                          >
                            <option value='Afghanistan'>Afghanistan</option>
                            <option value='Åland Islands'>Åland Islands</option>
                            <option value='Albania'>Albania</option>
                            <option value='Algeria'>Algeria</option>
                            <option value='American Samoa'>
                              American Samoa
                            </option>
                            <option value='Andorra'>Andorra</option>
                            <option value='Angola'>Angola</option>
                            <option value='Anguilla'>Anguilla</option>
                            <option value='Antarctica'>Antarctica</option>
                            <option value='Antigua and Barbuda'>
                              Antigua and Barbuda
                            </option>
                            <option value='Argentina'>Argentina</option>
                            <option value='Armenia'>Armenia</option>
                            <option value='Aruba'>Aruba</option>
                            <option value='Australia'>Australia</option>
                            <option value='Austria'>Austria</option>
                            <option value='Azerbaijan'>Azerbaijan</option>
                            <option value='Bahamas'>Bahamas</option>
                            <option value='Bahrain'>Bahrain</option>
                            <option value='Bangladesh'>Bangladesh</option>
                            <option value='Barbados'>Barbados</option>
                            <option value='Belarus'>Belarus</option>
                            <option value='Belgium'>Belgium</option>
                            <option value='Belize'>Belize</option>
                            <option value='Benin'>Benin</option>
                            <option value='Bermuda'>Bermuda</option>
                            <option value='Bhutan'>Bhutan</option>
                            <option value='Bolivia'>Bolivia</option>
                            <option value='Bosnia and Herzegovina'>
                              Bosnia and Herzegovina
                            </option>
                            <option value='Botswana'>Botswana</option>
                            <option value='Bouvet Island'>Bouvet Island</option>
                            <option value='Brazil'>Brazil</option>
                            <option value='British Indian Ocean Territory'>
                              British Indian Ocean Territory
                            </option>
                            <option value='Brunei Darussalam'>
                              Brunei Darussalam
                            </option>
                            <option value='Bulgaria'>Bulgaria</option>
                            <option value='Burkina Faso'>Burkina Faso</option>
                            <option value='Burundi'>Burundi</option>
                            <option value='Cambodia'>Cambodia</option>
                            <option value='Cameroon'>Cameroon</option>
                            <option value='Canada'>Canada</option>
                            <option value='Cape Verde'>Cape Verde</option>
                            <option value='Cayman Islands'>
                              Cayman Islands
                            </option>
                            <option value='Central African Republic'>
                              Central African Republic
                            </option>
                            <option value='Chad'>Chad</option>
                            <option value='Chile'>Chile</option>
                            <option value='China'>China</option>
                            <option value='Christmas Island'>
                              Christmas Island
                            </option>
                            <option value='Cocos (Keeling) Islands'>
                              Cocos (Keeling) Islands
                            </option>
                            <option value='Colombia'>Colombia</option>
                            <option value='Comoros'>Comoros</option>
                            <option value='Congo'>Congo</option>
                            <option value='Congo, The Democratic Republic of The'>
                              Congo, The Democratic Republic of The
                            </option>
                            <option value='Cook Islands'>Cook Islands</option>
                            <option value='Costa Rica'>Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value='Croatia'>Croatia</option>
                            <option value='Cuba'>Cuba</option>
                            <option value='Cyprus'>Cyprus</option>
                            <option value='Czech Republic'>
                              Czech Republic
                            </option>
                            <option value='Denmark'>Denmark</option>
                            <option value='Djibouti'>Djibouti</option>
                            <option value='Dominica'>Dominica</option>
                            <option value='Dominican Republic'>
                              Dominican Republic
                            </option>
                            <option value='Ecuador'>Ecuador</option>
                            <option value='Egypt'>Egypt</option>
                            <option value='El Salvador'>El Salvador</option>
                            <option value='Equatorial Guinea'>
                              Equatorial Guinea
                            </option>
                            <option value='Eritrea'>Eritrea</option>
                            <option value='Estonia'>Estonia</option>
                            <option value='Ethiopia'>Ethiopia</option>
                            <option value='Falkland Islands (Malvinas)'>
                              Falkland Islands (Malvinas)
                            </option>
                            <option value='Faroe Islands'>Faroe Islands</option>
                            <option value='Fiji'>Fiji</option>
                            <option value='Finland'>Finland</option>
                            <option value='France'>France</option>
                            <option value='French Guiana'>French Guiana</option>
                            <option value='French Polynesia'>
                              French Polynesia
                            </option>
                            <option value='French Southern Territories'>
                              French Southern Territories
                            </option>
                            <option value='Gabon'>Gabon</option>
                            <option value='Gambia'>Gambia</option>
                            <option value='Georgia'>Georgia</option>
                            <option value='Germany'>Germany</option>
                            <option value='Ghana'>Ghana</option>
                            <option value='Gibraltar'>Gibraltar</option>
                            <option value='Greece'>Greece</option>
                            <option value='Greenland'>Greenland</option>
                            <option value='Grenada'>Grenada</option>
                            <option value='Guadeloupe'>Guadeloupe</option>
                            <option value='Guam'>Guam</option>
                            <option value='Guatemala'>Guatemala</option>
                            <option value='Guernsey'>Guernsey</option>
                            <option value='Guinea'>Guinea</option>
                            <option value='Guinea-bissau'>Guinea-bissau</option>
                            <option value='Guyana'>Guyana</option>
                            <option value='Haiti'>Haiti</option>
                            <option value='Heard Island and Mcdonald Islands'>
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value='Holy See (Vatican City State)'>
                              Holy See (Vatican City State)
                            </option>
                            <option value='Honduras'>Honduras</option>
                            <option value='Hong Kong'>Hong Kong</option>
                            <option value='Hungary'>Hungary</option>
                            <option value='Iceland'>Iceland</option>
                            <option value='India'>India</option>
                            <option value='Indonesia'>Indonesia</option>
                            <option value='Iran, Islamic Republic of'>
                              Iran, Islamic Republic of
                            </option>
                            <option value='Iraq'>Iraq</option>
                            <option value='Ireland'>Ireland</option>
                            <option value='Isle of Man'>Isle of Man</option>
                            <option value='Israel'>Israel</option>
                            <option value='Italy'>Italy</option>
                            <option value='Jamaica'>Jamaica</option>
                            <option value='Japan'>Japan</option>
                            <option value='Jersey'>Jersey</option>
                            <option value='Jordan'>Jordan</option>
                            <option value='Kazakhstan'>Kazakhstan</option>
                            <option value='Kenya'>Kenya</option>
                            <option value='Kiribati'>Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value='Korea, Republic of'>
                              Korea, Republic of
                            </option>
                            <option value='Kuwait'>Kuwait</option>
                            <option value='Kyrgyzstan'>Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value='Latvia'>Latvia</option>
                            <option value='Lebanon'>Lebanon</option>
                            <option value='Lesotho'>Lesotho</option>
                            <option value='Liberia'>Liberia</option>
                            <option value='Libyan Arab Jamahiriya'>
                              Libyan Arab Jamahiriya
                            </option>
                            <option value='Liechtenstein'>Liechtenstein</option>
                            <option value='Lithuania'>Lithuania</option>
                            <option value='Luxembourg'>Luxembourg</option>
                            <option value='Macao'>Macao</option>
                            <option value='Macedonia, The Former Yugoslav Republic of'>
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value='Madagascar'>Madagascar</option>
                            <option value='Malawi'>Malawi</option>
                            <option value='Malaysia'>Malaysia</option>
                            <option value='Maldives'>Maldives</option>
                            <option value='Mali'>Mali</option>
                            <option value='Malta'>Malta</option>
                            <option value='Marshall Islands'>
                              Marshall Islands
                            </option>
                            <option value='Martinique'>Martinique</option>
                            <option value='Mauritania'>Mauritania</option>
                            <option value='Mauritius'>Mauritius</option>
                            <option value='Mayotte'>Mayotte</option>
                            <option value='Mexico'>Mexico</option>
                            <option value='Micronesia, Federated States of'>
                              Micronesia, Federated States of
                            </option>
                            <option value='Moldova, Republic of'>
                              Moldova, Republic of
                            </option>
                            <option value='Monaco'>Monaco</option>
                            <option value='Mongolia'>Mongolia</option>
                            <option value='Montenegro'>Montenegro</option>
                            <option value='Montserrat'>Montserrat</option>
                            <option value='Morocco'>Morocco</option>
                            <option value='Mozambique'>Mozambique</option>
                            <option value='Myanmar'>Myanmar</option>
                            <option value='Namibia'>Namibia</option>
                            <option value='Nauru'>Nauru</option>
                            <option value='Nepal'>Nepal</option>
                            <option value='Netherlands'>Netherlands</option>
                            <option value='Netherlands Antilles'>
                              Netherlands Antilles
                            </option>
                            <option value='New Caledonia'>New Caledonia</option>
                            <option value='New Zealand'>New Zealand</option>
                            <option value='Nicaragua'>Nicaragua</option>
                            <option value='Niger'>Niger</option>
                            <option value='Nigeria'>Nigeria</option>
                            <option value='Niue'>Niue</option>
                            <option value='Norfolk Island'>
                              Norfolk Island
                            </option>
                            <option value='Northern Mariana Islands'>
                              Northern Mariana Islands
                            </option>
                            <option value='Norway'>Norway</option>
                            <option value='Oman'>Oman</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='Palau'>Palau</option>
                            <option value='Palestinian Territory, Occupied'>
                              Palestinian Territory, Occupied
                            </option>
                            <option value='Panama'>Panama</option>
                            <option value='Papua New Guinea'>
                              Papua New Guinea
                            </option>
                            <option value='Paraguay'>Paraguay</option>
                            <option value='Peru'>Peru</option>
                            <option value='Philippines'>Philippines</option>
                            <option value='Pitcairn'>Pitcairn</option>
                            <option value='Poland'>Poland</option>
                            <option value='Portugal'>Portugal</option>
                            <option value='Puerto Rico'>Puerto Rico</option>
                            <option value='Qatar'>Qatar</option>
                            <option value='Reunion'>Reunion</option>
                            <option value='Romania'>Romania</option>
                            <option value='Russian Federation'>
                              Russian Federation
                            </option>
                            <option value='Rwanda'>Rwanda</option>
                            <option value='Saint Helena'>Saint Helena</option>
                            <option value='Saint Kitts and Nevis'>
                              Saint Kitts and Nevis
                            </option>
                            <option value='Saint Lucia'>Saint Lucia</option>
                            <option value='Saint Pierre and Miquelon'>
                              Saint Pierre and Miquelon
                            </option>
                            <option value='Saint Vincent and The Grenadines'>
                              Saint Vincent and The Grenadines
                            </option>
                            <option value='Samoa'>Samoa</option>
                            <option value='San Marino'>San Marino</option>
                            <option value='Sao Tome and Principe'>
                              Sao Tome and Principe
                            </option>
                            <option value='Saudi Arabia'>Saudi Arabia</option>
                            <option value='Senegal'>Senegal</option>
                            <option value='Serbia'>Serbia</option>
                            <option value='Seychelles'>Seychelles</option>
                            <option value='Sierra Leone'>Sierra Leone</option>
                            <option value='Singapore'>Singapore</option>
                            <option value='Slovakia'>Slovakia</option>
                            <option value='Slovenia'>Slovenia</option>
                            <option value='Solomon Islands'>
                              Solomon Islands
                            </option>
                            <option value='Somalia'>Somalia</option>
                            <option value='South Africa'>South Africa</option>
                            <option value='South Georgia and The South Sandwich Islands'>
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value='Spain'>Spain</option>
                            <option value='Sri Lanka'>Sri Lanka</option>
                            <option value='Sudan'>Sudan</option>
                            <option value='Suriname'>Suriname</option>
                            <option value='Svalbard and Jan Mayen'>
                              Svalbard and Jan Mayen
                            </option>
                            <option value='Swaziland'>Swaziland</option>
                            <option value='Sweden'>Sweden</option>
                            <option value='Switzerland'>Switzerland</option>
                            <option value='Syrian Arab Republic'>
                              Syrian Arab Republic
                            </option>
                            <option value='Taiwan'>Taiwan</option>
                            <option value='Tajikistan'>Tajikistan</option>
                            <option value='Tanzania, United Republic of'>
                              Tanzania, United Republic of
                            </option>
                            <option value='Thailand'>Thailand</option>
                            <option value='Timor-leste'>Timor-leste</option>
                            <option value='Togo'>Togo</option>
                            <option value='Tokelau'>Tokelau</option>
                            <option value='Tonga'>Tonga</option>
                            <option value='Trinidad and Tobago'>
                              Trinidad and Tobago
                            </option>
                            <option value='Tunisia'>Tunisia</option>
                            <option value='Turkey'>Turkey</option>
                            <option value='Turkmenistan'>Turkmenistan</option>
                            <option value='Turks and Caicos Islands'>
                              Turks and Caicos Islands
                            </option>
                            <option value='Tuvalu'>Tuvalu</option>
                            <option value='Uganda'>Uganda</option>
                            <option value='Ukraine'>Ukraine</option>
                            <option value='United Arab Emirates'>
                              United Arab Emirates
                            </option>
                            <option value='United Kingdom'>
                              United Kingdom
                            </option>
                            <option value='United States'>United States</option>
                            <option value='United States Minor Outlying Islands'>
                              United States Minor Outlying Islands
                            </option>
                            <option value='Uruguay'>Uruguay</option>
                            <option value='Uzbekistan'>Uzbekistan</option>
                            <option value='Vanuatu'>Vanuatu</option>
                            <option value='Venezuela'>Venezuela</option>
                            <option value='Viet Nam'>Viet Nam</option>
                            <option value='Virgin Islands, British'>
                              Virgin Islands, British
                            </option>
                            <option value='Virgin Islands, U.S.'>
                              Virgin Islands, U.S.
                            </option>
                            <option value='Wallis and Futuna'>
                              Wallis and Futuna
                            </option>
                            <option value='Western Sahara'>
                              Western Sahara
                            </option>
                            <option value='Yemen'>Yemen</option>
                            <option value='Zambia'>Zambia</option>
                            <option value='Zimbabwe'>Zimbabwe</option>
                          </Field>
                          <ErrorMessage
                            name='country'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='mb-3'>
                          <p className='mt-4'>When is your birthday?</p>
                          <div className='input-group date'>
                            <Field
                              name='date_of_birth'
                              type='date'
                              className={
                                ' form-control input rounded-0 border-2' +
                                (errors.date_of_birth && touched.date_of_birth
                                  ? ' is-invalid'
                                  : '')
                              }
                              max={newDate()}
                            />
                            <span className='input-group-addon'></span>{' '}
                            <ErrorMessage
                              name='date_of_birth'
                              component='div'
                              className='invalid-feedback'
                            />
                          </div>
                        </div>
                        <div className='mb-3'>
                          <p className='mt-4'>
                            Please confirm your mobile number
                          </p>
                          <div className='row'>
                            <div className='col-12'>
                              <div className='input-group date'>
                                <Field
                                  type='tel'
                                  name='phone_number'
                                  className={
                                    ' form-control input rounded-0 border-2' +
                                    (errors.phone_number && touched.phone_number
                                      ? ' is-invalid'
                                      : '')
                                  }
                                  component={PhoneInputField}
                                />
                                <ErrorMessage
                                  name='phone_number'
                                  component='div'
                                  className='invalid-feedback'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='mb-3 mt-5'>
                            <div className='form-check'>
                              <label
                                className='form-check-label'
                                htmlFor='acceptTerms'
                              >
                                <p className='fw-bold mt-3 mb-0'>I Accept</p>
                              </label>
                              <Field
                                name='acceptTerms'
                                className={
                                  'form-check-input me-3 rounded-0 border-2' +
                                  (errors.acceptTerms && touched.acceptTerms
                                    ? ' is-invalid'
                                    : '')
                                }
                                type='checkbox'
                              />
                              <ErrorMessage
                                name='acceptTerms'
                                component='div'
                                className='invalid-feedback'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
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
                        type='submit'
                        onClick={() => {
                          setMessage('');
                          setClick(!click);
                        }}
                        className='btn btn-dark rounded-0 border-0 btn-css2 green'
                      >
                        Next
                        <img src='assets/img/arrow-w.png' alt='arrow' />
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
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
