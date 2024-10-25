<template>
  <section id="premios" class="py-20 text-center">
    <h2 class="text-green-700 text-4xl font-bold mb-12">PRÊMIOS</h2>

    <div class="relative w-full md:w-1/2 mx-auto overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(feature, index) in features" :key="index" class="min-w-full bg-white p-8 shadow-lg rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <button @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-transparent text-white hover:text-green-600 border border-green-600 font-bold py-2 px-4 rounded-full">
        &#10094;
      </button>
      <button @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-transparent text-white hover:text-green-600 border border-green-600 font-bold py-2 px-4 rounded-full">
        &#10095;
      </button>
    </div>

    <button
      class="mt-20 border border-green-600 text-green-600 hover:text-white hover:bg-green-600 w-1/2 py-2 px-6 rounded-full text-lg mt-8">
      CADASTRAR-SE
    </button>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      currentIndex: 0,
      features: [
        {
          title: 'LOREM IPSUM 1',
          description: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
        },
        {
          title: 'LOREM IPSUM 2',
          description: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
        },
        {
          title: 'LOREM IPSUM 3',
          description: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.features.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.features.length - 1;
      }
    },
  },
};
</script>

<style scoped></style>
