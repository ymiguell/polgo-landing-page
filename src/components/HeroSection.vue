<template>
  <section class="bg-white text-blue-600 h-screen flex flex-col justify-center items-center pt-16"> 
    <div class="flex flex-wrap justify-center space-x-4 mb-4">
      <button
        @click="setVersion('desktop')"
        :class="['h-10 py-1 px-6 rounded-full text-lg', version === 'desktop' ? 'bg-green-600 text-white' : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white']">
        VERSÃO DESKTOP
      </button>
      <button
        @click="setVersion('mobile')"
        :class="['h-10 py-1 px-6 rounded-full text-lg', version === 'mobile' ? 'bg-green-600 text-white' : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white']">
        VERSÃO MOBILE
      </button>
      <button
        @click="setVersion('tablet')"
        :class="['h-10 py-1 px-6 rounded-full text-lg', version === 'tablet' ? 'bg-green-600 text-white' : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white']">
        VERSÃO TABLET
      </button>
    </div>

    <img
      :src="getImageSrc"
      alt="Descrição da Imagem"
      class="mb-8 w-1/2 md:w-1/3" />

    <button
      class="bg-green-600 hover:text-green-600 hover:bg-transparent border border-green-600 w-1/2 text-white py-2 px-6 rounded-full text-lg mt-4">
      CADASTRAR-SE
    </button>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      version: 'desktop', 
    };
  },
  methods: {
    setVersion(selectedVersion) {
      this.version = selectedVersion;
    },
  },
  computed: {
    getImageSrc() {
      return require('@/assets/myimage.png');
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  section {
    padding-top: 64px; 
  }
  button {
    flex: 1 1 100%;
    margin-bottom: 0.5rem; 
  }
}
</style>
