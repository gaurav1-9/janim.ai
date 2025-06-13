import React from 'react'

const DekstopViewCategory = ({ category, changeCategory, quizCategory }) => {
    return (
        <div className="hidden lg:flex flex-col pl-15 absolute -top-36">
            <p className='text-lg text-chineseViolet pb-1'>Question Categories...</p>
            <div className="flex flex-col gap-10">
                <div
                    className={`px-5 xl:w-100 min-[1024px]:w-90 py-3 rounded-xl flex justify-between items-center border-3 ${(category.category === 'I') ? 'border-pistachio' : 'border-chineseViolet hover:scale-[1.02] hover:shadow-md'} ease-in-out duration-200 cursor-pointer`}
                    onClick={() => changeCategory(0)}
                >
                    <div className={`${(category.category === 'I') ? 'text-pistachio' : 'text-chineseViolet'}`}>
                        <p className='text-2xl font-semibold'>{quizCategory[0].questions}</p>
                        <p>{quizCategory[0].time}</p>
                    </div>
                    <div className={`${(category.category === 'I') ? 'bg-pistachio' : 'bg-chineseViolet'} py-1 px-2 rounded-lg flex flex-col items-center justify-center text-ivory font-semibold`}>
                        <p>+{quizCategory[0].points}</p>
                        <p>points</p>
                    </div>
                </div>

                <div
                    className={`px-5 xl:w-100 min-[1024px]:w-90 py-3 rounded-xl flex justify-between items-center border-3 ${(category.category === 'II') ? 'border-pistachio' : 'border-chineseViolet hover:scale-[1.02] hover:shadow-md'} ease-in-out duration-200 cursor-pointer`}
                    onClick={() => changeCategory(1)}
                >
                    <div className={`${(category.category === 'II') ? 'text-pistachio' : 'text-chineseViolet'}`}>
                        <p className='text-2xl font-semibold'>{quizCategory[1].questions}</p>
                        <p>{quizCategory[1].time}</p>
                    </div>
                    <div className={`${(category.category === 'II') ? 'bg-pistachio' : 'bg-chineseViolet'} py-1 px-2 rounded-lg flex flex-col items-center justify-center text-ivory font-semibold`}>
                        <p>+{quizCategory[1].points}</p>
                        <p>points</p>
                    </div>
                </div>

                <div
                    className={`px-5 xl:w-100 min-[1024px]:w-90 py-3 rounded-xl flex justify-between items-center border-3 ${(category.category === 'III') ? 'border-pistachio' : 'border-chineseViolet hover:scale-[1.02] hover:shadow-md'} ease-in-out duration-200 cursor-pointer`}
                    onClick={() => changeCategory(2)}
                >
                    <div className={`${(category.category === 'III') ? 'text-pistachio' : 'text-chineseViolet'}`}>
                        <p className='text-2xl font-semibold'>{quizCategory[2].questions}</p>
                        <p>{quizCategory[2].time}</p>
                    </div>
                    <div className={`${(category.category === 'III') ? 'bg-pistachio' : 'bg-chineseViolet'} py-1 px-2 rounded-lg flex flex-col items-center justify-center text-ivory font-semibold`}>
                        <p>+{quizCategory[2].points}</p>
                        <p>points</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DekstopViewCategory