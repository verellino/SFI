<template>
  <div>
    <SliceZone :slices="page.data.slices" :components="components" />
    <Partners :partners="partners"/>
  </div>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, store, i18n }) {
    const lang = i18n.locale
    const page = await $prismic.api.getByUID('page', 'home', { lang })
    const partners = await $prismic.api.getByUID('partners', 'partners')
    await store.dispatch('prismic/load', { lang, page })
    return {
      page,
      partners
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.title)
    }
  }
}
</script>
