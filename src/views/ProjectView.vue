<template>
  <div>
    <div class="chair-section">
      <Chair />
    </div>
    <div class="lelabo-section">
      <Lelabo />
    </div>
    <div class="movie-section">
      <Movie />
    </div>
    <div class="moitnyang-section">
      <Moitnyang />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chair from "@/components/Chair.vue";
import Lelabo from "@/components/Lelabo.vue";
import Movie from "@/components/Movie.vue";
import Moitnyang from "@/components/Moitnyang.vue";


export default {
  name: "ProjectView",
  components: {
    Chair,
    Lelabo,
    Movie,
    Moitnyang,
  },
};



</script>
