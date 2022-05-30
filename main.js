let app = new Vue({
    el: '#root',
    data: {
        mail: '',
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((obj) => {

        this.mail = obj.data.response;
        });
    }
})