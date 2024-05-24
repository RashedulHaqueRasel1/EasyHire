

const Subscribe = () => {
    return (
        <div>
            <section className="py-6 border-2 border-blue-400 hover:bg-blue-200 rounded-3xl ">

                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10  lg:space-x-12 lg:justify-between lg:flex-row ">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className=" text-2xl">Get hot job alert</h1>
                        <p className="text-5xl font-bold leading-none text-primary">Subscribe Us</p>
                    </div>

                    <div>
                        <label className="input input-bordered input-accent h-16 mr-1 lg:mr-24 flex items-center gap-2">
                            <input type="text" className="w-[450px] " placeholder="example@gmail.com" />
                            <button className="btn bg-primary hover:bg-transparent text-white hover:text-black hover:border-black ">Subscribe</button>
                        </label>
                    </div>



                </div>
            </section>

        </div>
    );
};

export default Subscribe;