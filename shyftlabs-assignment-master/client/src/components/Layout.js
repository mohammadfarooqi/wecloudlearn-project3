import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from 'flowbite-react';
import Nav from './Nav';
import { cn } from '../utils';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef(null);

  useEffect(() => {
    const eventFunction = (event) => {
      if (event.target !== asideRef.current) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', eventFunction);

    return () => {
      window.removeEventListener('click', eventFunction);
    };
  }, []);

  const navItems = [
    { to: '/', text: 'Home' },
    { to: '/add-students', text: 'Add New Students' },
    { to: '/students', text: 'Students List' },
    { to: '/add-courses', text: 'Add New Courses' },
    { to: '/courses', text: 'Courses List' },
    { to: '/add-results', text: 'Add New Results' },
    { to: '/results', text: 'Results List' },
  ];

  return (
    <>
      <Nav />
      <button
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="flex">
        <aside
          id="default-sidebar"
          className={cn(
            'fixed sm:sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0',
            isOpen && 'translate-x-0'
          )}
          aria-label="Sidebar"
          ref={asideRef}
        >
          <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Sidebar aria-label="Default sidebar example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  {navItems.map((item, idx) => (
                    <Sidebar.Item href={item.to} key={idx}>
                      <p>{item.text}</p>
                    </Sidebar.Item>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </aside>

        <div
          className="p-4 flex-grow"
          style={{ backgroundColor: 'rgb(31 41 55' }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
