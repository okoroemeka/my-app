import * as React from 'react';
import apiAgent from '../../lib/api';
import Style from './Style';

type error = {
  message: string;
};

type data = {
  token: string;
};

type status = 'idle' | 'pending' | 'resolved' | 'rejected';

interface State {
  status: status;
  data: data | {};
  error: error;
}

function Login() {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const [apiData, setApiData] = React.useState<State>({
    status: 'idle',
    data: {},
    error: {
      message: '',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setApiData((currentState) => ({ ...currentState, status: 'pending' }));

      const { data } = await apiAgent.post('/login', { ...state });
      setApiData((currentState) => ({
        ...currentState,
        status: 'resolved',
        data,
      }));

      window.localStorage.setItem('token', data.token);
    } catch (error) {
      setApiData((currentState) => ({
        ...currentState,
        status: 'rejected',
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  return (
    <Style.Form method='POST' onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>

      {/* <ErrorMessage error={error} /> */}
      <fieldset>
        <label htmlFor='signin'>
          Email
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='enter your email here'
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='signin'>
          Password
          <input
            type='password'
            name='password'
            autoComplete='password'
            placeholder='enter your password here'
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Sign In</button>
      </fieldset>
    </Style.Form>
  );
}

export default Login;
