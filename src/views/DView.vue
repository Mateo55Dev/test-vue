<script setup>
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <div class="DView">
      <h1>This is an DView page. This is an DView page. This is an DView page. This is an DView page.</h1><br>
      <LoremIpsum/>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .DView {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
    text-align: center;
  }
}
</style>