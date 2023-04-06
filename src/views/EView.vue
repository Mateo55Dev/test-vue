<script setup>
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <div class="EView">
      <h1>This is an EView page. This is an EView page. This is an EView page. This is an EView page.</h1><br>
      <LoremIpsum/>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .EView {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
    text-align: center;
  }
}
</style>