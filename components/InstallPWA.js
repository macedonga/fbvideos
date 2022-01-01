import { Transition } from "@headlessui/react";

export default function Cookie({ show, install, close }) {
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className="bottom-6 right-6 left-6 lg:left-auto fixed p-6 transition-all rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-2 border-gray-200 z-50"
            >
                <div className="flex">
                    <div
                        className="mr-8 my-auto hidden md:block"
                    >
                        <svg
                            width="32"
                            height="32"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            viewBox="0 0 24 24"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path d="M24 0v14h-2v-8h-20v16h12v2h-14v-24h24zm0 19h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:text-left text-center">
                        <h1 className="text-xl">Install our app</h1>
                        <p className="text-sm">
                            To get the best experience, you should install our app!
                            <br />
                            It takes 2 clicks and it's free!
                        </p>
                        <div className="mt-4 flex">
                            <button
                                onClick={() => {
                                    close();
                                }}
                                className="px-5 py-2 w-full font-semibold rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300"
                            >
                                No thanks
                            </button>
                            <button
                                onClick={() => {
                                    install();
                                }}
                                className="ml-2 px-5 py-2 w-full font-semibold rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300"
                            >
                                Install!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};