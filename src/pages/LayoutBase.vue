<template>
  <div class="page" :class="gameSelected | splitNamePage">

    <div class="page-box page-box-left">
        <div class="page-box-select">
            <SelectGame />
        </div>

        <div class="page-box-title">
            <img src="@/assets/logo-loterias.svg" alt="Logo Loteriais" />
            <h1>{{ gameSelected }}</h1>
        </div>

        <div class="page-box-footer">
            <h2>Concurso</h2>
            <h3>{{ contestId }} - {{ contestDate | formatDate }}</h3>
        </div>
    </div>

    <div class="page-box page-box-right">
        <div class="page-box-result">
            <ResultGame :numbers="contestNumbers"/>
        </div>
    </div>

  </div>
</template>

<script>
import SelectGame from '../components/SelectGame.vue';
import ResultGame from '../components/ResultGame.vue';
import EventBus from '../event-bus';
import moment from 'moment';

export default {
  name: 'LayoutBase',
  components: {
    SelectGame,
    ResultGame
  },

  data() {
    return {
      contestNumbers: [],
      contestId: '0000',
      contestDate: '00/00/0000',
      gameSelected: 'Mega-Sena'
    }
  },

  filters: {
      splitNamePage(str) {
          return str.split(" ").join("-").toLowerCase()
      },
      formatDate(str) {
          return moment(str).format('DD/MM/YYYY')
      }
  },

  created() {
    EventBus.$on('contestSelected', (data) => {
      this.contestNumbers = data.numeros;
      this.contestId = data.id;
      this.contestDate = data.data;
    });

    EventBus.$on('gameSelected', (data) => {
        this.gameSelected = data.nome;
    });
  }
}
</script>
