<template>
 <div class="artist">
  <div class="card">
   <h1>{{ artist.name }}</h1>
   <h2>{{ artist.country }}</h2>
  </div>
 </div>
</template>


<script>
import { Artist } from '../Models/Artist.js'
export default { 
 props: {
  artist: {
   type: Artist,
   required: true
  }
 },
 setup(){
  return {}
 }
}
</script>


<style lang="scss" scoped>

</style>