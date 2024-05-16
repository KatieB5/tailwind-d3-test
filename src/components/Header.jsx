import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../images/logo.png";
import { CurrentUserContext } from "../contexts/User";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  console.log(currentUser);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <img
            className="h-24 w-auto shadow rounded-lg align-middle border-none"
            src="../src/images/logo.png"
            alt="KatieB5"
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>
          <Link
            to={"/"}
            className="bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Home
          </Link>
          <Link
            to={"/abortionviews"}
            className="bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Abortion views
          </Link>
          <a
            href="#"
            className="bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            TBC
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
          >
            <div className="h-8 w-8 mr-2 bg-transparent text-emerald-500 border-2 border-emerald-500 rounded-full flex items-center justify-center">
              <img
                className="rounded-full"
                src={currentUser.avatar_url}
                alt="user profile picture"
              />
            </div>
            <span>Log in</span> <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">KatieB5</span>
              <img
                className="h-10 w-auto"
                src="../src/images/logo.png"
                alt="KatieB5"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/worldmap"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Abortion views
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  TBC
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
                >
                  <div className="h-8 w-8 mr-2 bg-transparent text-emerald-500 border-2 border-emerald-500 rounded-full p-1 flex items-center justify-center">
                    <img
                      className="rounded-full"
                      src={currentUser.avatar_url}
                      alt="user profile picture"
                    />
                  </div>
                  <span>Log in</span> <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
