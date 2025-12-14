<script lang="ts" setup>
const searchState = useState('searchState')
const search = ref('')

function handleSearch() {
  searchState.value = search
}
</script>

<template>
  <!-- nav ber section start -->
  <header class="header-section">
    <!-- <div class="sticky top-0 header xl:py-4 sm:pt-6 pt-8"> -->
    <div class="header xl:py-4 sm:pt-6 pt-4 bg-nu8">
      <div class="container">
        <nav class="flex justify-between items-center">
          <NuxtLink
            href="/"
            class="flex items-center"
          >
            <img
              class="sm:w-[40px] w-[25px] sm:h-[40px] h-[25px]"
              src="~/assets/images/logo.webp"
              alt=""
            >
            <span
              class="pl-2 xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] text-nu1 font-medium"
            >URTOPUP</span>
          </NuxtLink>
          <div class="flex-1 px-2">
            <form
              class="flex px-2 rounded-full relative"
              @submit.prevent="handleSearch"
            >
              <input
                v-model="search"
                type="text"
                class="w-full border-none outline-none rounded-xl mr-4"
                @change="handleSearch"
              >
              <button class="absolute right-8 top-2">
                <span><i
                  class="px-1 py-1 rounded-xl cursor-pointer bg-primary ph-bold ph-magnifying-glass"
                /></span>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- nav ber section end -->
</template>
