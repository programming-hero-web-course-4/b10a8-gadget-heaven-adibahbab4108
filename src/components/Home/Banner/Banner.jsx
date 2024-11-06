import bannerImg from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <>
        
            <div className="h-screen">
                <div className=" bg-primary text-center rounded-xl px-12 pt-12 pb-48 mb-48 space-y-5 ">
                    <h1 className="text-6xl text-white font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="bg-white font-bold text-violet-500 rounded-full px-3 py-2">Shop Now</button>
                    <div className='relative pt-5'>
                        <div className='absolute w-96 md:w-4/6 left-1/2 transform -translate-x-1/2  z-10 '>
                            <div className=' border p-3 rounded-2xl backdrop-blur-lg '>
                                <img className=' rounded-xl ' src={bannerImg} alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;