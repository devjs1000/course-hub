import React, { useState } from 'react';

const Form = () => {
    const [basic,setBasic] = useState({})
    const [advantage,setAdvantage] = useState({})
    const [chapters,setChapters] = useState({})
    const [quiz,setQuiz] = useState({})
    const [image,setImage] = useState('')

    const getBasic= e=>{
        const name= e.target.name
        const value = e.target.value
        const newData = {...basic}
        newData[name]= value
        setBasic(newData)
    }
    const getAdvantage= e=>{
        const name= e.target.name
        const value = e.target.value
        const newData = {...advantage}
        newData[name]= value
        setAdvantage(newData)
    }
    const getChapters= e=>{
        const name= e.target.name
        const value = e.target.value
        const newData = {...chapters}
        newData[name]= value
        setChapters(newData)
    }
    const getQuiz= e=>{
        const name= e.target.name
        const value = e.target.value
        const newData = {...quiz}
        newData[name]= value
        setQuiz(newData)
    }
    const getimg= e=>{
        const value = e.target.value
        setImage(value)
    }

    const submitData=e=>{
        e.preventDefault()
        const data={...basic,advantages:[advantage],chapters:[chapters],quiz:[quiz],image}
        console.log(data)
    }
    return (
        <div>
            <form className='flex flex-col h-screen justify-between' onSubmit={submitData}>
                <input onChange={getBasic} name='name' placeholder='name' type="text" />
                <input onChange={getBasic} name='tagline' placeholder='tagline' type="text" />
                <input onChange={getBasic} name='type' placeholder='type' type="text" />
                <input onChange={getBasic} name='assignmentQuestion' placeholder='assignmentQuestion' type="text" />
                <input onChange={getBasic} name='price' placeholder='price' type="number" />
                <input onChange={getAdvantage} name='advantageName' placeholder='advantage name' type="text" />
                <input onChange={getChapters} name='chaptername' placeholder='chaptername' type="text" />
                <input onChange={getChapters} name='chapternumber' placeholder='chapternumber' type="number" />
                <input onChange={getChapters} name='chapterVideoLink' placeholder='chapterVideoLink' type="text" />
                <input onChange={getChapters} name='chapterVideoDescription' placeholder='chapterVideoDescription' type="text" />
                <input onChange={getChapters} name='chapterStudyMaterial' placeholder='chapterStudyMaterial' type="text" />
                <input onChange={getQuiz} name='question' placeholder='question' type="text" />
                <input onChange={getQuiz} name='correct' placeholder='correct' type="text" />
                <input onChange={getQuiz} name='incorrect' placeholder='incorrect' type="text" />
                <input onChange={getimg} name='image' placeholder='image link' type="text" />
                <textarea onChange={getBasic} name="description" placeholder='description' rows="5"></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;