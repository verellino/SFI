<template>
  <Bounded as="header" y-padding="sm">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none text-turquoise">
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <PrismicImage
          v-if="settings.data.logo.url"
          :field="settings.data.logo"
          class="w-16"
        />
        <PrismicRichText :field="settings.data.siteTitle" class="hidden sm:block font-serif text-lg ml-4" />
      </NuxtLink>
      <nav>
        <ul class="navbar block sm:flex gap-6 md:gap-10" :class="menuOpen ? 'block' : 'hidden'">
          <li
            v-for="item in navigation.data.links"
            :key="$prismic.asText(item.label)"
            class="tracking-tight w-full py-4 sm:py-0"
          >
            <PrismicLink :field="item.link">
              {{ $prismic.asText(item.label ) }}
            </PrismicLink>
          </li>
          <!-- <li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <span class="sr-only">{{ lang.lang }}</span>
              <span class="fi" :class="`fi-${lang.lang.substring(3).toLowerCase()}`" />
            </PrismicLink>
          </li> -->
        </ul>
      </nav>
      <div class="absolute top-8 right-8 block sm:relative lg:hidden">
        <button
          @click="toggleMenu"
          class="flex items-center rounded border border-gray-500 px-3 py-2 hover:border-gray-600 hover:text-dark-maroon"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
    </div>
  </Bounded>
</template>

<script>
import { components } from "~/slices";
export default {
  props: {
    navigation: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    },
    alternateLanguages: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return { components, menuOpen: false };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
}
</script>

<style scoped>
@media (max-width:768px) { 
    .navbar {
      width: 87vw;
  }
}
</style>