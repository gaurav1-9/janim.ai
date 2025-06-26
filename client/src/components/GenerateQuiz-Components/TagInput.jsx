import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import Buttons from '../Buttons';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PulseLoader } from 'react-spinners';


const TagInput = ({ addTags, removeTag, tags, input, inpErr, setInput, tagList, isGenerating}) => {
    const errMsg = ["Enter at least 3 characters.", "Enter atleast one topic tag."]

    return (
        <div className='max-h-60 px-8 lg:pr-3 py-5 md:px-20 xl:pl-40 flex flex-col text-eerieBlack relative lg:w-6/11'>
            <p className={`text-sm lg:text-lg absolute z-10 -top-2 text-lightRed/70 font-semibold ${(inpErr.isErr) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} transition-all duration-300 ease-in-out`}>{errMsg[inpErr.errType]}</p>
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
                    className='min-w-[295px] grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack'
                    placeholder='Add topics (press Enter or Tab to add)...'
                />
            </div>
            <div className="hidden lg:flex flex-col relative items-end justify-end">
                <button
                    className={`bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md w-full lg:w-95 text-ivory font-semibold mt-3 lg:py-3 lg:text-xl cursor-pointer`}
                    onClick={tagList}
                >
                    {
                        (isGenerating)
                            ? <>
                                <p>Generating</p>
                                <PulseLoader
                                    color='#e8ebd1'
                                    size={8}
                                    loading={isGenerating}
                                />
                            </>
                            : <>
                                <p>Start the Quiz</p>
                                <FaArrowRightLong />
                            </>
                    }
                </button>
            </div>
        </div>
    )
}

export default TagInput