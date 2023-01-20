<template>
    <section class="telephone">
        <h1>Ajouter Un Contact</h1>
        <div class="formform">
            <FormContact/>
        </div>
        <div class="useful-buttons">
            <router-link to="/"><i class="fa-solid fa-phone"></i></router-link>
            <router-link to="/contacts"><i class="fa-solid fa-address-book"></i></router-link>
            <router-link to="/journal"><i class="fa-solid fa-book"></i></router-link>
        </div>
    </section>
</template>

<script>
import FormContact from '@/components/FormContact.vue';
export default{
    components: {
        FormContact
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
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.useful-buttons{
    bottom: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    gap: 50px;
    height: 60px;
    padding-top: 5px;
    background-color: white;
}

img{
    color: white
}

.formform{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}


</style>