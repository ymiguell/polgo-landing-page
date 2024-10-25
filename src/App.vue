<template>
  <div id="app">
    <HeaderSection />
    <HeroSection />
    <FeaturesSection />
    <AwardsSection />
    <FacSection />
    <WinnersSection />
    <FooterSection />
  </div>
</template>

<script>
import WinnersSection from './components/WinnersSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import AwardsSection from './components/AwardsSection.vue';
import FacSection from './components/FacSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import HeroSection from './components/HeroSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    FeaturesSection,
    AwardsSection,
    FacSection,
    WinnersSection,
    FooterSection,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
