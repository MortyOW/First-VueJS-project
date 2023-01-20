<template>
    <div>
    <form @submit.prevent="addContact" action="" class="form-container">
        <div class="form-group">
            <label for="name">Nom: </label>
            <input v-model="contactForm.name" type="text" name="name" id="name" class="form-control" placeholder="Nom du contact">
        </div>
        <div class="form-group">
            <label for="number">Numéro: </label>
            <input v-model="contactForm.number" type="text" name="number" id="number" class="form-control" placeholder="Numéro du contact">
        </div>
        <button type="submit" class="btn btn-primary">Ajouter le contact</button>
    </form>
    </div>
</template>
<script>
export default{
    name: 'FormContact',
    computed: {
        contacts(){
            return this.$store.state.phonecontact
        }
    },
    data(){
        return {
            contactForm: {
                name: "",
                number: ""
            }
        }
    },
    methods:{
        addContact(){
            console.log(this.contactForm)
            if(this.contactForm.name == '' || this.contactForm.number == '') return
            this.$store.commit('ajoutContact', this.contactForm)
            this.contactForm = {
                name: "",
                number: ""
            }
        }
    }
}
</script>

<style scoped>

.form-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.form-group{
    width: 100%;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.form-control {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
}

label {
    width: 20%;
}

.btn{
width: 70%;
background-color: #4CAF50; /* Green */
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
}
.btn:hover {
background-color: #45a049;
}


</style>