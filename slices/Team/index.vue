<template>
  <section class="section">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="max-w-sm bg-white rounded-lg border border-gray-400 shadow-md col-span-1">
        <PrismicImage :field="item.image" class="rounded-t-lg" />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><PrismicRichText :field="item.name" /></h5>
          </a>
          <PrismicRichText :field="item.description" class="mb-3 font-normal text-gray-700" />
          <PrismicLink v-if="item.link" :field="item.link" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-turquoise rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
            {{ item.linklabel }}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Team",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
