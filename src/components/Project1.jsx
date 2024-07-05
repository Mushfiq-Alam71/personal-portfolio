import React from 'react';
import deel from '../assets/DramatixLabImages/portfolio1full.png'
import { FaArrowRight, FaCircle, FaExternalLinkAlt } from 'react-icons/fa';
import dramatixFull from '../assets/DramatixLabFull.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import StudentDashboard from '../assets/DramatixLabImages/employee_dashboard.png'
import instructorDashboard from '../assets/DramatixLabImages/employee_dashboard2.png'
import adminManageClass from '../assets/DramatixLabImages/hr_dashboard1.png'

import adminUserManeg from '../assets/DramatixLabImages/AdminManageUsers.png'
import updateProfile from '../assets/DramatixLabImages/admin_dashboard.png'


const Project1 = () => {
    return (
        <>
            <div className="card  bg-transparent text-gray-100 shadow-xl h-full">
                <figure className='image-wrap'><img src={deel} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>Deel</span> -  A Employee Management Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle  hover:bg-inherit hover:text-white" onClick={() => window.my_modal_4.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>


            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


                    <div className='lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 '>



                        <div className='lg:w-[50%]'>


                            <Carousel className=' text-white' showArrows={true} >
                                <div>
                                    <img src={StudentDashboard} />
                                </div>
                                <div>
                                    <img src={instructorDashboard} />
                                </div>
                                <div>
                                    <img src={adminManageClass} />
                                </div>
                                <div>
                                    <img src={updateProfile} />
                                </div>
                            </Carousel>

                            <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://b9-a12-client.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/Mushfiq-Alam71/deel-user-management.git"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/Mushfiq-Alam71/deel-user-management-server.git">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>


                        </div>
                        <div className='border '>


                        </div>


                        <div className='text-white lg:w-[50%] space-y-5 '>



                            <h1 className='text-xl font-bold'>Technologies</h1>
                            <p>React js, React router, React query, axios, Tailwind  CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>

                            <h1 className='text-xl font-bold'>Details</h1>


                            <p>Deel is an employee management system designed to streamline HR processes and provide a comprehensive platform for managing employee information, payroll, and administrative tasks. The system offers role-based access control to ensure that employees, HR personnel, and admins can perform their specific functions efficiently and securely.</p>




                            <h1 className='text-xl font-bold'>Key Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>Role-Based Access Control: Employee: Submit work reports, view payment history.</li>
                                <li>Secure Login System: Role-based login ensuring secure access to the dashboard for employees, HR, and admin.</li>
                                <li>Administrative Control: Admins have full control over the system, including the ability to manage user roles and oversee the entire employee management process.</li>
                                <li>HR Dashboard: Verify and approve employee details. Process and manage monthly salary payments. Access detailed employee information.</li>
                                <li>Admin Dashboard: Assign roles to users (employee, HR, admin). Terminate employees and HR personnel. Promote users to admin status.</li>
                                <li>Payment Management: HR can manage and track salary disbursements, ensuring timely and accurate payments.</li>
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

export default Project1;