let app = new Vue({
    el: '#root',
    data: {
        mail: [],
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((obj) => {
   
        for (let i = 0; i < 10; i++){
            let newMail = {
                success: true,
                response: obj.data.response,
            };
            console.log(newMail)
            if (!this.mail.includes(newMail)){
                this.mail.push(newMail);
            };
        };
        });
    }
})