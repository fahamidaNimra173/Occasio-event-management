// components/HeroBanner.jsx
import Image from "next/image";
import { Original_Surfer } from "next/font/google";
 
const surfer = Original_Surfer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-surfer',
});

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[600px] max-h-screen">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/assests/banner-1.jpg" // main background image
                    alt="Background"
                    fill
                    className="object-cover opacity-70" // transparency
                />
                {/* Left pink linear overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/100 via-black/30 to-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-row md:flex-row items-center h-full ">
                {/* Left text */}
                <div className="flex-1 pl-5 lg:pl-15 text-left text-white flex flex-col justify-center h-full">
                    <h1 className='text-4xl  md:text-6xl font-bold mb-4 text-shadow-2xs bg-gradient-to-r from-white via-white to-pink-600 bg-clip-text text-transparent'>
                       <span className={surfer.className}>Making Every Moment Unforgettable</span> 
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90">
                        We turn your special days into timeless stories.
                    </p>
                </div>

                {/* Right image container */}
                <div className="relative shadow-2xl top-20 lg:top-22 shadow-black w-[300px] md:w-[400px] lg:w-[500px] h-[400px] md:h-[500px] mt-8 md:mt-0">
                    {/* Main image */}
                    <Image
                        src="/assests/banner2.jpg"
                        alt="Main"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                    {/* Bottom-right image */}
                    <div className="absolute bottom-0 right-0 w-[120px] md:w-[250px] h-[120px] md:h-[200px]">
                        <Image
                            src="/assests/banner-3.jpg"
                            alt="Secondary"
                            fill
                            className="object-cover rounded-full border-1 border-white shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
