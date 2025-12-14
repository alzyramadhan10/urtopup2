<template>
  <NuxtLoadingIndicator
    :height="3"
    :throttle="10"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'

if (import.meta.client) register()

// inisiate state management
const config = useState('config')

await callOnce(async () => {
  config.value = 'tes'
})
</script>

<style lang="scss">
@use "~/assets/scss/style.scss";
</style>
