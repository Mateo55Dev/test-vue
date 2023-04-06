<script setup>
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <div class="CView">
      <h1>This is an CView page. This is an CView page. This is an CView page. This is an CView page.</h1><br>
      <LoremIpsum/>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .CView {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
    text-align: center;
  }
}
</style>