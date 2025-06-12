import React, { useState } from 'react';
import TagInput from './TagInput';
import CategoryBranch from './CategoryBranch';

const InputArea = () => {
    const [tags, setTags] = useState([]);
    const [inpErr, setInperr] = useState(false);
    const [input, setInput] = useState('');

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

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className='flex flex-col lg:flex-row w-full'>
            <TagInput addTags={addTags} removeTag={removeTag} tags={tags} input={input} inpErr={inpErr} setInput={setInput} />
            <CategoryBranch />
        </div>

    );
};

export default InputArea;
