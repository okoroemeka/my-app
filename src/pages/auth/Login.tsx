import React, { useState} from 'react';
// import apiAgent from '../../lib/api';
import { useHistory } from "react-router-dom";
import Style from '../../components/auth';
import { Button } from '../../components/shared/StyledComponents'

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

const { Form } = Style
const Login = () => {
  const history = useHistory()
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // const [apiData, setApiData] = React.useState<State>({
  //   status: 'idle',
  //   data: {},
  //   error: {
  //     message: '',
  //   },
  // });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     setApiData((currentState) => ({ ...currentState, status: 'pending' }));

  //     const { data } = await apiAgent.post('/login', { ...state });
  //     setApiData((currentState) => ({
  //       ...currentState,
  //       status: 'resolved',
  //       data,
  //     }));

  //     window.localStorage.setItem('token', data.token);
  //   } catch (error) {
  //     setApiData((currentState) => ({
  //       ...currentState,
  //       status: 'rejected',
  //     }));
  //   }
  // };
  const handleSubmit = async () => {
    history.push("/products")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Login into your account</h2>
      {/* <ErrorMessage error={error} /> */}
      <fieldset>
        <label htmlFor='signin'>
          Email <br/>
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Enter Email'
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='signin'>
          Password <br/>
          <input
            type='password'
            name='password'
            autoComplete='password'
            placeholder='Enter password'
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <Button type='submit'>Login</Button>
      </fieldset>
    </Form>
  );
}

export default Login;
