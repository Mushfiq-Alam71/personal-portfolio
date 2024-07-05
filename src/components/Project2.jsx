import React from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import stylespot from '../assets/StyleSpotCollection/portfolio2-full.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import collections from '../assets/StyleSpotCollection/allblogs.png'
import details from '../assets/StyleSpotCollection/addblogs.png'
import cart from '../assets/StyleSpotCollection/featuredblogs.png'
import checkOut from '../assets/StyleSpotCollection/StyleSpotChecOut.png'
import status from '../assets/StyleSpotCollection/StyleStatus.png'
import { Carousel } from 'react-responsive-carousel';

const Project2 = () => {
  return (
    <>


      <div className="card  bg-transparent text-gray-100 shadow-xl h-full">
        <figure className='image-wrap'><img className='object-center' src={stylespot} alt="Shoes" /></figure>
        <div className="card-body justify-end">
          <h1> <span className='text-2xl font-bold'>Bloomscape</span> -  A plant blog Website</h1>

          <div className="card-actions justify-end">
            <button className="btn btn-circle hover:bg-inherit hover:text-white " onClick={() => window.my_modal_5.showModal()}> <FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>





      <dialog id="my_modal_5" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


          <div className='lg:flex justify-between lg:space-x-5 space-y-5 lg:space-y-0'>



            <div className='lg:w-[50%]'>


              <Carousel className=' text-white' showArrows={true} >
                <div>
                  <img src={collections} />
                </div>
                <div>
                  <img src={details} />
                </div>
                <div>
                  <img src={cart} />
                </div>
                {/* <div>
                  <img src={checkOut} />
                </div>
                <div>
                  <img src={status} />
                </div> */}
              </Carousel>

              <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://b9-a11-client.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/Mushfiq-Alam71/bloomscape.git"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/Mushfiq-Alam71/bloomscape-server.git">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
              </div>


            </div>
            <div className='border '>


            </div>


            <div className='text-white lg:w-[50%] space-y-5 '>


              <h1 className='text-xl font-bold'>Technologies</h1>
              <p>React.js, React Router, React Query, Axios, Tailwind CSS, MongoDB, Express js, Firebase and JWT</p>


              <h1 className='text-xl font-bold'>Details</h1>


              <p>Welcome to Bloomscape, your go-to destination for all things related to plants and gardening. Whether you're a seasoned green thumb or just starting your journey with plants, our website offers a wealth of information, tips, and inspiration to help you cultivate your own indoor oasis.</p>


              <h1 className='text-xl font-bold'>Key Features</h1>
              <ul className='list-disc p-2 space-y-3'>
                <li>User Authentication: Enjoy a personalized experience by signing up or logging in using email and password, or through your Google, Facebook, or GitHub accounts.</li>
                <li>Plant Details: After signing in, users gain access to comprehensive plant details, including care tips, growth habits, and more, empowering them to nurture their plants effectively.</li>
                <li>Responsive Design: Bloomscape is designed to provide an optimal viewing and browsing experience across various devices, from small smartphones to large desktop screens.</li>
                <li>Blog Database: All blog details are fetched from a MongoDB database, ensuring a dynamic and constantly updated resource for plant enthusiasts to explore.</li>
                <li>Wishlist Management: Users can curate their own wishlist by adding items to it, facilitating easy organization and planning for their next plant purchases.</li>
              </ul>

            </div>



          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 -top-2">✕</button>
          </div>
        </form>
      </dialog>









    </>
  );
};

export default Project2;