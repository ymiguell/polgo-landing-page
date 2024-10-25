<template>
  <footer class="bg-green-600 text-white py-10 px-4 md:px-20 mx-auto">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

      <div class="flex flex-col items-start space-y-4">
        <div class="text-2xl font-bold text-white">Minha Marca</div>

        <div class="text-xs">
          <p>Powered by:</p>
          <div class="w-20 font-bold text-white">Minha Marca</div>
        </div>
      </div>

      <div class="flex flex-col space-y-2 text-sm">
        <a href="#" class="p-2 hover:underline">Política de privacidade</a>
        <a href="#" class="p-2 hover:underline">Termos de uso</a>
        <a href="#" class="p-2 hover:underline">Regulamento</a>
        <a href="#" class="p-2 hover:underline">
          <p>SRE: 0000000000000000</p>
        </a>
      </div>

      <div class="flex flex-col md:items-end space-y-4 text-sm">
        <div class="flex space-x-4">
          <a href="#" aria-label="Facebook" class="text-white hover:text-gray-300">
            <i class="fab fa-facebook-f w-6"></i>
          </a>
          <a href="#" aria-label="Instagram" class="text-white hover:text-gray-300">
            <i class="fab fa-instagram w-6"></i>
          </a>
          <a href="#" aria-label="YouTube" class="text-white hover:text-gray-300">
            <i class="fab fa-youtube w-6"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="text-white hover:text-gray-300">
            <i class="fab fa-linkedin-in w-6"></i>
          </a>
        </div>
        <nav class="flex flex-col space-y-2">
          <a href="home" class="hover:underline">HOME</a>
          <a href="home#como-participar" class="hover:underline">COMO PARTICIPAR</a>
          <a href="home#premios" class="hover:underline">PRÊMIOS</a>
          <a href="home#duvidas-frequentes" class="hover:underline">DÚVIDAS FREQUENTES</a>
          <a href="home#ganhadores" class="hover:underline">GANHADORES</a>
        </nav>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style scoped>
footer {
  font-size: 0.875rem;
}
</style>
