
export uploadImage=(selectedImage, func)=>{
  const formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("upload_preset", "ude8cxll");
  try{
    await axios
      .post("https://api.cloudinary.com/v1_1/dizvyn9b5/image/upload", formData)
      .then((response) => {
        const url=response.data.secure_url
        func(url)
    }
}catch(err){

}
}
