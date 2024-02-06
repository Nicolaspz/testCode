<template>
  <div class="flex items-center space-x-4 cursor-pointer">
    <div class="bg-orange-500 p-2 rounded-lg ">
      <component :is="iconComponent" />
    </div>
    <span>{{ itemName }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    iconComponent: {
      type: Object,
      default: null,
    },
    itemName: {
      type: String,
      required: true,
    },
  },
};
</script>
