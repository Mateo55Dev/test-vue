<script setup>
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconInstagram from '../components/icons/IconInstagram.vue';
import IconGithub from '../components/icons/IconGithub.vue'
import IconWWW from '../components/icons/IconWWW.vue'
</script>

<template>
  <div class="about">
    	<h1>This is an about page. This is an about page. This is an about page. This is an about page.</h1><br><br>
    	<p>This application was created by Mateusz Rożenek (Mateo55Dev) to learn the field of Front-End Developing - Vue.js framework, using SPA (Single Page Application) technique.</p><br><br>
    	<div class="social_media">
    		<div>
				<a href="https://www.facebook.com/" target="_blank">Facebook<br><IconFacebook/></a>
			</div>
    		<div>
				<a href="https://www.instagram.com/" target="_blank">Instagram<br><IconInstagram/></a>
			</div>
    		<div>
				<a href="https://github.com/Mateo55Dev/" target="_blank">GitHub<br><IconGithub/></a>
			</div>
    		<div>
				<a href="#" target="_blank">WWW<br><IconWWW/></a>
			</div>
    	</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    /* display: flex;*/
    align-items: center;
    text-align: center;
  }

  .social_media {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
	 margin-top: 3rem;
  }
  
  body {
    display: flex;
    place-items: center;
  }

  #app {
    padding:0 2rem;
  }
}
</style>
