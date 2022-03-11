import axios from "axios";

export async function askQuestion( courseId, question, func) {
  try{
    const { data } = await axios.post(`https://management-xcitedu.herokuapp.com/discuss/askQuestion`, {courseId, question});
    func(data)
  }catch(err){
    func(data)
  }
}

export async function answerQuestion(userId, courseId, answer, func) {
    try{
      const { data } = await axios.post(`https://management-xcitedu.herokuapp.com/discuss/answerQuestion`, {id:userId, courseId, answer});
      func(data)
    }catch(err){
      func(data)
    }
  }

  export async function getAllQuestionAnswers(courseId, func) {
    try{
      const { data } = await axios.get(`https://management-xcitedu.herokuapp.com/discuss/getAllQuestionAnswers/${courseId}`);
      func(data)
    }catch(err){
      func(data)
    }
  }
  