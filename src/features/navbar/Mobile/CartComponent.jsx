import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CartItem from '../Cart/CartItem';
import CourseCartItem from '../Cart/CourseCartItem';
import ClearCart from '@/api/ClearCart';
import { getCartTotal, getItems } from '@/redux/actions/cart/cart';
import Button from '@/components/Button';

export default function CartComponentButton() {
  const [open, setOpen] = useState(false);

  const [effectClick, setEffectClick] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const courses = useSelector((state) => state.cart.courses);
  const products = useSelector((state) => state.cart.products);
  const amountBeforeDiscounts = useSelector((state) => state.cart.amount);
  const totalAmount = useSelector((state) => state.cart.compare_amount);
  // const totalAmountEth = useSelector((state) => state.cart.total_cost_ethereum);
  const stxCost = useSelector((state) => state.cart.stxCost);
  const taxEstimate = useSelector((state) => state.cart.tax_estimate);
  const shippingEstimate = useSelector((state) => state.cart.shipping_estimate);

  return (
    <>
      {/* Cart */}
      <li className="relative">
        <button
          type="button"
          onMouseDown={() => {
            setEffectClick(true);
          }}
          onClick={() => {
            setOpen(true);
          }}
          onMouseUp={() => setEffectClick(false)}
          className={`${
            effectClick &&
            'duration-400 animate-click hover:translate-x-0.5  hover:translate-y-0.5 hover:shadow-neubrutalism-sm '
          } inline-flex items-center justify-center 
          border
        border-dark-bg
        bg-white 
          p-2.5
          text-sm 
          font-bold 
          shadow-neubrutalism-sm 
          transition 
          duration-300 
          ease-in-out
          hover:-translate-x-0.5  hover:-translate-y-0.5 hover:bg-gray-50 hover:text-iris-600  
          hover:shadow-neubrutalism-md
        dark:border-dark-third dark:bg-dark-second dark:text-dark-txt dark:hover:text-white `}
        >
          <ShoppingCartIcon className=" h-5 w-5 " aria-hidden="true" />
          {cartItems && cartItems.length > 0 && (
            <span className="absolute top-0 ml-4 rounded-full bg-iris-600 px-2 text-center text-xs font-semibold text-white md:ml-4">
              {cartItems.length}
            </span>
          )}{' '}
        </button>
      </li>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll dark:bg-dark-main bg-white py-6 shadow-md">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="text-lg font-medium dark:text-dark-txt text-gray-900">
                            Cart
                            {cartItems && cartItems.length > 0 && (
                              <button
                                type="button"
                                onClick={() => {
                                  // eslint-disable-next-line
                                  if (window.confirm('Are you sure you want to clear your cart?')) {
                                    ClearCart();
                                    dispatch(getItems()).then(dispatch(getCartTotal(cartItems)));
                                  }
                                }}
                                className="ml-2 cursor-pointer text-sm font-medium dark:text-dark-accent text-iris-500 hover:text-iris-600"
                              >
                                Clear cart
                              </button>
                            )}
                          </div>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="focus:ring-indigo-500 focus:ring-none rounded-md dark:text-dark-txt text-gray-400 hover:text-gray-500 focus:outline-none"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <ul className="w-full space-y-1">
                            {courses &&
                              courses.length > 0 &&
                              courses.map((course) => (
                                <CourseCartItem
                                  key={course.slug}
                                  data={course}
                                  cartItems={cartItems}
                                />
                              ))}
                            {products &&
                              products.length > 0 &&
                              products.map((product) => (
                                <CartItem key={product.slug} data={product} cartItems={cartItems} />
                              ))}
                          </ul>

                          <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-lg  px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                          >
                            <p
                              id="summary-heading"
                              className="text-lg font-medium dark:text-dark-txt text-gray-900"
                            >
                              Order summary
                            </p>

                            <dl className="mt-6 space-y-4">
                              <div className="flex items-center justify-between">
                                <dt className="text-sm dark:text-dark-txt-secondary text-gray-600">
                                  Total
                                </dt>
                                <dd className="text-sm font-medium dark:text-dark-txt text-gray-900">
                                  ${amountBeforeDiscounts}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between">
                                <dt className="text-sm dark:text-dark-txt-secondary text-gray-600">
                                  SubTotal
                                </dt>
                                <dd className="text-sm font-medium dark:text-dark-txt text-gray-900">
                                  ${totalAmount}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-border pt-4">
                                <dt className="flex items-center text-sm dark:text-dark-txt-secondary text-gray-600">
                                  <span>Shipping estimate</span>
                                </dt>
                                <dd className="text-sm font-medium dark:text-dark-txt text-gray-900">
                                  ${shippingEstimate}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-border pt-4">
                                <dt className="flex text-sm dark:text-dark-txt-secondary text-gray-600">
                                  <span>Tax estimate</span>
                                </dt>
                                <dd className="text-sm font-medium dark:text-dark-txt text-gray-900">
                                  ${taxEstimate}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-border pt-4">
                                <dt className="text-base font-medium dark:text-dark-txt text-gray-900">
                                  Order total
                                </dt>
                                <dd className="text-base font-medium dark:text-dark-txt text-gray-900">
                                  ${finalPrice}
                                </dd>
                              </div>
                              {/* <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-border pt-4">
                                <dt className="text-base font-medium text-gray-900" />
                                <dd className="text-base font-medium text-gray-900">
                                  ETH {totalAmountEth}
                                </dd>
                              </div> */}
                              <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-border pt-4">
                                <dt className="text-base font-medium dark:text-dark-txt text-gray-900" />
                                <dd className="text-base font-medium dark:text-dark-txt text-gray-900">
                                  STX {stxCost}
                                </dd>
                              </div>
                            </dl>

                            <div className="mt-6">
                              {cartItems && cartItems.length > 0 ? (
                                <Link href="/checkout">
                                  <Button type="button">Checkout</Button>
                                </Link>
                              ) : (
                                <Button disabled type="button">
                                  Checkout
                                </Button>
                              )}
                              <p className="items-center text-center teext-medium mt-10 dark:text-dark-accent text-iris-600">
                                <Link href="/cart">Go to Cart</Link>
                              </p>
                            </div>
                          </section>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
