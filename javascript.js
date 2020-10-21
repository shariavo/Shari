//Function which triggers the action button for send an email
function trigger() {
    document.getElementById("action-button").click();      
    return true;
}

//EmailJS is used as our server to manage the email.
//It recover name, subject, email and message from the user and it sends to gmail the info.
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
                //alert('El correo se ha enviado de forma exitosa');
                location.reload();
                
                }

                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);

                }, function(err) {
                    alert('Ocurrió un problema al enviar el correo');
                    console.log("FAILED. error=", err);
                });
        }
    }
});