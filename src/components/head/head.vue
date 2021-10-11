<template>
  <div class="head">
    <div class="head__bow-tie">
      <BowTie class="left" />
      <BowTie class="right" />
    </div>
    <HairBuns />
    <Face />
    <Hair />
  </div>
</template>

<script>
import BowTie from '../bow-tie/bow-tie';  
import Hair from '../hair/hair';  
import Face from '../face/face';  
import HairBuns from '../hair-buns/hair-buns';  

export default {
  name: "Head",

  components: {
    BowTie,
    Hair,
    Face,
    HairBuns
  }
}
</script>