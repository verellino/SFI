<template>
  <Bounded as="section" :collapsible="false" y-padding="base" class="bg-light-blue">
    <div class="grid grid-cols-1 justify-items-center gap-10">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.text)"
        :field="slice.primary.text"
        :html-serializer="htmlSerializer"
        wrapper="div"
        class="max-w-2xl text-center leading-relaxed"
      />
      <PrismicLink v-if="slice.primary.buttonLink" :field="slice.primary.buttonLink">
        <PrismicImage :field="slice.primary.buttonImage" />
      </PrismicLink>
      <div v-if="slice.primary.image.url" class="w-full">
        <PrismicImage :field="slice.primary.image" />
      </div>
    </div>
  </Bounded>
</template>


<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  methods: {
    htmlSerializer (type, element, content, children) {
      switch (type) {
        case 'heading1':
          return /* html */ `<h1 class="sm:text-5xl mb-6 last:mb-0">${children.join('')}</h1>`

        case 'paragraph':
          return /* html */ `<p class="text-left sm:text-center mb-6 last:mb-0">${children.join('')}</p>`

        default:
          return this.$prismic?.htmlSerializer(type, element, content, children) ?? null
      }
    }
  }
}
</script>
