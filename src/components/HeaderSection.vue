<template>
  <header class="bg-green-600 shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">Minha Marca</div>
      
      <nav class="hidden md:flex"> 
        <ul class="flex space-x-6">
          <li>
            <a href="#hero" class="text-sm text-white hover:text-green-900 scroll-smooth">HOME</a>
          </li>
          <li>
            <a href="#como-participar" class="text-sm text-white hover:text-green-900 scroll-smooth">COMO PARTICIPAR</a>
          </li>
          <li>
            <a href="#premios" class="text-sm text-white hover:text-green-900 scroll-smooth">PRÊMIOS</a>
          </li>
          <li>
            <a href="#duvidas-frequentes" class="text-sm text-white hover:text-green-900 scroll-smooth">DUVIDAS FREQUENTES</a>
          </li>
          <li>
            <a href="#ganhadores" class="text-sm text-white hover:text-green-900 scroll-smooth">GANHADORES</a>
          </li>
        </ul>
      </nav>

      <button class="text-white py-2 px-4 rounded-lg text-xl hidden md:block"> 
        Login/Cadastrar
      </button>

      <button @click="toggleSidebar" class="md:hidden text-white py-2 px-4 rounded-lg text-xl"> 
        Menu
      </button>
    </div>

    <aside v-if="isSidebarOpen" class="fixed inset-0 bg-green-600 bg-opacity-80 z-50 flex flex-col p-4 md:hidden">
      <button @click="toggleSidebar" class="self-end text-white text-2xl">X</button>
      <ul class="mt-8 space-y-4">
        <li>
          <a href="#hero" class="text-lg text-white hover:text-green-900 scroll-smooth">HOME</a>
        </li>
        <li>
          <a href="#como-participar" class="text-lg text-white hover:text-green-900 scroll-smooth">COMO PARTICIPAR</a>
        </li>
        <li>
          <a href="#premios" class="text-lg text-white hover:text-green-900 scroll-smooth">PRÊMIOS</a>
        </li>
        <li>
          <a href="#duvidas-frequentes" class="text-lg text-white hover:text-green-900 scroll-smooth">DUVIDAS FREQUENTES</a>
        </li>
        <li>
          <a href="#ganhadores" class="text-lg text-white hover:text-green-900 scroll-smooth">GANHADORES</a>
        </li>
      </ul>
    </aside>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isSidebarOpen: false, 
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; 
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth; 
}
</style>
