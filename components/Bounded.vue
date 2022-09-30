<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-6"
    :class="{
      'py-4 md:py-8': yPadding === 'sm',
      'py-18 md:py-24': yPadding === 'base',
    }"
  >
    <div class="mx-auto w-full max-w-6xl">
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    yPadding: {
      type: String,
      default: 'base'
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
