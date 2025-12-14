<script lang="ts" setup>
useSeoMeta({
  title: 'URTOPUP - TOPUP ALL GAME',
  ogTitle: 'URTOPUP - TOPUP ALL GAME',
  description: `#1 TOP UP SERVICE SINCE 2️⃣0️⃣1️⃣8️⃣
    📞ORDER VIA WA & WEB ONLY🌐
    🚨ADA YANG LEBIH MURAH DARI KAMI? SS KE ADMIN HARGA SAMA!`,
  ogDescription: `#1 TOP UP SERVICE SINCE 2️⃣0️⃣1️⃣8️⃣
    📞ORDER VIA WA & WEB ONLY🌐
    🚨ADA YANG LEBIH MURAH DARI KAMI? SS KE ADMIN HARGA SAMA!`,
  twitterCard: 'summary_large_image',
})

type gameType = { name: string, image: string, items: Record<string, string>[] }

const selected = ref<gameType | null>(null)
const selectedItem = ref<Record<string, string> | null>(null)

const searchState = useState('searchState')
const { data: games } = await useFetch<string>('/api/games')

function parsingCSV(data: string) {
  const lines = data.split('\r\n')

  const headers = lines[0].split(',')

  const result: Record<string, string>[] = lines.slice(1).map((line: string) => {
    const values = line.split(',')

    return headers.reduce((obj: Record<string, string>, header: string, index: number) => {
      obj[header] = values[index]
      return obj
    }, {})
  })

  return result
}

const gameParsed = computed(() => {
  const result = games.value ? parsingCSV(games.value) : []

  // reconstruct
  const data: Record<string, Record<string, string>[]> = {}
  for (const x of result) {
    if (!data[x['NAMA GAME'].trim()]) data[x['NAMA GAME'].trim()] = []
    data[x['NAMA GAME'].trim()].push(x)
  }

  const data2: gameType[] = []
  for (const [key, value] of Object.entries(data)) {
    data2.push({ name: key, image: value[0]['GAMBAR'], items: value })
  }

  return data2
})

const filteredGames = computed(() => {
  if (searchState.value && gameParsed.value) {
    return gameParsed.value.filter(value => value.name.toLowerCase().includes(String(searchState.value).toLowerCase()))
  }

  return gameParsed.value
})
</script>

