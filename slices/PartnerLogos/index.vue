<template>
  <section class="w-full grid grid-cols-2 gap-8 text-gray-500 sm:grid-flow-col-dense sm:grid-cols-4 dark:text-gray-400">
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="flex justify-center items-center max-h-12">    
      <PrismicImage :field="item.logo" class="filter grayscale brightness-50 saturate-0 object-contain h-full" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "PartnerLogos",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
