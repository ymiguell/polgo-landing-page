<template>
  <section class="bg-white text-blue-600 h-screen flex flex-col justify-center items-center">

    <div class="flex space-x-4 mb-4">
      <button
        class="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white h-10 py-1 px-6 rounded-full text-lg ">
        VERSÃO DESKTOP
      </button>
      <button
        class="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white h-10 py-1 px-6 rounded-full text-lg ">
        VERSÃO MOBILE
      </button>
      <button
        class="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white h-10 py-1 px-6 rounded-full text-lg ">
        VERSÃO TABLET
      </button>
    </div>

    <img src="@/assets/myimage.png" alt="Descrição da Imagem" class="mb-8 w-1/2 md:w-1/3" />

    <button
      class="bg-green-600 hover:text-green-600 hover:bg-transparent border border-green-600 w-1/2 text-white py-2 px-6 rounded-full text-lg mt-4">
      CADASTRAR-SE
    </button>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped></style>
