<template>
<h1>Appelle tes copains !</h1>
<div>
    <audio controls ref="audio" style="display: none;">
        <source id="audioSource" src="../assets/audio/fart-02.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio2" style="display: none;">
        <source id="audioSource" src="../assets/audio/fart-03.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio3" style="display: none;">
        <source id="audioSource" src="../assets/audio/rototo.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio4" style="display: none;">
        <source id="audioSource" src="../assets/audio/scream.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio5" style="display: none;">
        <source id="audioSource" src="../assets/audio/sneaze.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio6" style="display: none;">
        <source id="audioSource" src="../assets/audio/laugh.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio7" style="display: none;">
        <source id="audioSource" src="../assets/audio/goat.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio8" style="display: none;">
        <source id="audioSource" src="../assets/audio/boum.mp3" type="audio/mp3">
    </audio>

    <audio controls ref="audio9" style="display: none;">
        <source id="audioSource" src="../assets/audio/alarme.mp3" type="audio/mp3">
    </audio>

</div>
<div class="composition"> 
    <span>
    {{ nuumber }}
    {{ linkedname }}
    </span>
</div>
<section class="telephone">
<div class="clavier-num">
    <span @click="compose(n-1)"  v-for="n in 10" :key="n" > <ToucheClavier :number="n-1"/> </span>  
    <button class="appel" @click="call"><img src="../assets/icons8-ringer-volume-50.png"></button>  
</div>

<div class="useful-buttons">
    <router-link to="/"><i class="fa-solid fa-phone"></i></router-link>
    <router-link to="/contacts"><i class="fa-solid fa-address-book"></i></router-link>
    <router-link to="/journal"><i class="fa-solid fa-book"></i></router-link>
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
            this.playSound()
            this.i++
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
        },
        playSound() {
            console.log(this.i)
            if(this.i == 1){
                this.$refs.audio.play()
            }else if(this.i == 2){
                this.$refs.audio2.play()
            }else if(this.i == 3){
                this.$refs.audio3.play()
            }else if(this.i == 4){
                this.$refs.audio4.play()
            }else if(this.i == 5){
                this.$refs.audio5.play()
            }else if(this.i == 6){
                this.$refs.audio6.play()
            }else if(this.i == 7){
                this.$refs.audio7.play()
            }else if(this.i == 8){
                this.$refs.audio8.play()
            }else if(this.i == 9){
                this.$refs.audio9.play()
            }else{
                this.$refs.audio10.play()
            }
        }
    },
    data(){
        return {
                nuumber: "",
                linkedname: "",
                i: 1
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


.appel:hover{
    background-color: white;
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