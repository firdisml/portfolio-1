export default function Home() {
  return (
    <>
      <div className="px-60  py-10 bg-zinc-900 h-screen">
        <div className="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
          <div className="bg-blue-700 rounded-2xl text-white">
            <div className="flex flex-col p-8 pt-24">
              <picture>
                <img
                  className="inline-block h-24 w-24 rounded-full object-cover"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </picture>
              <h1 className="mt-5 font-semibold text-xl">Hello, I am Winter</h1>
              <p className="mt-5 w-2/4 text-sm">Hey there! A large portion of my time is devoted to the creation of something i find fascinating,</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-2xl">
              <div className="flex justify-between pt-24 px-5 pb-5">
                <p className="font-semibold">Work</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-zinc-700 rounded-2xl">
              <div className="flex justify-between pt-24 px-5 pb-5">
                <p className="font-semibold text-white">Play</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-orange-500 rounded-2xl">
              <div className="flex justify-between pt-24 px-5 pb-5">
                <p className="font-semibold text-white">Resume</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-indigo-800 rounded-2xl">
              <div className="flex justify-between pt-24 px-5 pb-5">
                <p className="font-semibold text-white">Contact</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
