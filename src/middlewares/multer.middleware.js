import multer from "multer";


const storage=multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"./public/temp")
    },
    __filename:function (req,file,cb){
        //for unique nmae
        // const uniqueSuffix=Date.now() + '-' + Math.round(Math.random() * 1E9)

        cb(null,file.originalname + '-' +uniqueSuffix)
    }
})


export const upload=multer({
    storage,})