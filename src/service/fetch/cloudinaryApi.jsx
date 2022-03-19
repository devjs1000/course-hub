
import axios from "axios";
export const uploadImage=(selectedImage, func)=>{
  const formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("upload_preset", "ude8cxll");


    axios
      .post("https:/https://management-xcitedu.herokuapp.com.cloudinary.com/v1_1/dizvyn9b5/image/upload", formData)
      .then((response) => {
        console.log(response);
        const url=response.data.secure_url
        func(url)
      }).catch(err=>{
        func(err)
      })
}

