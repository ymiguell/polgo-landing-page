<template>
  <header class="bg-green-600 shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">Minha Marca</div>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <a href="#hero" class="text-sm text-white hover:text-green-900">HOME</a>
          </li>
          <li>
            <a href="#como-participar" class="text-sm text-white hover:text-green-900">COMO PARTICIPAR</a>
          </li>
          <li>
            <a href="#premios" class="text-sm text-white hover:text-green-900">PRÊMIOS</a>
          </li>
          <li>
            <a href="#duvidas-frequentes" class="text-sm text-white hover:text-green-900">DUVIDAS FREQUENTES</a>
          </li>
          <li>
            <a href="#ganhadores" class="text-sm text-white hover:text-green-900">GANHADORES</a>
          </li>
        </ul>
      </nav>
      <button class="text-white py-2 px-4 rounded-lg text-xl ">
        Login/Cadastrar
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style scoped></style>