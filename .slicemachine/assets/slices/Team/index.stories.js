import MyComponent from '../../../../slices/Team';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Team'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"name":[{"type":"paragraph","text":"Officia dolore officia cupidatat aliqua enim excepteur veniam nisi ullamco ea sint. Aliquip consectetur ea reprehenderit aliqua sit nostrud culpa nulla consectetur. Ullamco magna sint veniam irure exercitation sint reprehenderit ea amet.","spans":[]}],"description":[{"type":"paragraph","text":"Labore est nostrud quis aute proident. Eu dolore reprehenderit do nulla nostrud quis irure anim. Est duis eu ut pariatur ad eiusmod deserunt adipisicing qui dolore occaecat.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482"},"linklabel":"goes"}],"primary":{"title":[{"type":"heading1","text":"Animal","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt ipsum irure do. Laborum dolore exercitation incididunt officia minim ex qui anim proident sint labore consequat sit nulla dolore. Fugiat reprehenderit enim deserunt aute ad dolore cupidatat ullamco non et.","spans":[]}]},"slice_type":"team","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
