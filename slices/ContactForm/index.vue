<template>
  <Bounded id="ContectForm" as="section" class="bg-light-blue">
    <h2 class="text-center mb-4">
      Hubungi Kami
    </h2>
    <form
      action="/api/contact"
      method="post"
      class="grid grid-cols-1 gap-6 p-4 border bg-white rounded-lg border-gray-400 shadow-md "
    >
      <InputField label="Name" name="name" placeholder="Jane Doe" />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane.doe@example.com"
      />
      <TextareaField
        label="Message"
        name="message"
        placeholder="Write your message here…"
      />
      <button
        type="submit"
        class="flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-turquoise rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Send message <span aria-hidden="true" class="text-xl ml-2">
          &rarr;
        </span>
      </button>
    </form>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
