import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  EnvelopeIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import CircleLoader from 'react-spinners/CircleLoader';
import slugify from 'react-slugify';
import { useSelector, useDispatch } from 'react-redux';
import { register, resetRegisterSuccess } from '../../../redux/actions/auth/auth';
import Head from 'next/head';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Risetalk - Signup',
  description:
    'Explore a new world of possibilities with Risetalk, the innovative NFT marketplace that enables you to discover, purchase, and sell a variety of items, ranging from online courses to physical products and beyond, all using the cutting-edge ERC1155 technology.',
  href: '/',
  url: 'https://risetalk.com',
  keywords: 'nft marketplace, stx nfts, risetalk nfts, sell nfts online',
  robots: 'all',
  author: 'Risetalk',
  publisher: 'Risetalk',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  twitterHandle: '@Risetalk',
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const [agreed, setAgreed] = useState(false);

  const toggleAgreed = () => {
    if (agreed) {
      setAgreed(false);
    } else {
      setAgreed(true);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetRegisterSuccess());
  }, [dispatch]);

  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    rePassword: '',
  });

  const { firstName, lastName, email, username, password, rePassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register(firstName, lastName, email, slugify(username), password, rePassword, agreed));
  };

  return (
    <>
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content="Risetalk Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-dark-bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <p className="mb-6 pt-8 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-dark-txt">
            Signup and start your adventure
          </p>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300 dark:border-dark-second" />
            </div>
            <div className="relative flex justify-center" />
          </div>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4 sm:px-10">
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="First name"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="Last name"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IdentificationIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="Username"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="email@example.com"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="Password"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="rePassword"
                  value={rePassword}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-md duration block w-full border focus:ring-none focus:outline-none border-dark py-3 pl-10 font-medium shadow-neubrutalism-xs transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="Repeat Password"
                />
              </div>

              <div className=" px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="mt-2 flex">
                    <input
                      className="form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out"
                      type="checkbox"
                      id="show-agreed"
                      onChange={toggleAgreed}
                    />
                    <label
                      className="ml-2 flex text-sm leading-5 text-gray-900 focus-within:text-blue-800"
                      htmlFor="show-agreed"
                    >
                      {agreed ? (
                        <span className="inline-flex text-gray-900 dark:text-dark-txt">
                          Don&apos;t send me emails
                        </span>
                      ) : (
                        <span className="inline-flex text-gray-900 dark:text-dark-txt">
                          Send me emails
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="mt-2 flex">
                      <input
                        className="form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out"
                        type="checkbox"
                        id="show-password"
                        onChange={toggleShowPassword}
                      />
                      <label
                        className="ml-2 flex text-sm leading-5 text-gray-900 focus-within:text-blue-800"
                        htmlFor="show-password"
                      >
                        {showPassword ? (
                          <span className="inline-flex text-gray-900 dark:text-dark-txt">
                            Hide password
                          </span>
                        ) : (
                          <span className="inline-flex text-gray-900 dark:text-dark-txt">
                            Show password
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {loading ? (
                  <button
                    type="button"
                    className="text-md focus:ring-none inline-flex 
                      w-full
                      items-center
                      justify-center 
                      border
                      border-dark-bg 
                    bg-white dark:bg-dark-primary rounded-2xl dark:text-dark-txt
                      px-4 
                      py-3 
                      text-sm 
                      font-bold
                      text-dark
                      shadow-neubrutalism-sm transition
                      duration-300
                      ease-in-out  hover:-translate-x-0.5  hover:-translate-y-0.5  hover:bg-gray-50 hover:shadow-neubrutalism-md "
                  >
                    <CircleLoader loading={loading} size={25} color="#1c1d1f" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="
                    text-md focus:ring-none inline-flex 
                    w-full
                    items-center
                    justify-center 
                    border
                    border-dark-bg 
                    bg-white dark:bg-dark-primary rounded-2xl dark:text-dark-txt
                    px-4 
                    py-3 
                    text-sm 
                    font-bold
                    text-dark
                    shadow-neubrutalism-sm transition
                    duration-300
                    ease-in-out  hover:-translate-x-0.5  hover:-translate-y-0.5  hover:bg-gray-50 hover:shadow-neubrutalism-md  "
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
            <div className="mt-4 flex items-center justify-center">
              <div className="text-sm">
                <span className="text-md font-medium text-gray-900 dark:text-dark-txt">or </span>
                <Link
                  href="/auth/resend_activation"
                  className="text-md font-medium text-orange-500 dark:text-dark-accent hover:text-orange-600"
                >
                  Resend activation email
                </Link>
              </div>
            </div>
            <div className="my-2 flex items-center justify-center">
              <div className="text-sm">
                <span className="text-md font-base text-gray-900 dark:text-dark-txt">
                  Already have an account?{' '}
                </span>
                <Link
                  href="/auth/login"
                  className="text-lg font-medium text-orange-500 dark:text-dark-accent underline hover:text-orange-600"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              By registering you agree to the{' '}
              <Link href="/privacy" className="font-base  underline">
                <span className="text-gray-500">Privacy Policy</span>
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="font-base  underline">
                <span className="text-gray-500">Terms of Service</span>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Signup.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
