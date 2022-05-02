<template>
 <div class="battle">
   
  <div class="row">
   <div class="col-6">
   <div class="card bg-info p-5" v-for="d in dogs" :key="d.id">
   <Dog :dog="d" />
   </div>
   </div>
  </div>

 </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { dogsService } from '../services/DogsService'
import { AppState } from '../AppState'
export default {
 name: 'Battle',
 setup(){
let query = ref('')
return{
 query,
 dogs: computed(() => AppState.dogs),
}
 }
}
</script>

<style lang="scss" scoped>

</style>