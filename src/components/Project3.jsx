import React from 'react';
import brainbox from '../assets/Toys/portfolio3full.png'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import collections from '../assets/Toys/canvas1.png'
import details from '../assets/Toys/canvas2.png'
import myToys from '../assets/Toys/ToysMy.png'
import allToys from '../assets/Toys/canvas3.png'
import addToys from '../assets/Toys/ToysAdd.png'

const Project3 = () => {
    return (
        <>

            <div className="card  bg-transparent text-gray-100 shadow-xl h-full">
                <figure className='image-wrap'><img src={brainbox} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>CanvasCreations</span> -  A painting selling Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle  hover:bg-inherit hover:text-white" onClick={() => window.my_modal_7.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>






            <dialog id="my_modal_7" className="modal ">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


                    <div className='lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 '>



                        <div className='lg:w-[50%]'>


                            <Carousel className=' text-white' showArrows={true} >
                                <div>
                                    <img src={collections} />
                                </div>
                                <div>
                                    <img src={details} />
                                </div>
                                <div>
                                    <img src={allToys} />
                                </div>
                                {/* <div>
                                    <img src={addToys} />
                                </div>
                                <div>
                                    <img src={myToys} />
                                </div> */}
                            </Carousel>

                            <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://b9-a10-b9c50.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/Mushfiq-Alam71/canvas-creation.git"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/BrainBox-Kiddo-Server">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>


                        </div>
                        <div className='border '>


                        </div>


                        <div className='text-white lg:w-[50%] space-y-5 '>


                            <h1 className='text-xl font-bold'>Technologies</h1>
                            <p>React.js, React Router, Tailwind, DaisyUi, Firebase, MongoDB, Express js.</p>

                            <h1 className='text-xl font-bold'>Details</h1>


                            <p>Welcome to CanvasCreation, your ultimate destination for purchasing exquisite paintings and drawings. Our website offers a seamless user experience with a wide range of features tailored to art enthusiasts and collectors.</p>


                            <h1 className='text-xl font-bold'>Key Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>User Authentication: Users can sign up or log in using email and password, or via their Google or GitHub accounts, ensuring a secure and personalized experience.</li>
                                <li>Painting Details: After signing in, users gain access to detailed information about each painting, allowing them to make informed purchasing decisions.</li>
                                <li>Responsive Design: CanvasCreation is designed to adapt to various screen sizes, ensuring optimal viewing and interaction across small, medium, and large devices.</li>
                                <li>Database Integration: All painting details are fetched from a MongoDB database, providing a dynamic and constantly updated collection for users to explore.</li>
                                <li>Item Management: Users can add new items to the database via the 'Add Item' page and update existing items, empowering them to curate their own collection effortlessly.</li>
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

export default Project3;