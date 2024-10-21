import Hero from "@/components/Hero"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"



const Home= () => {
  return (
   <>
     <section className="px-6 md:px-20 py-24 " >
        <div className="flex max-xl:flex-col gap-16">
           <div className=" flex flex-col justify-center"> 
              <p className="small-text">
                 Smart Shopping Starts Here
                 <Image
                   src="/assets/icons/arrow-right.svg"
                   alt="arrow-right"
                   width={16}
                   height={16}
                   className="cursor-pointer "
                 />
              </p>

                <h1 className="head-text">
                Discover Deals with 
                <span className="text-primary"> PricePatrol</span>
                </h1>
                <p className="mt-6  text-gray-500"> 
                Track product prices, set alerts for discounts, and never miss a drop.
                PricePatrol helps you save on your favorite items by monitoring price trends across top stores.
                </p>

                <Searchbar/>
           </div>

           <Hero/>
           {/* <div>
                <Image 
                   src='/assets/images/hero-1.svg'
                   width={400}
                   height={400}
                   alt=""
                />
              </div> */}
        </div>
     </section>

     <section className="trending-section"> 
            <h2 className="section-text">Trending</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-16">
                {['Apple Iphone','Book', 'Sneakers'].map((product)=>(
                  <div>{product}</div>
                ))}
            </div>
     </section>
   </>
  )
}

export default Home