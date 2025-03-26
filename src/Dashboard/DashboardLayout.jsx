import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const list = [
    {
      name: "Challenges",
      path: "/admin/challenges",
      icon: `<svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>`,
    },
    {
      name: "Challengers",
      path: "/admin/Challengers",
      icon: `<svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns=""
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>`,
    },
    {
      name: "Mentor Network",
      path: "/admin/mentor-network",
      icon: `<svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>`,
    },
    // {
    //   name: "Startup",
    //   path: "/admin/startup",
    //   icon: `<svg
    //               class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"
    //               xmlns=""
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //             >
    //               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" /> <path d="M15 5v-.13a2.96 2.96 0 0 0-.749-1.293l-1.414-1.414A2.96 2.96 0 0 0 12.13 0H15Z" /> <path d="M15 15v.13a2.96 2.96 0 0 0 1.293.749l1.414 1.414A2.96 2.96 0 0 0 17.87 19H15Z" /> <path d="M5 15v.13a2.96 2.96 0 0 0 .749 1.293l1.414 1.414A2.96 2.96 0 0 0 7.87 20H5Z" /> <path d="M15 15h.13a2.96 2.96 0 0 0 1.293-.749l1.414-1.414A2.96 2.96 0 0 0 19 12.13V15Z" /> <path d="M5 15h-.13a2.96 2.96 0 0 0-1.293-.749L2.707 12.87A2.96 2.96 0 0 0 1 12.13V15Z" /> <path d="M5 5h.13a2.96 2.96 0 0 0 .749-1.293L3.121 2.707A2.96 2.96 0 0 0 2.13 1h-.13Z" />
    //             </svg>`,
    // },
  ];
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            {list.map((menu) => (
              <li>
                <a
                  href={menu.path}
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <div dangerouslySetInnerHTML={{ __html: menu.icon }} />
                  <span class="ms-3">{menu.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}
