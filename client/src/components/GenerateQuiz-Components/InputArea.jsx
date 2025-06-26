import React, { useContext, useState } from 'react';
import TagInput from './TagInput';
import CategoryBranch from './CategoryBranch';
import QuizCategory from './QuizCategory';
import DataContext from '../../context/DataContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

const InputArea = () => {
    const navigate = useNavigate()
    const { user } = useContext(DataContext)
    const questionCategory = [
        {
            category: "I",
            points: "5",
            time: "60 seconds",
            questions: "05 to 10"
        },
        {
            category: "II",
            points: "10",
            time: "75 seconds",
            questions: "11 to 15"
        },
        {
            category: "III",
            points: "15",
            time: "90 seconds",
            questions: "16 to 20"
        }
    ]

    const [tags, setTags] = useState([]);
    const [inpErr, setInperr] = useState({
        isErr: false,
        errType: null,
    });
    const [input, setInput] = useState('');
    const [category, setCategory] = useState(questionCategory[0]);

    const [isGenerating, setIsGenerating] = useState(false)

    const addTags = (e) => {
        if ((e.key === "Enter" || e.key === "Tab") && input.trim() !== "") {
            if (input.length < 3) {
                setInperr({
                    isErr: true,
                    errType: 0,
                });
                setTimeout(() => {
                    setInperr(prev => ({
                        ...prev,
                        isErr: false,
                    }));
                    setTimeout(() => {
                        setInperr(prev => ({
                            ...prev,
                            errType: null,
                        }));
                    }, 300);
                }, 3600);
                return;
            }
            e.preventDefault();
            setTags([...tags, input.trim().replace(/\s+/g, '-')]);
            setInput("");
        }
    };

    const changeCategory = (index) => {
        setCategory(questionCategory[index]);
    }

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const tagList = async () => {
        if (!user) {
            navigate("/auth/login", { replace: true })
            return
        }
        if (!tags.length) {
            setInperr({
                isErr: true,
                errType: 1,
            });
            setTimeout(() => {
                setInperr(prev => ({
                    ...prev,
                    isErr: false,
                }));
                setTimeout(() => {
                    setInperr(prev => ({
                        ...prev,
                        errType: null,
                    }));
                }, 300);
            }, 3600);
            return;
        }
        setIsGenerating(true)
        const userInput = {
            ...category,
            tags: tags
        }

        try {
            const token = localStorage.getItem("token")
            const quizResponse = await axios.get(
                `${baseURL}/quiz/generate?qNo=${userInput.questions}&t=${userInput.tags}`,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            console.log(quizResponse.data)
            navigate("/quiz",{
                state:{
                    status: true,
                    quizList: quizResponse.data.questionList
                }
            })
        } catch (err) {
            console.log(err)
            setInperr({
                isErr: true,
                errType: 2,
            });
            setTimeout(() => {
                setInperr(prev => ({
                    ...prev,
                    isErr: false,
                }));
                setTimeout(() => {
                    setInperr(prev => ({
                        ...prev,
                        errType: null,
                    }));
                }, 300);
            }, 10000);
            return;
        }
        finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className='flex flex-col lg:flex-row w-full relative lg:pb-25 lg:mt-10'>
            <TagInput addTags={addTags} removeTag={removeTag} tags={tags} input={input} inpErr={inpErr} setInput={setInput} tagList={tagList} isGenerating={isGenerating} />
            <CategoryBranch category={category.category} />
            <QuizCategory category={category} changeCategory={changeCategory} quizCategory={questionCategory} tagList={tagList} isGenerating={isGenerating} />
        </div>

    );
};

export default InputArea;
