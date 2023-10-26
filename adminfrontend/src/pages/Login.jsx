import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios.post('http://localhost:3000/api/book/doctorlogin',{data: { username, password }})
      .then((response) => {
      })
      .catch((error) => {
        setMessage('Login failed. Please check your credentials.');
      });
  };
  return (
    <div class="flex w-full max-w-sm items-center justify-center mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
    <div class="hidden bg-cover lg:block lg:w-1/2" ></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="flex justify-center mx-auto">
            
        </div>

        <p class="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
        </p>
        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={handleEmailChange}/>
        </div>

        <div class="mt-4">
            <div class="flex justify-between">
                <label class="block mb-2 text-sm font-medium text-gray-600" for="loggingPassword">Password</label>
                <a href="#" class="text-xs text-gray-500  hover:underline">Forget Password?</a>
            </div>

            <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" onChange={handlePasswordChange}/>
        </div>

        <div class="mt-6">
            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              onClick={handleLogin}
            >
                Sign In
            </button>
        </div>
        {message && <p className="mt-4 text-red-500 text-center">{message}</p>}


    </div>
</div>
  )
}

export default Login