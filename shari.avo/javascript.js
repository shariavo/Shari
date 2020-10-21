function validation() {

    /*var nameVal, subjectVal, emailVal, messageVal, val;


    nameVal = document.getElementById("nameV").value;
    subjectVal = document.getElementById("subjectV").value;
    emailVal = document.getElementById("emailV").value;
    messageVal = document.getElementById("messageV").value;

    if( nameVal == null || nameVal.length == 0 || /^\s+$/.test(nameVal) ) {
        alert(nameVal+subjectVal+emailVal+messageVal);
        return false;
    }
    else if( subjectVal == null || subjectVal.length == 0 || /^\s+$/.test(subjectVal) ) {
        alert(nameVal+subjectVal+emailVal+messageVal);
        return false;
    }
    else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailVal)) ) {
        alert(nameVal+subjectVal+emailVal+messageVal);
        return false;
    }
    else if( messageVal == null || messageVal.length == 0 || /^\s+$/.test(messageVal) ) {
        alert(nameVal+subjectVal+emailVal+messageVal);
        return false;
    }*/

    document.getElementById("action-button").click();
          
    return true;
}
(function(){
    emailjs.init("user_zpt7xYd3Xq0D02jeRYuS6");
})();
const vue = new Vue({el: '#app',data(){
    return {
        from_name: '',
        from_email: '',
        message: '',
        subject: '',
    }
},methods: {
                        
        enviar(){
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                subject: this.subject,
            };
                                
            emailjs.send("Gmail","template_mcnbvue", data).then(function(response) {
                if(response.text === 'OK'){
                location.reload();
                //alert('El correo se ha enviado de forma exitosa');
                }

                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);

                }, function(err) {
                    alert('Ocurrió un problema al enviar el correo');
                    console.log("FAILED. error=", err);
                });
        }
    }
});