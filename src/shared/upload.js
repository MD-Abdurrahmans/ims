import axios from "axios";



const upload = (img) =>{


    const formImg = new FormData();

    formImg.append('image',img);



    const uploadImg =  axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAG_HOST_KEY}`,formImg)

    return uploadImg
}





export default upload