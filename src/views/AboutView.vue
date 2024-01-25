<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pip-boy></pip-boy>
  </div>
</template>

<script>
import PipBoy from '../components/PipBoy.vue';

export default {
  components: {
    PipBoy,
  },
  setup() {
    
  },
}
</script>


<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  color: #fff3f3;
  flex-direction: column;
}

</style>
