<template>
  <section id="ganhadores" class="py-40 text-center">
    <h2 class="text-green-700 text-4xl font-bold mb-12">GANHADORES</h2>

    <div class="max-w-4xl mx-auto space-y-4">
      <div v-if="loading">Carregando...</div>
      <div v-if="error" class="text-red-600">{{ error }}</div>
      <div v-if="!loading && winners.length === 0">Nenhum ganhador cadastrado.</div>

      <details v-for="winner in winners" :key="winner._id" class="border border-green-600 rounded-lg p-4">
        <summary class="font-semibold text-green-600 cursor-pointer flex justify-between items-center">
          {{ winner.name }}
          <span class="text-green-600 font-bold text-xl">⌵</span>
        </summary>
        <p class="mt-2 text-left text-green-600">
          <strong>Prêmio:</strong> {{ winner.prize }} <br />
          <strong>Data:</strong> {{ new Date(winner.date).toLocaleDateString() }}
        </p>
      </details>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WinnersList',
  data() {
    return {
      winners: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://winners-api-aw6g.onrender.com/api/winners');
      this.winners = response.data;   //https://winners-api.onrender.com/api/winners
    } catch (err) {
      this.error = "Erro ao buscar ganhadores.";
      console.error(err);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
