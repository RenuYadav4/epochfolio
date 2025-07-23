import React from 'react'
import { GoHorizontalRule } from 'react-icons/go'
import quote from '../assets/quote.png'
import Iconsgrid from './component/Iconsgrid'

const Impact = () => {
    return (
        <div
            className='bg-[#FFD196] h-[225vh] md:h-[130vh] lg:h-[180vh] xl:h-[145vh] relative overflow-hidden'
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 95%)'
            }}
        >            <div className='p-2   md:p-10 xl:px-60 flex flex-col md:gap-3'>
                <div className='flex gap-2 items-center'>
                    <GoHorizontalRule className='text-[#ED666E] font-extrabold text-2xl' />
                    <h4 className='text-xs md:text-lg'>WHAT MAKES EPOCHFOLIO DIFFERENT?</h4>
                </div>
                <h1 className='text-[#E94D65] font-bold text-2xl md:text-4xl xl:text-6xl max-w-[200px] md:max-w-[40vw] lg:max-w-[30vw]'>
                    Zero Cost, <span className='text-[#FF7E56]'>All Impact</span>
                </h1>

                {/* content */}
                <div className='relative'>
                    <img src={quote} alt="" className='h-25 w-25 ' />
                    <div className='mt-[-100px] md:mt-[-70px] absolute  md:flex gap-10 text-[8px] md:text-[12px]  lg:text-[14px]'>
                        <div className='flex flex-col gap-5'>
                            <p className='font-medium text-sm lg:text-[18px] p-5 '>EpochFolio is designed to be inclusive,
                                scalable, and student-first.
                            </p>

                            <p className='mt-[-12px]'>
                                Epochfolio was built by educators and industry
                                leaders who care deeply about student success
                                -not selling subscriptions. Our mission is to
                                empower every student with the tools and guidance
                                they need, at zero cost.
                            </p>

                            <p className='mt-5'>
                                No hidden fees. No trials. No upsells. We believe
                                oppurtunities should be accessible to all, regardless
                                of financial background. EpochFolio will always be  free
                                for students, colleges, and training partners.
                            </p>
                        </div>

                        {/* second box */}
                        <div className='flex flex-col gap-5'>
                            <p>
                                From resume builders to digital portfolios and recruiter-matching systems, our platform isn't just
                                about design-it's about delivering what hiring managers and comapnies actually look for in fresh talent.
                            </p>

                            <p>
                                Every module, assignment, and challange is designed in collaboration with industry experts.
                                This ensures students don't just learn-they grwo skills that are directly aligned with hiring needs.
                            </p>

                            <p>
                                TPOs and educators get powerful dashboards to track student growth, manage placement pipelines, and access curated
                                learning journeys-all in one place. We're focused on enabling colleges as we are on empowering students.
                            </p>
                        </div>

                        {/* third box */}
                        <div className='flex flex-col gap-5'>
                            <p>
                                We don't just help students "say" what they know -we help them show it.
                                Our guided tools enable real project-based outcomes, so every learner walks
                                away with a shareable, recruiter-ready portfolio.
                            </p>

                            <p>
                                Wherher you're university with 1,000 students or a small institute with 20, EpochFolio adapts to
                                your scale. The Plateform personalizes learning and insights without adding overhead or complexity.
                            </p>

                            <p >
                                We're building a grwoing network of students. educators, mentors, and hiring partners.
                                Through this collaborative ecosystem, every user gets a sense of belonging-and axxess to real oppurtunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="mt-100 md:mt-70 lg:mt-60 border-b-3 border-[#EFBF89] w-[92%]  lg:w-[70%] "></div>
            </div>
            <Iconsgrid/>
        </div>
    )
}

export default Impact