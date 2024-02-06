<template>
  <div class="bg-gray-800 flex text-white max-h-screen h-screen overflow-hidden">

    <div class=" w-40 border-r-2 border-gray-600 ">
      <span class="font-semibold p-6 block opacity-75"> CovidStatistic</span>
      <nav class="p-6 ">
        <h3 class="opacity-50 font-semibold tracking-wider mb-6 uppercase p-2 text-xs">Menu</h3>
        <div class="space-y-6">

          <MenuItem :iconComponent="HomeIcon" itemName="Discover" />
          <MenuItem :iconComponent="Trading" itemName="Estatística" />
          

        </div>

      </nav>
    </div>
    <div class=" flex-1 p-5">

      <header>
        <inputSearch />
        <!--<Dropdown>
          <Avatar />
        </Dropdown>
        <Notification />-->
      </header>
      <h1 class="font-bold text-2xl mt-6 mb-4">Estatística</h1>
        <div class="w-95 h-60 flex items-center justify-center">
          <ChartComponent/>
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MenuItem from './navs/MenuItem.vue'
import HomeIcon from '../icons/HomeIcon.vue'
import Trading from '../icons/TradinIcon.vue'
import inputSearch from '../inputs/ImputResearch.vue'
import ChartComponent from '../ChartComponent.vue'


defineProps({
  HomeIcon: { default: HomeIcon },
  Trading: { default: Trading },
});

</script>