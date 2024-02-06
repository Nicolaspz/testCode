<template>
  <div class="relative ">
    <input type="text"  placeholder="Search" class="w-full bg-gray-700 placeholder-white px-4 py-2 rounded-lg opacity-90 outline-none focus:outline-none focus:opacity-30 pr-10">
    <SearchIcon class="absolute top-2.5 right-2.5"/>
  </div>
</template>

<script lang="ts" setup>
import SearchIcon from '../icons/SearchIcon.vue'
</script>