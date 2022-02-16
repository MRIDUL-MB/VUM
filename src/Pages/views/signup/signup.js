import { useEffect, useState } from 'react';
import Four from './Four';
import One from './One';
import Three from './Three';
import Two from './Two';

export default function Signup() {
  const [username, setUsername] = useState('');

  const [step, setStep] = useState(1);

  const prev = () => {
    setStep(step - 1);
  };

  const next = () => {
    setStep(step + 1);
  };

  const handleChange = () => (e) => {
    setUsername(e.target.value);
  };

  switch (step) {
    case 1:
      return (
        <One nextStep={next} handleChange={handleChange} username={username} />
      );
    case 2:
      return <Two prevStep={prev} nextStep={next} />;
    case 3:
      return <Three prevStep={prev} nextStep={next} username={username} />;
    case 4:
      return <Four />;

    default:
      console.log('nothing...');
  }
}
