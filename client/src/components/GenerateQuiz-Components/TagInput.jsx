import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import Buttons from '../Buttons';
import { FaArrowRightLong } from 'react-icons/fa6';


const TagInput = ({ addTags, removeTag, tags, input, inpErr, setInput }) => {
    return (
        <div className='px-8 lg:pr-3 py-5 md:px-20 xl:pl-40 flex flex-col text-eerieBlack relative lg:w-6/11'>
            <p className={`text-sm lg:text-lg absolute z-10 -top-2 text-lightRed/70 font-semibold ${(inpErr) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} duration-300 ease-in-out`}>Enter at least 3 characters.</p>
            <div className="w-full lg:mt-2  px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg flex flex-wrap gap-2">
                {
                    tags.map((tagName, idx) => (
                        <div key={idx} className='py-1 px-3 bg-pistachio text-ivory rounded-3xl w-fit flex gap-2 items-center font-semibold'>
                            <p>{tagName}</p>
                            <RxCrossCircled
                                className='cursor-pointer text-xl hover:scale-[1.06]'
                                onClick={() => removeTag(idx)}
                            />
                        </div>
                    ))
                }
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value.toLowerCase())}
                    onKeyDown={addTags}
                    className='grow outline-none'
                    placeholder='Enter your topic here...'
                />
            </div>
            <div className="hidden lg:flex justify-end">
                <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='w-full lg:w-95' textColor='text-ivory' text='Generate a Quiz' goTo='/generate' otherResponsiveStyles='mt-3 lg:py-3 lg:text-xl' icon={<FaArrowRightLong />}/>
            </div>
        </div>
    )
}

export default TagInput