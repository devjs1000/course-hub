import axios from "axios";

export async function askQuestion( courseId, question, func) {
  try{
    const { data } = await axios.post(`/api/discuss/askQuestion`, {courseId, question});
    func(data)
  }catch(err){
    func(data)
  }
}

export async function answerQuestion(userId, courseId, answer, func) {
    try{
      const { data } = await axios.post(`/api/discuss/answerQuestion`, {id:userId, courseId, answer});
      func(data)
    }catch(err){
      func(data)
    }
  }

  export async function getAllQuestionAnswers(courseId, func) {
    try{
      const { data } = await axios.get(`/api/discuss/getAllQuestionAnswers/${courseId}`);
      func(data)
    }catch(err){
      func(data)
    }
  }
  