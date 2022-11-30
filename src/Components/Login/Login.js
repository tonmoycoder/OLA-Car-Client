import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/MainContext';

const Login = () => {
  const { userSignIN, googleSignIN, loader, setLoader, SetUserState } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const froms = location.state?.from?.pathname || '/';
  const loginFromSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    userSignIN(email, password)
      .then((res) => {
        const userEmail = email;
        fetch(`https://ola-car-server.vercel.app/userData/${userEmail}`)
          .then((res) => res.json())
          .then((result) => {
            console.warn(result[0].accountType);
            SetUserState(result[0].accountType);
            localStorage.setItem('AccountStatus', result[0].accountType);
          });
        console.log(res);
        const UserData = {
          email: res.user?.email,
        };
        console.log(UserData);
        from.reset();
        toast.success('You are successfully login');
        navigate(froms, { replace: true });
      })
      .catch((error) => {
        setLoader(false);
        toast.error(error.message);
      });
  };

  const googleLoginButtonClicked = () => {
    googleSignIN(provider)
      .then((res) => {
        const email = res.user?.email;
        console.log(email);

        fetch(`https://ola-car-server.vercel.app/socialLogin/${email}`)
          .then((res) => res.json())
          .then((result) => {
            SetUserState(result.accountType);
            localStorage.setItem('AccountStatus', result.accountType);
          });

        fetch(`https://ola-car-server.vercel.app/userData/${email}`)
          .then((res) => res.json())
          .then((result) => {
            SetUserState(result[0].accountType);
            console.warn(result[0].accountType);
            localStorage.setItem('AccountStatus', result[0].accountType);
          });

        toast.success('you are successfully login');
        navigate(froms, { replace: true });
      })
      .catch((error) => {
        loader(false);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="login-from-main flex justify-center items-center mt-20 px-4 mb-20">
        <form className="w-[20rem] text-left" onSubmit={loginFromSubmit}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              required=""
            />
          </div>

          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="password"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required=""
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-full">
            Sign In
          </button>
          <div className="button-group mt-8">
            <button
              onClick={googleLoginButtonClicked}
              type="button"
              class="text-white w-full bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <svg
                class="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512">
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Sign in with Google
            </button>
          </div>
          <Link to="/register" className="font-general font-medium hover:text-blue-600">
            Don't have an account? Register Now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
