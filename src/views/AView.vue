<script setup>
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <div class="AView">
      <h1>This is an AView page. This is an AView page. This is an AView page. This is an AView page.</h1><br>
      <LoremIpsum/>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .AView {
    /* min-height: 100vh; */
    /* display: flex;*/
    align-items: center;
    text-align: center;
  }
}
</style>
