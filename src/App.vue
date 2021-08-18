<template>
   <n-notification-provider>
      <router-view v-slot="{ Component, route }">
         <component :is="Component" :key="route.path" />
      </router-view>
   </n-notification-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NNotificationProvider } from 'naive-ui';

export default defineComponent({
   name: 'App',
   components: {
      NNotificationProvider
   }
});
</script>
