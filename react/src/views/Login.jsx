import { useState } from "react";
import { Link, Links } from "react-router-dom";
import axiosClient from "../axios";
import { UseStateContext } from "../context/ContextProvider";




export default function Login() {
    const { setCurrentUser, setUserToken } = UseStateContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ __html: '' });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: '' })
        axiosClient.post('/login', {
            email,
            password,
        })
            .then(({ data }) => {
                setCurrentUser = data.user
                setUserToken = data.token
            })
            .catch((error) => {

                if (error.response) {
                    const finalErrors = Object.values(error.response.data.error).reduce((accum, next) => [...accum, ...next], [])
                    setError({ __html: finalErrors.join('') })
                }
                console.error(error);
            })
    }
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white"
                dangerouslySetInnerHTML={error}>

            </div>)}
            <form action="#" onSubmit={onSubmit} method="POST" className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>

                    <div className="mt-2">
                        <input
                            id="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Signup for free
                </Link>
            </p>
        </>
    )
}
