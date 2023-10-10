import React , { useState, useEffect } from 'react';
import data from './data.json';
import JobsList from './components/JobsList'

const Filter = (props) => {

  const filterName = props.filterName;
  const key = props.key;
  return (
    <div  className=' flex h-8 cursor-pointer rounded-[4px] bg-[#5CA5A5] bg-opacity-10 items-center'>
      <div className='pl-2 '>
        <p className='text-[#5CA5A5] opacity-100 bg-opacity-10 text-base font-bold tracking-[-0.123px] '>{filterName}</p>
      </div>
      <div  onClick={()=> props.filterRemove(key)} className='hover:bg-[#2B3939] bg-[#5CA5A5] w-8 h-8 flex items-center justify-center ml-2 rounded-r-[4px]'>
        <img src="./images/icon-remove.svg" alt="remove"  />
      </div>

    </div>
  )
}

const FilterBox = (props) => {
  let filterList = props.filterList;
  filterList = [...new Set(filterList)]
  return (

    <div className={`filter-container ${!filterList.length && "hidden"} flex justify-center relative top-[-36px]`}>
      {filterList.length && <div className="filter-content justify-between flex-wrap flex w-[1110px] h-[72px] bg-white rounded-[5px] shadow-[0px_15px_20px_-5px_rgba(13, 113, 130, 0.15)] items-center px-10">
        <div className='filter-array flex gap-4 float-left justify-start flex-wrap'>

          {filterList.map((filterName, index) => {
            return (
              <Filter filterRemove = {() => props.filterRemove(index)} key={index} filterName={filterName} />
            )
          })}
        </div>


        <div onClick={props.filterClear} className='filter-clear justify-end hover:text-[#5CA5A5] float-right text-right text-base font-bold  tracking-[-0.123px] text-[#7C8F8F] hover:underline cursor-pointer'>
          <p>Clear</p>
        </div>
      </div>}


    </div>

  )
}


function App() {

  const [jobData, setJobData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    // Load the data from data.json when the component mounts
    setJobData(data);
  }, []);




  const tagArray = (e) => {
    const tag = e.target.innerText;
    setFilterList(current =>
      [...new Set([...current, tag])] );
  }

  const filteredJobs = jobData.filter(job => {
    return (
      filterList.includes(job.role) ||
      filterList.includes(job.level) ||
      job.languages.some(language => filterList.includes(language))
    );
  });
  

  const filterClear = () => {
    setFilterList([]);
  }


  const filterRemove = (e) => {
    if (e >= 0 && e < filterList.length) {
      const updatedFilterList = [...filterList]; 
      updatedFilterList.splice(e, 1);
      setFilterList(updatedFilterList); 
    }
  }


  return (
    <div className="jobs-container bg-[#5CA5A5] bg-opacity-10" >
      <div className='jobs-content flex flex-col justify-center'>
        <div className="bg-[url('../public/images/bg-header-desktop.svg')] h-[156px] bg-[#5CA5A5] bg-no-repeat bg-cover w-full">

        </div>

        <FilterBox filterList={filterList} filterClear={filterClear} filterRemove={filterRemove}/>
        
        <div className={`flex flex-col gap-6 pb-40 ${!filterList.length && "mt-[72px]"}`} >
          {filteredJobs.length ?  filteredJobs.map((jobDetails, index) => {
            return (
              <JobsList key={index} jobDetails={jobDetails} tagArray={tagArray} />
            )
          }) : jobData.map((jobDetails, index) => {
            return (
              <JobsList key={index} jobDetails={jobDetails} tagArray={tagArray} />
            )
          })}


        </div>


      </div>

    </div>
  );
}

export default App;
