import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QuizStatsMetaData = ({ quizDetails, quizStats, showDetailed, setShowDetailed }) => {
    return (
        <>
            <div className="mt-5 flex flex-col lg:flex-row justify-between gap-5">
                <div className="bg-chineseViolet text-ivory w-full md:w-95 h-36 p-2 relative flex items-center justify-center rounded-2xl shadow-[0_0_17px_rgba(0,0,0,0.25)]">
                    <div className='flex-col gap-2 scale-78 md:scale-100 pt-1 left-7 top-4 md:top-2 md:left-12 absolute'>
                        <p className='text-center text-2xl lg:text-3xl font-semibold'>Score</p>
                        <div className="flex justify-center items-center mt-6">
                            <svg width="327" height="188" viewBox="0 0 327 188" fill="none" className='w-40 h-20 absolute'>
                                <path d="M150.622 180.072C161.675 180.072 172.704 179.442 183.686 178.451C204.466 176.457 225.083 172.62 245.066 166.625C255.099 163.733 264.862 160.234 274.133 155.826C283.357 151.371 292.124 145.995 299.426 139.149C300.164 138.449 300.891 137.738 301.583 136.991L303.54 134.671L303.411 134.787C307.443 130.367 310.865 125.422 313.409 120.093C315.964 114.775 317.675 109.048 318.53 103.147C320.148 91.3217 318.39 79.0412 314.088 67.7753C311.568 61.2561 308.169 55.0751 304.009 49.4772C299.86 43.8909 294.867 38.8062 289.428 34.3395C278.493 25.3828 265.554 18.8519 251.923 14.4785C238.268 10.0702 223.934 7.93582 209.448 7.35271C194.961 6.75793 180.369 7.67941 165.812 9.26549C156.705 10.1985 141.281 12.7175 141.152 10.0701C141.093 8.69397 143.578 7.1779 148.114 5.73177C152.638 4.28564 159.202 2.92121 167.265 2.01155C186.768 -0.145981 206.705 -0.974132 226.419 1.59158C236.288 2.7928 246.016 5.03203 255.474 8.06424C260.174 9.67364 264.85 11.3645 269.363 13.4638C271.648 14.4317 273.84 15.6097 276.079 16.6943C277.18 17.2657 278.259 17.8955 279.349 18.4903C280.439 19.0851 281.529 19.6916 282.572 20.3564C295.031 27.8553 306.165 37.9082 314.065 50.4102C321.918 62.8423 326.524 77.3153 326.969 92.0914C327.18 99.4737 326.313 106.926 324.191 114.063C322.082 121.212 318.671 127.988 314.311 133.982C309.951 140 304.653 145.272 298.852 149.773C293.062 154.287 286.803 158.1 280.333 161.401C268.718 167.348 256.423 171.594 244.082 175.116C231.717 178.661 219.14 181.46 206.447 183.513C181.06 187.618 155.193 188.737 129.537 186.918C117.488 186.055 105.475 184.585 93.5785 182.428C81.6118 180.247 69.7859 177.051 58.3935 172.515C52.6973 170.264 47.1184 167.628 41.7386 164.584C36.3472 161.564 31.1785 158.077 26.3613 154.1C21.5208 150.146 17.1139 145.598 13.2813 140.56C9.46037 135.51 6.33098 129.889 4.04548 123.941C0.142551 113.678 -1.00612 102.226 0.904321 91.4616C2.68584 80.639 7.15136 70.4926 13.1405 61.5709C19.2001 52.6725 26.8067 44.8822 35.5502 38.6545C39.922 35.5407 44.5633 32.8117 49.439 30.5259C50.658 29.9661 51.9004 29.4295 53.131 28.9047L56.8815 27.5053C59.3546 26.5023 61.9331 25.826 64.4765 25.033C74.1342 22.2107 84.6943 20.9744 94.1059 19.7032L93.9418 19.6682C95.3951 19.7848 96.8602 19.8547 98.3605 19.878C99.849 19.9247 101.361 19.9832 102.896 20.0298C105.955 20.0298 109.05 20.2281 112.156 20.333C118.321 20.7645 124.486 21.4525 129.736 23.4234H129.748C130.697 23.6217 131.647 23.82 132.596 24.0182L135.421 24.7181C137.308 25.1613 139.171 25.6043 141 26.0358C149.403 27.9018 154.525 29.8028 156.787 31.0974C159.049 32.4152 158.416 33.255 155.252 33.8148C153.857 34.0597 154.959 35.3307 150.95 34.5143C150.939 34.5143 150.669 34.3745 150.669 34.3745L150.763 34.456C145.02 33.8145 138.89 32.3568 132.561 31.0507C126.244 29.7561 119.739 28.3683 113.468 27.8085C98.1261 26.3274 82.5495 27.0155 67.8168 31.0623L62.3667 32.7533C60.55 33.3364 58.8037 34.0944 57.0222 34.7475C53.4826 36.1237 50.1188 37.8033 46.8488 39.681C40.3204 43.4712 34.343 48.2061 29.0688 53.6057C23.7945 59.0054 19.2821 65.1398 15.7425 71.7524C12.1912 78.3533 9.68302 85.5021 8.55785 92.826C7.42096 100.138 7.66713 107.637 9.47209 114.775C11.3239 121.924 14.4767 128.746 18.8719 134.752C24.2047 142.181 31.1667 148.456 38.8906 153.669C46.6261 158.882 55.1117 163.068 63.9138 166.45C72.7277 169.833 81.8697 172.41 91.1523 174.311L94.6451 174.987L98.173 175.582C100.529 175.967 102.873 176.398 105.229 176.736C109.952 177.366 114.675 178.043 119.422 178.463C129.807 179.477 140.25 179.78 150.822 180.049L150.622 180.072Z" fill="currentColor" />
                            </svg>
                            <p className='text-2xl font-semibold w-22 text-center'>
                                {`${(quizStats.correct < 10) ? `0${quizStats.correct}` : quizStats.correct}
                            /
                            ${(quizDetails.quizQuestions.length < 10) ? `0${quizDetails.quizQuestions.length}` : quizDetails.quizQuestions.length}`}
                            </p>

                        </div>
                    </div>
                    <div className="h-9/10 w-1 rounded bg-ivory/30 ml-28 md:ml-34 mr-5 md:mr-7"></div>
                    <div className='flex justify-between flex-col'>
                        <p className='flex gap-2 text-lg md:text-xl lg:text-2xl'>
                            <span className='w-16 md:w-22 font-semibold'>Correct</span>
                            <span>:</span>
                            {(quizStats.correct < 10) ? `0${quizStats.correct}` : quizStats.correct}
                        </p>
                        <p className='flex gap-2 text-lg md:text-xl lg:text-2xl'>
                            <span className='w-16 md:w-22 font-semibold'>Wrong</span>
                            <span>:</span>
                            {(quizStats.wrong < 10) ? `0${quizStats.wrong}` : quizStats.wrong}
                        </p>
                        <p className='flex gap-2 text-lg md:text-xl lg:text-2xl'>
                            <span className='w-16 md:w-22 font-semibold'>Skipped</span>
                            <span>:</span>
                            {(quizStats.skipped < 10) ? `0${quizStats.skipped}` : quizStats.skipped}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col border-4 border-dashed border-chineseViolet text-chineseViolet w-full md:w-95 h-36 px-2 py-1 items-center justify-center rounded-2xl shadow-[0_0_17px_rgba(0,0,0,0.25)]'>
                    <p className='flex gap-2 text-2xl md:text-3xl font-semibold '>
                        +{quizDetails.pointsEarned} points earned
                    </p>
                    <div className="w-9/10 h-1 bg-platinum my-1 md:my-2"></div>
                    <p className='flex gap-2 text-lg md:text-xl'>
                        <span className='w-33 md:w-37 lg:w-44 font-semibold'>Total Quiz Time</span>
                        <span>:</span>
                        {quizDetails.totalQuizDuration} sec
                    </p>
                    <p className='flex gap-2 text-lg md:text-xl'>
                        <span className='w-33 md:w-37 lg:w-44 font-semibold'>Completed in</span>
                        <span>:</span>
                        {quizDetails.quizCompletionDuration} sec
                    </p>
                </div>
            </div>
            <div className='flex justify-center md:justify-start mt-3'>
                <div
                    className="w-fit flex items-center gap-1 cursor-pointer text-xl text-eerieBlack/60 hover:text-eerieBlack/53 font-semibold"
                    onClick={() => setShowDetailed(!showDetailed)}
                >
                    <span>View {(showDetailed) ? 'less' : 'detailed'}</span>
                    {
                        (showDetailed)
                            ? <IoIosArrowUp />
                            : <IoIosArrowDown />
                    }
                </div>
            </div>
        </>
    )
}

export default QuizStatsMetaData