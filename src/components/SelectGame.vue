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
          selectedGame: Number,
          loaderStatus: true,
      }
  },

  mounted() {
    api.get('/loterias')
    .then((res) => {
        if(res.status === 200) {
            this.games = res.data;
        }
    })
    .then(() => {
        if(this.$route.path === "/") {
            this.selectedGame = 0;
        }
    });

    EventBus.$on('routeIdSelected', (data) => {
        setTimeout(() => {
            this.selectedGame = data;
        }, 1000);
    });
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
        if(id === 0) {
            this.$router.push({ name: 'mega-sena' }).catch(()=>{})
        }

        if(id === 1) {
            this.$router.push({ name: 'quina' }).catch(()=>{})
        }

        if(id === 2) {
            this.$router.push({ name: 'lotofacil' }).catch(()=>{})
        }

        if(id === 3) {
            this.$router.push({ name: 'lotomania' }).catch(()=>{})
        }

        if(id === 4) {
            this.$router.push({ name: 'timemania' }).catch(()=>{})
        }

        if(id === 5) {
            this.$router.push({ name: 'dia-de-sorte' }).catch(()=>{})
        }

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
