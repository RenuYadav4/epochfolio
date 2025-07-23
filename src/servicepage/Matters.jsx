import React from 'react'
import { GoHorizontalRule } from 'react-icons/go'
import {  GrNext, GrPrevious } from 'react-icons/gr'
import profile1 from '../assets/pooja.png'
import profile2 from '../assets/ravi.png'
import profile3 from '../assets/raj.png'

const Matters = () => {
    return (
        <div className='p-5 md:p-5 lg:px-20 xl:px-60 lg:font-normal flex flex-col gap-10 text-sm lg:text-md xl:text-[16px]'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-center'>
                    <GoHorizontalRule className='text-[#ED666E] font-extrabold text-2xl' />
                    <h4 className='text-xs md:text-lg'>BUILD YOUR DREAM WITH EXPERT'S HELP</h4>
                </div>
                <h1 className='text-[#E94D65] font-bold text-2xl md:text-5xl xl:text-6xl max-w-[200px] md:max-w-[40vw] xl:max-w-[30vw]'>
                    Build what <span className='text-[#FF7E56]'>Matters</span>
                </h1>
                <p className='max-w-[50vw] lg:max-w-[40vw]'>
                    Turn classroom experiences into career-launching portfolio that
                    impress recruiters and showcase true potential.
                </p>
            </div>

            <div className='md:flex justify-evenly gap-5'>
                <GrPrevious className='hidden md:block text-8xl'/>
                <div className='flex flex-col gap-5'>
                    <p>As a student with no clue where to start. I found EpochFolio's step-by-step tools
                        and portfolio templates incredibly helpful. It's like having a personal career coach -for free!
                    </p>

                    {/* profile */}
                    <div className='flex gap-2 md:gap-5'>
                        <img src={profile1} alt="" />
                        <div className='flex flex-col gap-2 md:gap-5'>
                            <span>- Pooja S.</span>
                            <p className='text-[#E94D65] font-semibold'>Final Year BBA Student</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <p>As a student with no clue where to start. I found EpochFolio's step-by-step tools
                        and portfolio templates incredibly helpful. It's like having a personal career coach -for free!
                    </p>

                    {/* profile */}
                    <div className='flex gap-2 md:gap-5'>
                        <img src={profile2} alt="" />
                        <div className='flex flex-col gap-2 md:gap-5'>
                            <span>- Ravi T.</span>
                            <p className='text-[#E94D65] font-semibold'>Engineering Graduate</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <p>As a student with no clue where to start. I found EpochFolio's step-by-step tools
                        and portfolio templates incredibly helpful. It's like having a personal career coach -for free!
                    </p>

                    {/* profile */}
                    <div className='flex gap-2 md:gap-5'>
                        <img src={profile3} alt="" />
                        <div className='flex flex-col gap-2 md:gap-5'>
                            <span>- Raj Singh</span>
                            <p className='text-[#E94D65] font-semibold'>HR Manager, TechCorp</p>
                        </div>
                    </div>
                </div>
                <GrNext className='text-8xl'/>

            </div>
        </div>
    )
}

export default Matters