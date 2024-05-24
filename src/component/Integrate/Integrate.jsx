 
const Integrate = () => {
    return (
        <div>
            <section className="py-10   sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"> With over 6 years in business, we've been creating successful paths for job seekers and employers alike.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div className="hover:bg-blue-200 p-10 rounded-3xl ">
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                            <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                        </div>

                        <div className="hover:bg-blue-200 p-10 rounded-3xl  ">
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                            <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                        </div>

                        <div className="hover:bg-blue-200 p-10 rounded-3xl ">
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                            <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Integrate;