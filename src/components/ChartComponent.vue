<template>
  <div>
    <label for="country" class="block text-sm font-medium text-white ">Selecione o país</label>
    <div class="mt-1 relative">
      <select v-model="selectedCountry" @change="fetchCountryData" id="country" name="country" class="block w-full py-2 pl-3 pr-10 mt-1 text-base mb-6 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option v-for="country in countries" :key="country.country" :value="country.country">{{ country.country }}</option>
      </select>
    </div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { nextTick } from 'vue';
import Chart from 'chart.js/auto';

const countries = ref([]);
const selectedCountry = ref('Brazil');
const chart = ref(null);

const initialChartData = {
  labels: ['Confirmado', 'Fatlidade', 'Recuperado'],
  datasets: [{
    label: 'Dados Covid',
    data: [0, 0, 0],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(111, 002, 111, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(111, 002, 111, 0.2)'],
    borderWidth: 1
  }]
};

let config = {
  type: 'bar',
  data: initialChartData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return ` ${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      }
    }
  }
};

const fetchCountries = async () => {
  const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries');
  const data = await response.json();
  countries.value = data.data;
};

const fetchCountryData = async () => {
  try {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${selectedCountry.value}`);
    const data = await response.json();

    if (chart.value && data && data.data && data.data.confirmed !== undefined && data.data.deaths !== undefined && data.data.recovered !== undefined) {
      // Atualize os valores diretamente
      initialChartData.datasets[0].data = [data.data.confirmed || 0, data.data.deaths || 0, data.data.recovered || 0];

      // Redefina o objeto chart.value
      chart.value.destroy();
      chart.value = new Chart(document.getElementById('myChart'), config);

      // Atualize o gráfico com os novos dados
      await nextTick();
      chart.value.update();
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
};

onMounted(async () => {
  await fetchCountries();

  const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
  if (ctx) {
    chart.value = new Chart(ctx, config);
    // Atualize os dados do gráfico com os do Brasil
    await fetchCountryData();
  }
});
</script>
