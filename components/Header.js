export default function Header() {
    return (
        <div className="dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-b-2 border-gray-200 w-full">
            <div className="max-w-4xl mx-auto w-full p-4 flex">
                <a href="/" className="font-semibold my-auto">
                    FBVIDEOS
                </a>
                
                <a href="https://ko-fi.com/macedonga" className="ml-auto font-semibold rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300 py-2 px-4">
                    Donate
                </a>
            </div>
        </div>
    );
}