import React, { useState } from 'react';
import TagInput from './TagInput';
import CategoryBranch from './CategoryBranch';
import QuizCategory from './QuizCategory';

const InputArea = () => {
    const questionCategory = [
        {
            category: "I",
            points: "5",
            time: "08 minutes",
            questions: "05 to 10 Questions"
        },
        {
            category: "II",
            points: "10",
            time: "12 minutes",
            questions: "11 to 15 Questions"
        },
        {
            category: "III",
            points: "20",
            time: "20 minutes",
            questions: "16 to 30 Questions"
        }
    ]

    const [tags, setTags] = useState([]);
    const [inpErr, setInperr] = useState(false);
    const [input, setInput] = useState('');
    const [category, setCategory] = useState(questionCategory[0]);

    const show = ()=>{console.log(category)}

    const addTags = (e) => {
        if ((e.key === "Enter" || e.key === "Tab") && input.trim() !== "") {
            if (input.length < 3) {
                setInperr(true);
                setTimeout(() => {
                    setInperr(false)
                }, 3600);
                return;
            }
            e.preventDefault();
            setTags([...tags, input.trim().replace(/\s+/g, '-')]);
            setInput("");
        }
    };

    const changeCategory = (index)=>{
        setCategory(questionCategory[index]);
        show()
    }

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className='flex flex-col lg:flex-row w-full relative lg:pb-25 lg:mt-10'>
            <TagInput addTags={addTags} removeTag={removeTag} tags={tags} input={input} inpErr={inpErr} setInput={setInput} />
            <CategoryBranch category={category.category}/>
            <QuizCategory category={category} changeCategory={changeCategory} quizCategory={questionCategory}/>
        </div>

    );
};

export default InputArea;
