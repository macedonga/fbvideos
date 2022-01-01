import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function About() {
    const faq = [
        {
            "title": "Where are videos saved after being downloaded?",
            "description": "It depends on the OS and Browser you are using, but usually all videos are saved under the \"Downloads\" folder on Windows and Mac. You can also press CTRL+J in your Browser to view your download history."
        },
        {
            "title": "Why is the video playing instead of downloading?",
            "description": "That's a normal thing that might happen, especially on browsers that are not Chrome. To solve this issue, right click the video on the new tab, then click \"Save as...\" and choose the location you'd like to save the video to."
        },
        {
            "title": "Can I download Live Facebook videos?",
            "description": "Yes, you can download Facebook Live videos but only after they finish streaming."
        },
        {
            "title": "Does FBVIDEOS keep a copy of downloaded videos?",
            "description": "FBVIDEOS doesn't store videos neither we keep copies of downloaded videos. All videos are hosted on Facebook's servers."
        },
        {
            "title": "Does FBVIDEOS work on Android/iOS?",
            "description": "FBVIDEOS works perfectly on all mobile devices!"
        }
    ]

    return (
        <div className="my-16">
            <div className="w-full max-w-lg mx-auto dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg">
                <div className="rounded-t-md font-semibold p-2 dark:bg-gray-700 bg-gray-100 flex">
                    <QuestionMarkCircleIcon className="h-6 w-6 mr-1" /> Frequently Asked Questions
                </div>
                <div className="p-4 dark:border-gray-700 border-t-2 border-gray-200 grid gap-y-4">
                    {
                        faq.map((item, index) => (
                            <div key={index}>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={"flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:bg-gray-700 dark:text-white text-black bg-gray-300 " +
                                                    (open ? "rounded-t-lg" : "rounded-lg")
                                                }
                                            >
                                                <span>{item.title}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="p-4 text-sm dark:bg-gray-800 dark:text-white text-black bg-gray-200 rounded-b-lg">
                                                {item.description}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}