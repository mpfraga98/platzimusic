<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>PlaziMusic</h1>
    <select v-model="pais_seleccionado">
      <option v-for="pais in paises" v-bind:value="pais.value">{{pais.name}}</option> 
    </select>
    <Spinner v-show="loading"></Spinner>
    <ul>
      <Artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbi"></Artist>
    </ul>
  </div>
</template>

<script>
import getArtists from './api/index.js'
import Artist from './api/components/Artist.vue'
import Spinner from './api/components/Spinner.vue'

export default {
  name: 'app',
  data () {
    return {
      artists:[],
      paises:[
        {name:'Argentina',value:'argentina'},
        {name:'Colombia',value:'colombia'},
        {name:'España',value:'spain'}
      ],
      pais_seleccionado: 'argentina',
      loading: true
    }
  },
  methods:{
    refreshArtist(){
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtists(this.pais_seleccionado)
        .then(function(artists){
          self.loading = false;
          self.artists = artists
        });
    }
  },
  components:{
    Artist: Artist,
    Spinner: Spinner
  },
  mounted(){
    this.refreshArtist()
  },
  watch:{
    pais_seleccionado: function(){
      this.refreshArtist()
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
