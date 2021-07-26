<template>
   <header class="view-navbar">
      <div class="view-navbar-brand">
         <img class="view-navbar-brand-logo" src="/assets/icons/logo.png" draggable="false">
         <span class="view-navbar-brand-label">TezItAll</span>
      </div>

      <div class="view-navbar-links">
         <NavbarFaq />
      </div>
   </header>
</template>

<style lang="postcss">
.view-navbar {
   @apply w-full px-6 py-2 z-5
   flex items-center
   bg-default-elevated border border-transparent border-b-black/10
   sticky top-0 left-0;

   &-brand {
      @apply flex items-center;

      &-logo {
         @apply w-42px mr-4 md:w-48px;
      }

      &-label {
         @apply text-xl sm:text-2xl font-medium;
      }
   }

   &-links {
      @apply ml-auto;
   }
}
</style>
