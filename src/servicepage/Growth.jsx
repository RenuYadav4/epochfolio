import React from 'react'
import { GoHorizontalRule } from 'react-icons/go'
import heroImg from '../assets/growth.png'

const Growth = () => {
    return (
        <div className='flex'>
            <div class="hidden lg:block w-0 h-0 
  border-l-[70px] xl:border-l-[100px] border-l-transparent
  border-b-[140px] xl:border-b-[170px] border-b-[#F5F5F5]
  border-r-[70px] xl:border-r-[100px] border-r-transparent 
  rotate-[12deg]">
            </div>
            <div className='lg:flex'>
                <div className='text-xs md:text-lg xl:text-xl  p-4 md:p-8 lg:mt-7 lg:px-10 xl:mt-15 xl:ml-27'>
                    <div className='flex gap-2 items-center'>
                        <GoHorizontalRule className='text-[#FFBAA5] font-extrabold text-2xl' />
                        <h4>SHARE LAW SOLUTIONS</h4>
                    </div>

                    <h1 className='text-[#E94D65] font-bold text-2xl md:text-4xl xl:text-6xl max-w-[200px] md:max-w-[40vw]'>
                        Portfolio-Driven <span className='text-[#FF7E56]'>Growth</span>
                    </h1>
                    <div className='flex flex-col gap-6 xl:gap-10 mt-2 xl:mt-6 font-normal  lg:text-[10px] xl:text-[14px]'>
                        <p>
                            Whether you're a college training center,
                            or student, our system simplifies career
                            preparation by integrating skill-building,
                            digital presence, and employer engagement
                            into a seamless experience.
                        </p>

                        <div className="hidden lg:block border-t mt-[-18px] border-gray-300 w-full "></div>

                        <div className='flex mt-2 gap-2 xl:gap-12 '>
                            <p>
                                At Epochfolio, we don't just prepare students for jobs — we prepare
                                them for purpose. We believe career success starts with clarity and
                                confidence, not just qualifications. That's why our services are designed
                                to empower students to explore their strengths, align with industry needs,
                                and build a future they're proud of.
                            </p>

                            <p>
                                Our platform offers powerful tools like digital portfolio builders, skills-
                                matching systems, and recruiter-ready templates — all curated by industry experts.
                                With real-world exposure and mentorship integrated at every step, we ensure
                                students not only get noticed but truly stand out in today's competitive job market.
                            </p>
                        </div>
                    </div>

                </div>

                {/* hero image */}
                <img src={heroImg} alt="" className='h-[45vh] md:h-[50vh] lg:h-[75vh] lg:w-[55vw] xl:h-[85vh] xl:w-[65vw] mt-5 lg:mt-0 w-full ' />
            </div>
        </div>
    )
}

export default Growth
