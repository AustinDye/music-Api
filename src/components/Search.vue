<template>
 <form @submit.prevent="findArtists">
  <label class="my-2" for="search-artist">Search an artist</label>
  <div class="form-group d-flex">
   <input v-model="query" type="text" class="form-control" id="search-artist" placeholder="Artist">
   <button type="submit" class="btn btn-primary">Submit</button>    
  </div>
 </form>
</template>


<script>
import Pop from '../utils/Pop.js'
import { artistsService } from '../services/ArtistsService.js'
import { ref } from '@vue/reactivity'
export default {
 setup(){
  const query = ref('')
  return {
   query,
   async findArtists(){
    try {
     await artistsService.search(query.value)
    } catch (error){
    }
   }
  }
 }
}
</script>


<style lang="scss" scoped>

</style>