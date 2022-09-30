<template>
  <Bounded as="header" y-padding="sm">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none text-turquoise">
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <PrismicImage
          v-if="settings.data.logo.url"
          :field="settings.data.logo"
          class="w-16"
        />
        <PrismicRichText :field="settings.data.siteTitle" class="font-serif text-lg ml-4" />
      </NuxtLink>
      <nav>
        <ul class="flex flex-wrap gap-6 md:gap-10">
          <li
            v-for="item in navigation.data.links"
            :key="$prismic.asText(item.label)"
            class="tracking-tight"
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
    </div>
  </Bounded>
</template>

<script>
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
  }
}
</script>
