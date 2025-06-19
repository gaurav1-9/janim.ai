import React from 'react'
import Buttons from '../Buttons'
import { FaArrowRightLong } from 'react-icons/fa6'

const MobileViewCategory = ({ category, changeCategory, tagList }) => {
    return (
        <div className="flex flex-col lg:hidden">
            <div className="mt-11 flex justify-center items-center w-full gap-11 md:gap-21 min-[425px]:gap-17 min-[375px]:gap-13 min-[425px]:pt-1 md:pt-4">
                <div
                    className={`flex flex-col justify-center items-center p-2 w-17 ${(category.category === 'I') ? 'bg-pistachio' : 'bg-chineseViolet'} text-ivory rounded-lg`}
                    onClick={() => changeCategory(0)}
                >
                    <p className='text-xs'>Category</p>
                    <p className='text-3xl font-semibold'>I</p>
                </div>
                <div
                    className={`flex flex-col justify-center items-center p-2 w-17 ${(category.category === 'II') ? 'bg-pistachio' : 'bg-chineseViolet'} text-ivory rounded-lg`}
                    onClick={() => changeCategory(1)}
                >
                    <p className='text-xs'>Category</p>
                    <p className='text-3xl font-semibold'>II</p>
                </div>
                <div
                    className={`flex flex-col justify-center items-center p-2 w-17 ${(category.category === 'III') ? 'bg-pistachio' : 'bg-chineseViolet'} text-ivory rounded-lg`}
                    onClick={() => changeCategory(2)}
                >
                    <p className='text-xs'>Category</p>
                    <p className='text-3xl font-semibold'>III</p>
                </div>
            </div>
            <p className='text-sm text-chineseViolet px-8 md:px-20 pt-4 pb-1'>Question Category...</p>
            <div className="px-8 md:px-20 text-sm text-chineseViolet">
                <div className="flex justify-between items-center border-2 rounded-xl px-4 py-2 mb-2">
                    <div>
                        <p className='text-xl leading-4 font-semibold pt-2'>{category.questions} Questions</p>
                        <p>{category.time}</p>
                    </div>
                    <div className='bg-chineseViolet text-ivory text-sm py-2 px-3 text-center rounded-lg font-semibold'>
                        <p>+{category.points}</p>
                        <p>points</p>
                    </div>
                </div>
            </div>
            <div className="px-8 md:px-20 lg:hidden mb-5">
                <button
                    className={`bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md w-full text-ivory font-semibold py-2 text-lg cursor-pointer`}
                    onClick={tagList}
                >
                    <p>Start the Quiz</p>
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    )
}

export default MobileViewCategory