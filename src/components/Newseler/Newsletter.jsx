

const Newsletter = () => {
    return (
        <div>
            <header className=" dark:bg-gray-900 mt-5 mb-5 rounded-2xl border  border-dashed border-gray-400 card-body bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-300 to-90% ...">

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-[#2ccb99] dark:text-white lg:text-4xl"> Signup To our <span className="text-gray-600">Newsletter</span></h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-500">Unlock the Best of AstraStay: Subscribe for Exclusive Updates, Deals, and Offers! <span className="font-medium text-blue-500"></span></p>

                                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                    <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-[#2ccb99] rounded-2xl">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full max-w-md" src="https://i.ibb.co/4MNscYR/2.png" alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Newsletter;