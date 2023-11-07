const {createApp} = Vue;
createApp({
    data (){
        return{
            email: []
        }
    },
    methods: {
        getsEmail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                console.log(resp.data.response)
                this.email.push(resp.data.response)
            })
            }
        }

    },
    created() {
        this.getsEmail()
    }

}).mount('#app')