<template>
  <div>
    <NavBar />
    <!-- bred crumb section start -->
    <ClientOnly>
      <section class="pt-12 bg-nu4">
        <div class="w-full md:w-[80%] mx-auto md:hidden">
          <swiper-container
            class="mySwiper"
            pagination="true"
            navigation="true"
            space-between="30"
            centered-slides="true"
            autoplay-delay="2500"
            autoplay-disable-on-interaction="true"
          >
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="hidden md:block">
          <swiper-container
            class="mySwiper"
            pagination="true"
            effect="coverflow"
            grab-cursor="true"
            centered-slides="true"
            slides-per-view="auto"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
            autoplay-delay="2500"
            autoplay-disable-on-interaction="false"
            rewind="true"
          >
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
            <swiper-slide>
              <img src="~/assets/images/banner1.png">
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
    </ClientOnly>

    <!-- bred crumb section end -->
    <!-- game page card prop up start -->
    <section class="sm:pt-[60px] lg:pb-[100px] md:pb-20 sm:pb-16 pb-12 bg-nu2">
      <div class="container">
        <div class="content-info w-full">
          <div class="grid grid-cols-12 gap-4">
            <!-- card 1 -->
            <div
              v-for="game in filteredGames"
              :key="game.name"
              class="lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-4"
            >
              <div
                class="cursor-pointer"
                @click="selected = game"
              >
                <div
                  class="px-3 py-3 bg-nu7 rounded hover:bg-nu5 hover:border-2 border-2 border-nu2 duration-500 hover:border-secondary"
                >
                  <div class="img-box rounded-2xl">
                    <img
                      v-if="game.image"
                      class="w-full rounded-2xl img"
                      :src="game.image"
                      :alt="game.name"
                    >
                    <img
                      v-else
                      class="w-full rounded-2xl img"
                      src="~/assets/images/game-page/game-prop1.png"
                      :alt="game.name"
                    >
                  </div>
                  <div class="pt-4">
                    <span class="text-nu1 text-[14px] font-semibold hover:underline">
                      {{ game.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- add gride new -->
    <div class="bg-nu2 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center pb-4 px-6 lg:px-32">
      <!-- Item 1 -->
      <div class="bg-nu7 p-6 rounded-lg shadow-md">
        <img
          src="../assets/images/search.png"
          alt="search"
          class="mx-auto mb-4 w-16 h-16"
        >
        <h3 class="text-nu1 text-lg font-bold">
          Find the Relevant Items
        </h3>
        <p class="text-nu1">
          URTOPUP search and filters enable fast and accurate search.
        </p>
      </div>
      <!-- Item 2 -->
      <div class="bg-nu7 p-6 rounded-lg shadow-md">
        <img
          src="../assets/images/keamanan.png"
          alt="Icon"
          class="mx-auto mb-4 w-16 h-16"
        >
        <h3 class="text-nu1 text-lg font-bold">
          Safe & Secure
        </h3>
        <p class="text-nu1">
          No scam. No need others to vouch. No fraud and chargebacks.
        </p>
      </div>
      <!-- Item 4 -->
      <div class="bg-nu7 p-6 rounded-lg shadow-md">
        <img
          src="../assets/images/customer.png"
          alt="Icon"
          class="mx-auto mb-4 w-16"
        >
        <h3 class="text-nu1 text-lg font-bold">
          Customer Support
        </h3>
        <p class="text-nu1">
          Our dedicated customer support is available to assist you.
        </p>
      </div>
      <!-- Item 5 -->
      <div class="bg-nu7 p-6 rounded-lg shadow-md">
        <img
          src="../assets/images/murah.png"
          alt="Icon"
          class="mx-auto mb-4 w-16"
        >
        <h3 class="text-nu1 text-lg font-bold">
          Buy at Lower Price
        </h3>
        <p class="text-nu1">
          Sellers are willing to sell for lower amount since they can earn real cash.
        </p>
      </div>
    </div>
    <!-- end gride new -->

    <!-- game page card prop up end -->
    <FooterBlock />

    <!-- Fixed Bottom Left Icon -->
    <div class="fixed bottom-4 right-4 animate-bounce">
      <a href="https://api.whatsapp.com/send/?phone=6282122223706&text=%EF%BF%BD+Halo+Minji+dapet+dari+IG%2C+mau+top+up+murah+nih%21&type=phone_number&app_absent=0">
        <img
          src="../assets/images/wa-logo.png"
          alt="WhatsApp"
          class="w-24 drop-shadow-lg lg:w-32"
        >
      </a>
    </div>
    <!-- end Fixed Bottom Left Icon -->

    <ModalBox
      v-if="selected"
      class="z-100"
      :title="selected.name"
      @close="() => { selected = null }"
    >
      <div
        v-for="item in selected.items"
        :key="item['ITEM GAME']"
        class="flex items-center gap-8"
      >
        <div class="flex items-center gap-4">
          <input
            v-model="selectedItem"
            name="item"
            type="radio"
            required
            :value="item"
          >
          {{ item['ITEM GAME'] }}
          <span class="text-md">({{ formatToIDR(item['HARGA JUAL']) }})</span>
        </div>
      </div>

      <div class="mt-8">
        <a :href="`https://api.whatsapp.com/send/?phone=6282122223706&text=Min%20mau%20order%20${selected.name}%20(${selectedItem ? selectedItem['ITEM GAME'] : ''})%20${selectedItem ? formatToIDR(selectedItem['HARGA JUAL']) : ''}&type=phone_number&app_absent=0`">
          <button
            type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Beli
          </button>
        </a>
      </div>
    </ModalBox>
  </div>
</template>

<style scoped>
    swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 10px;
    }

    swiper-slide {
      background-position: center;
      background-size: cover;
      width: 60vw;
    }

    swiper-slide img {
      display: block;
      width: 100%;
    }
</style>
