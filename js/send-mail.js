function sendMail(params){
    var tempParams ={
        from_name:document.getElementById("fromEmail").value,
        to_name:document.getElementById("toName").value,
        massage:document.getElementById("message").value
    };
    emailjs.send('gmail','template_wwn4x38',tempParams).then(function(res){
        console.log("success", res.status);
    })
}