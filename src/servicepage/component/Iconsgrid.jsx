import React from 'react'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import portfoliobuilder from '../../assets/portfoliobuilder.png'
import readyprofiles from '../../assets/readyprofiles.png'
import allinone from '../../assets/allinone.png'

const Iconsgrid = () => {
    return (
        <div className=' p-4 md:flex md:mt-15 lg:mt-20 items-center justify-center lg:gap-10'>
            <div className='flex flex-col items-center gap-3 lg:gap-6 lg:max-w-[15vw]'>
                <div className='h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40  rounded-full border-4 border-dashed border-[#E94D65] flex items-center justify-center'>
                    <HiOutlineWrenchScrewdriver className='text-2xl md:text-5xl text-[#E94D65]' />
                </div>
                <span className='md:text-[18px] lg:text-[22px] text-[#FF7E56] font-bold'>Easy Apply Tools</span>
                <p className='text-center text-sm lg:text-[16px] lg:max-w-[20vw]'>Apply for internships and training in just a few clicks</p>
            </div>

            <div className='flex mt-4 md:mt-0 flex-col items-center gap-3 lg:gap-6 lg:max-w-[15vw]'>
                <div className='h-20 w-20 md:h-30 md:w-30 rounded-full border-4 lg:h-40 lg:w-40  border-dashed border-[#E94D65] flex items-center justify-center'>
                    <img src={portfoliobuilder} alt="" className='h-10 lg:h-15 text-[#E94D65]' />
                </div>
                <span className='md:text-[18px] lg:text-[22px] text-[#FF7E56] font-bold'>Portfolio Building</span>
                <p className='text-center text-sm lg:text-[16px] lg:max-w-[20vw]'>Enables students to showcase work and progress in real-time</p>
            </div>

            <div className='flex mt-4 md:mt-0 flex-col items-center gap-3 lg:gap-6 lg:max-w-[15vw] '>
                <div className='h-20 w-20 md:h-30 md:w-30 rounded-full border-4 lg:h-40 lg:w-40  border-dashed border-[#E94D65] flex items-center justify-center'>
                    <img src={allinone} alt="" className='h-10 lg:h-15 text-[#E94D65]' />
                </div>
                <span className='md:text-[18px] lg:text-[22px] text-[#FF7E56] font-bold'>All in one Place</span>
                <p className='text-center text-sm lg:text-[16px] lg:max-w-[20vw]'>Track, support and guide student development in one place.</p>
            </div>

            <div className='flex mt-4 md:mt-0 flex-col items-center gap-3 lg:gap-6 lg:max-w-[15vw]'>
                <div className='h-20 w-20 md:h-30 md:w-30 rounded-full border-4 lg:h-40 lg:w-40  border-dashed border-[#E94D65] flex items-center justify-center'>
                    <img src={readyprofiles} alt="" className='h-10 lg:h-15 text-[#E94D65]' />
                </div>
                <span className='md:text-[18px] text-[#FF7E56] lg:text-[22px] font-bold'>Recruiter-Ready Profiles</span>
                <p className='text-center text-sm  lg:text-[16px]  lg:max-w-[20vw]'>No fluff. Just what companies need- skills, projects, and proof.</p>
            </div>
        </div>
    )
}

export default Iconsgrid
