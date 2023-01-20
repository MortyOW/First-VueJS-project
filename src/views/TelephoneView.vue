<template>
<h1>Appelle tes copains !</h1>
<section class="telephone">
    <div class="composition"> 
    <span></span>
{{ nuumber }}
{{ linkedname }}
</div>
<div class="clavier-num">
    <span @click="compose(n-1)"  v-for="n in 10" :key="n" > <ToucheClavier :number="n-1"/> </span>  
    <button @click="call"><img src="../assets/icons8-ringer-volume-50.png"></button>  
</div>

<div class="useful-buttons">
    <router-link to="/"><img src="../assets/icons8-iphone-14-pro-60.png" alt=""></router-link>
    <router-link to="/contacts"><img src="../assets/icons8-contact-60.png" alt=""></router-link>
    <router-link to="/journal"><img src="../assets/icons8-book-60.png" alt=""></router-link>
</div>
</section>




</template>


<script>

import ToucheClavier from '@/components/ToucheClavier.vue';
export default {
    name: 'TelephoneView',
    components: {
        ToucheClavier,
    },
    methods: {
        compose(n){
            console.log(n)
            this.nuumber+=n
            if(this.$store.state.phonecontact.find(contact => this.nuumber == contact.number)){
                this.linkedname = (this.$store.state.phonecontact.find(contact => this.nuumber == contact.number).name)
                if(this.linkedname == 'Police'){
                    console.log('police')
                    window.open('https://youtu.be/QaPeaDvNFRo?t=45', '_blank')
                }
            }else{
                this.linkedname = "Inconnu"
            }
        },
        call(){
            if(this.nuumber !== ''){
                let datee = new Date()
                let day = datee.getDate()
                let month = datee.getMonth()
                let hour = datee.getHours()
                let minute = datee.getMinutes()
                this.$store.commit('callnumber', {
                    name: this.linkedname,
                    number: this.nuumber,
                    date: day + '/' + month + '1' + ' à ' + hour + ':' + minute
                })
            }else{
                alert("Bah dis-donc p'tit mâlin, on appelle pas un numéro vide pardis")
                return
            }
        }
    },
    data(){
        return {
                nuumber: "",
                linkedname: ""
            }
    }
}
</script>



<style scoped>

.telephone {
    margin: auto;
    width: 350px;
    height: 546px;
    border: 20px solid black;
    border-radius: 30px;
    position: relative;
}

.useful-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    gap: 50px;
    height: 60px;
    padding-top: 5px;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}




.clavier-num{
    margin: auto;
    align-items: center;
    place-items: center;
    max-width: 340px;
    max-height: 590px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    gap: 40px;
    color: white;
    padding: 30px;
    font-size: 24px;
    border: 1px solid black;
}

button{
    background: rgb(235, 66, 66);
    width: 75px;
    height: 75px;
    border-radius: 50%;
}

button:hover{
    cursor: pointer;
}

</style>