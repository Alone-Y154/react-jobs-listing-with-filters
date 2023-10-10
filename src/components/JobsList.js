const JobsList = (props) => {

    const jobDetails = props.jobDetails
    return (
        <div className="job-list-container flex justify-center">
            <div className={`job-list-content ${jobDetails.featured && "border-l-[5px] border-[#5CA5A5]"} items-center flex w-[1110px] h-[152px] rounded-[5px] bg-white shadow-[0px_15px_20px_-5px_rgba(13, 113, 130, 0.15) justify-between`}>
                <div className="flex">


                    <div className="company-logo ml-10 mr-6">
                        <img src={jobDetails.logo} alt="logo" />
                    </div>

                    <div className="company-details flex flex-col">
                        <div className="company-name flex items-center">
                            <p className="text-[#5CA5A5] text-lg mr-4 font-bold">{jobDetails.company}</p>
                            {jobDetails.new && <p className="h-6 bg-[#5CA5A5] mr-2 rounded-xl text-white text-sm tracking-[-0.108px] uppercase text-center font-bold px-2 py-[2px]">New!</p>}
                            {jobDetails.featured && <p className="h-6 bg-[#2B3939] rounded-xl text-white text-sm tracking-[-0.108px] uppercase text-center font-bold px-2 py-[2px]">FEATURED</p>}
                            
                        </div>

                        <div className="mt-[10px] mb-2 job-role">
                            <p className="hover:text-[#5CA5A5] cursor-pointer text-black text-[22px] font-bold leading-6">{jobDetails.position}</p>
                        </div>

                        <div className="job-location-details flex items-center gap-4">
                            <p className="text-[#7C8F8F] text-lg font-medium leading-6 tracking-[-0.138px] ">{jobDetails.postedAt}</p>
                            <p className="w-1 h-1 bg-[#B7C4C4] rounded-full"></p>
                            <p className="text-[#7C8F8F] text-lg font-medium leading-6 tracking-[-0.138px] ">{jobDetails.contract}</p>
                            <p className="w-1 h-1 bg-[#B7C4C4] rounded-full"></p>
                            <p className="text-[#7C8F8F] text-lg font-medium leading-6 tracking-[-0.138px] ">{jobDetails.location}</p>
                        </div>

                    </div>

                </div>

                <div className="job-tag flex gap-4 mx-10">

                    {/* role */}
                    <div  onClick={props.tagArray} className='flex h-8 cursor-pointer rounded-[4px] bg-[#5CA5A5] bg-opacity-10 items-center'>
                        <div className='px-[10px] ' >
                            <p className='text-[#5CA5A5] opacity-100 bg-opacity-10 text-base font-bold tracking-[-0.123px] '>{jobDetails.role}</p>
                        </div>
                    </div>

                    {/* level */}
                    <div  onClick={props.tagArray} className='flex h-8 cursor-pointer rounded-[4px] bg-[#5CA5A5] bg-opacity-10 items-center' >
                        <div className='px-[10px] '>
                            <p className='text-[#5CA5A5] opacity-100 bg-opacity-10 text-base font-bold tracking-[-0.123px] '>{jobDetails.level}</p>
                        </div>
                    </div>

                    {/* languages */}

                    {jobDetails.languages.map(lan => {
                        return(
                            <div  onClick={props.tagArray} className='flex h-8 cursor-pointer rounded-[4px] bg-[#5CA5A5] bg-opacity-10 items-center'>
                            <div className='px-[10px] ' >
                                <p className='text-[#5CA5A5] opacity-100 bg-opacity-10 text-base font-bold tracking-[-0.123px] '>{lan}</p>
                            </div>
                        </div>
                        )
                    })}

                   


                </div>




            </div>
        </div>
    )
}


export default JobsList;