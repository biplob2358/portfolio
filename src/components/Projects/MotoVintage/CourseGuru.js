import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import Header from '../../Header/Header';
import course1 from '../../../Assets/Projects/CoureseGuru/1.png'
import course2 from '../../../Assets/Projects/CoureseGuru/2.png'
import course3 from '../../../Assets/Projects/CoureseGuru/3.png'

const CourseGuru = () => {
    return (
        <div>
            <Header></Header>
            <section className="pt-6 w-full mx-auto dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                        <img data-aos="fade-up-right" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course1} alt='' />
                        <img data-aos="flip-down" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course2} alt='' />
                        <img data-aos="fade-up-left" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course3} alt='' />

                    </div>
                </div>
            </section>
            <div className="card hero container w-full mx-auto text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-4xl mb-4">Course Guru</h2>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Course Guru is an educational Website</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>There are six Course</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Course Guru is fully responsive on mobile,tablet and pc</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>There are responsive navbar</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>There are FAQ page
                    </span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>In Blogs there are 4 question which is also responsive </span></p>
                    <p className='mb-2 text-xl'>???????????????????????????????????????? ????????????????: HTML, CSS, Bootstrap, React. js, React Router, React Bootstrap, Firebase, Node. js, ExpressJS</p>
                    <div className="card-actions">
                        <a href="https://course-guru-94acd.web.app/" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Live Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/biplob2358/course-guru-client" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Client Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/biplob2358/course-guru-server" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Sever Site
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseGuru;