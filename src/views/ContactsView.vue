<template>
<div class="about"></div>
<h1>Contacts</h1>
    <section class="telephone">
    <div class="add-c">
        <router-link class="add-contact" to="/addcontacts"><img src="../assets/+.png" alt=""></router-link>
    </div>
        <div class="contacts-container">
        <div v-for="contact in contacts" :key="contact.name" class="contact-div">
        <div class="contact-info">
            <span class="name">{{ contact.name }}</span> ||
            <span class="number">{{ contact.number }}</span>
        </div>
        <button @click="call(contact.name, contact.number)" class="btn btn-primary">Appeler</button>
        </div>
    </div>
    <div class="useful-buttons">
    <router-link to="/"><img src="../assets/icons8-iphone-14-pro-60.png" alt=""></router-link>
    <router-link to="/contacts"><img src="../assets/icons8-contact-60.png" alt=""></router-link>
    <router-link to="/journal"><img src="../assets/icons8-book-60.png" alt=""></router-link>
    </div>
    </section>

</template>

<script>
export default{
    name: 'ContactsView',
    computed: {
        contacts(){
            return this.$store.state.phonecontact
        }
        
    },
    methods: {
        call(name, number){
            let datee = new Date()
            let day = datee.getDate()
            let month = datee.getMonth()
            let hour = datee.getHours()
            let minute = datee.getMinutes()
            this.$store.commit('callnumber', {
                name: name,
                number: number,
                date: day + '/' + month + '1' + ' à ' + hour + ':' + minute
            })
        }
    }
}
</script>

<style scoped>
.contact-div{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.add-c{
    display: flex;
    color: red;
    margin-left: 300px;
    padding-top: 12px;
}

.add-contact img{
    width: 20px;
    height: auto;
}

.useful-buttons{
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    width: 350px;
    gap: 50px;
    height: 60px;
    padding-top: 5px;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.telephone {
    position: relative;
    margin: auto;
    width: 350px;
    height: 546px;
    border: 20px solid black;
    border-radius: 30px;
    position: relative;
}
.contacts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 456px;
    overflow-y: scroll;
}
.contact-div {
    width: 100%;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

  }
  .contact-info {
    width: 80%;
  }
  .name {
    font-weight: bold;
  }
  .btn {
    width: 40%;
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