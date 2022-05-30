let app = new Vue({
    el: '#root',
    data: {
        mail: [],
    },
    created() {
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((obj) => {
                let newMail = {
                    success: true,
                    response: obj.data.response,
                };
                console.log(newMail)
                if (!this.mail.includes(newMail)){
                    this.mail.push(newMail);
                };
            });
    };
    }
})