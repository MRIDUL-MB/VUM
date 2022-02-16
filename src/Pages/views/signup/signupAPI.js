export default function signupAPI(values) {
  const api = process.env.REACT_APP_BASE_URL;
  console.log(api);
  return fetch(process.env.REACT_APP_BASE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
}
