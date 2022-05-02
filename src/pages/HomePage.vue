<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <h2>Find Any Artist</h2>
      <img src="https://st4.depositphotos.com/13128258/23618/v/380/depositphotos_236189206-stock-illustration-two-clenched-fists-bumping-together.jpg?forcejpeg=true" alt="CodeWorks Logo" class="rounded-circle">
      <Search />
        <div class="card bg-info p-5" v-for="a in artists" :key="a.id">
        <Artist :artist="a" />
        </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import Search from '../components/Search.vue'
import { artistsService } from '../services/ArtistsService.js'
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger.js'
export default {
  components: { Search },
  name: 'Home',
  setup() {
    let query = ref('')

    return {
      query,

      artists: computed(() => AppState.artists),
      async search() {
        try {
          await artistsService.search(query.value)
          query.value = ''
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 30vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
