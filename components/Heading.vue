<template>
  <Component
    :is="as"
    :class="{
      'text-5xl md:text-[5rem]': size === '6xl',
      'text-4xl md:text-6xl': size === '4xl',
      'text-2xl': size === '2xl'
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'h1'
    },
    size: {
      type: String,
      default: '8xl'
    }
  }
}
</script>
