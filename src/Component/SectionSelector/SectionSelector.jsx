import React, { useContext, useEffect, useRef, useState } from 'react'
import './SectionSelector.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ScrollFilterContext } from '../../Context/FilterScroll/FilterScrollContex';
import { AlartContectValue } from '../../Context/AlartContext/AlartContext';

const SectionSelector = (props) => {
    const location = useLocation();
    const sectionRef = useRef();
    const {filtersection} = useContext(ScrollFilterContext);
    const{showAlart} = useContext(AlartContectValue);
    const navigate = useNavigate();
   
    const popup = ()=>{
         showAlart('Available Soon', '','mark');
    }
  
    // const gotofilter = () => {
    //   filtersection.scrollIntoView({ behavior: 'smooth' });
  
  
    // };
  
    
  
  return (
  <section id="section-selector">
  <div className="w-full">

    {/* Header */}
    <div className="flex items-center gap-4 mb-10!">
      <h2 className="text-2xl font-semibold text-[#1F2A44]">
        What We Offer
      </h2>

      {/* <div className="flex bg-[#EEF3FF] rounded-full p-1 text-xs">
        <span className="px-4 py-1 rounded-full bg-white shadow text-[#1F2A44] font-medium">
          Recently
        </span>
        <span className="px-4 py-1 text-gray-500">
          Added
        </span>
        <span className="px-4 py-1 text-gray-500">
          New
        </span>
      </div> */}
    </div>

    {/* Cards */}
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 sm:grid-cols-2">

      {/* Question Papers */}
      <div className="bg-white! border border-gray-200 professional-card p-4! sm:p-6! shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-300">
        <div>
          <h3 className="font-semibold text-[#1F2A44] mb-2!">
            Question Papers
          </h3>
          <p className="text-xs text-gray-500 mb-5!">
            Previous year exam papers for all departments.
          </p>
        </div>
        <button onClick={()=>navigate('/Filter')} className="w-fit px-4! py-1.5! professional-button bg-black hover:bg-gray-800 text-white! cursor-pointer text-sm font-medium shadow transition-all duration-200">
          Browse →
        </button>
      </div>

      {/* Notes */}
      <div className="bg-white! border border-gray-200 professional-card p-6! shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-300">
        <div>
          <h3 className="font-semibold text-[#1F2A44] mb-2!">
            Notes
          </h3>
          <p className="text-xs text-gray-500 mb-5!">
            Examination notes curated by toppers.
          </p>
        </div>
        <button onClick={()=>navigate("/Filter/Notes")} className="w-fit px-4! py-1.5! professional-button bg-black hover:bg-gray-800 text-white! cursor-pointer text-sm font-medium shadow transition-all duration-200">
          Browse →
        </button>
      </div>

      {/* Syllabus */}
      <div className="bg-white! border border-gray-200 professional-card p-6! shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-300">
        <div>
          <h3 className="font-semibold text-[#1F2A44] mb-2!">
            Syllabus
          </h3>
          <p className="text-xs text-gray-500 mb-5!">
            Updated syllabus for different courses.
          </p>
        </div>
        <button onClick={()=>navigate('/Filter/syllabus')} className="w-fit px-4! py-1.5! professional-button bg-black hover:bg-gray-800 text-white! cursor-pointer text-sm font-medium shadow transition-all duration-200">
          Browse →
        </button>
      </div>

      {/* Upload Question Papers */}
      <div className="bg-white! border border-gray-200 professional-card p-6! shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-300">
        <div>
          <h3 className="font-semibold text-[#1F2A44] mb-2!">
            Upload Question Papers
          </h3>
          <p className="text-xs text-gray-500 mb-5!">
            Help others by uploading your question papers.
          </p>
        </div>
        <button onClick={()=>navigate("/global-upload-question-paper")} className="w-fit px-4! py-1.5! professional-button bg-black hover:bg-gray-800 text-white! cursor-pointer text-sm font-medium shadow transition-all duration-200">
          Upload
        </button>
      </div>

    </div>
  </div>
</section>

    
  )
}

export default SectionSelector
