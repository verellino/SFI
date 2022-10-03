import MyComponent from '../../../../slices/PartnerLogos';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PartnerLogos'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a"},"alt":"greatly","link":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}}],"primary":{"title":[{"type":"heading1","text":"Bottle","spans":[]}]},"slice_type":"partner_logos","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
