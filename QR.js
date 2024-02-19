

let ImgBox=document.getElementById("Img-box");
let QRImg=document.getElementById("QRImg");
let qrInput=document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length>0){
    QRImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    ImgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}
