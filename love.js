let date = new Date
let day = date.getDate()
let month = date.getMonth()
month +=1
let year = date.getFullYear()
let sayNo = document.getElementById("sayNo")
let sayYes = document.getElementById("sayYes")
let body = document.querySelector("body")
let code = prompt("!!!Nhập vào mã bí mật!!!")

body.style.display ="none"
if(code === "from mindX with love"){
    body.style.display = "block"
}


sayYes.addEventListener("click", () => {
    Swal.fire({
        title: 'Cái đẹp không thể nào ghi hình, mà chỉ tồn tại trong đôi mắt kẻ si tình <3',
        text: `Ngày tình yêu bắt đầu: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './imagines/test2.png',
        // imageWidth: 162.5,
        // imageHeight: 100,
        imageAlt: 'Custom image',
        background: ' rgb(255, 158, 158)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url("https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv")
          left top
           no-repeat
        `
    })
})

sayNo.addEventListener("click", () => {
    Swal.fire({
        title: 'Vậy là, em làm vợ anh nhé!' ,
        text: `Ngày rước nàng về dinh: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './imagines/test1.png',
        // imageWidth: 162.5,
        imageHeight: 300,
        imageAlt: 'Custom image',
        background: ' rgb(255, 144, 144)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url("https://i.pinimg.com/originals/ad/95/b0/ad95b0b5cc8d8ce4467d666c927b6a84.gif")
          right top
           no-repeat
        `
    })
})



//   Swal.fire({
//     title: 'Custom width, padding, background.',
//     width: 600,
//     padding: '3em',
//     background: '#fff url(https://i.pinimg.com/736x/12/f5/32/12f532e1b53f302c07404eee837721aa.jpg)',
//     imageWidth: 162.5,
//    imageHeight: 100,
//     backdrop: `
//       rgba(0,0,123,0.4)
//       url("https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv")
//       left top
//       no-repeat
//     `
//   })