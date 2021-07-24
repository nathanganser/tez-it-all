<template>
   <transition name="fade" mode="out-in">
      <div v-if="!isLoaded" class="dashboard-splash-screen">
         <img
            class="screen-logo"
            src="favicon.ico"
            draggable="false"
            loading="eager"
         >
         <span class="screen-title">TezItAll</span>
         <span class="screen-subtitle">Winner takes it all</span>
         <div class="screen-loader" />
      </div>
   </transition>
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/splash-screen.pcss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   props: {
      isLoaded: {
         type: Boolean,
         default: true
      }
   }
});
</script>
