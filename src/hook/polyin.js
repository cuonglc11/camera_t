import axios from "axios";
import ImageResizer from "react-native-image-resizer";
export const postImg = (img) => {
    const fromData = new FormData()
    fromData.append("img", {
        uri: img?.path,
        name: getFileName(img),
        type: img?.mime,
    })
   
    return new Promise((resole  ,  reject) => {
        axios.post('http://210.245.51.29:8018/get_card_region',fromData , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            resole(res.data)
        }).catch(errors => {
            console.log("errr" , errors);
            alert(errors)

        })
    } );
}
export const getPonin = (point1 , point2 , point3  , point4) => {
    // console.log(props , "pro");
    // const formDt = new  FormData()
    // formDt.append('data' , 
    //     111,
    //     // point2 : point2 ,
    //     // point3 : point3 ,
    //     // point4 : point4
    // )
    // return new Promise((resole  ,  reject) => {
    //     axios.post('http://210.245.51.29:3001/crop/',formDt , {
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //     }).then(res => {
    //         console.log("thanh Cong" , res);
    //         resole(res.data)
    //     }).catch(errors => {

    //         console.log("errr" , errors);

    //     })
    // } );
    console.log(point1);

}
function getFileName(file) {
    if (file.name !== undefined) {
        return file.name;
    } else if (file.filename !== undefined && file.filename !== null) {
        return file.filename;
    } else {
        const type = file?.mime || file?.type;
        return (
            Math.floor(Math.random() * Math.floor(999999999)) +
            '.' +
            type.split('/')[1]
        );
    }
}


