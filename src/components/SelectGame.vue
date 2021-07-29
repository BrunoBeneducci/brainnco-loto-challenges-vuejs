<template>
    <div>
        <FullLoader :status="loaderStatus"/>
        <div class="select">
            <select name="select" v-model="selectedGame">
                <option v-for="(item, index) in games" :value="item.id" :key="index">
                    {{ item.nome | capitalizeFirstLetter }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import FullLoader from '../components/FullLoader';
import api from '../services/api';
import EventBus from '../event-bus';

export default {
  name: 'SelectGame',
  components: {
      FullLoader
  },
  data() {
      return {
          games: Array,
          selectedGame: 0,
          loaderStatus: true,
      }
  },

  mounted() {
    api.get('/loterias').then((res) => {
        if(res.status === 200) {
            this.games = res.data;
            this.getContests(0);
        }
    })
  },

  filters: {
      capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
      }
  },

  watch: {
      selectedGame(newValue) {
          this.getContests(newValue);
          this.loaderStatus = true;
          EventBus.$emit('gameSelected', this.games[newValue]);
      }
  },

  methods: {
      getContests(id) {
        function lotoId(v) {
            return v.loteriaId === id;
        } 

        api.get('/loterias-concursos').then((res) => {
            if(res.status === 200) {
                return res.data.find(lotoId);
            }
        }).then((res) => {
            api.get(`/concursos/${res.concursoId}`).then((res) => {
                if(res.status === 200) {
                    EventBus.$emit('contestSelected', res.data);
                    this.loaderStatus = false;
                }
            });
        });
      }
  }
}
</script>

<style scoped>

</style>
