<template>
  <div class="about">
    <h1>Journal D'Appels</h1>
  </div>

<section class="telephone">
  <div class="call-history-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Contact</th>
          <th>Numéro</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personne in callhistory" :key="personne.number" class="history-row">
          <td class="name">{{ personne.name }}</td>
          <td class="number">{{ personne.number }}</td>
          <td class="date">{{ personne.date }}</td>
          <td class="action">
            <button @click="call(personne.name, personne.number)" class="btn btn-primary">Rappeler</button>
          </td>
        </tr>
      </tbody>
    </table>
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
  name: 'JournalView',
  computed: {
    callhistory(){
      return this.$store.state.callhistory
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

.telephone {
    position: relative;
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
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.call-history-container {
    width: 100%;
    margin: 50px auto;
  }
  .table {
    width: 100%;
    text-align: center;
  }
  .history-row {
    border-bottom: 1px solid #ccc;
  }
  .name, .number, .date {
    font-weight: bold;
  }
  .btn {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 5px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #45a049;
  }

</style>
