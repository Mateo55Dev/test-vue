<script setup>
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <div class="BView">
      <h1>This is an BView page. This is an BView page. This is an BView page. This is an BView page.</h1><br>
      <LoremIpsum/>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .BView {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
    text-align: center;
  }
}
</style>