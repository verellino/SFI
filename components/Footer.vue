<template>
  <Bounded as="footer" class="bg-turquoise pb-12 text-white md:pb-12 shadow ">
    <!-- <div class="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
      <SignUpForm :settings="settings" />
    </div> -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="https://strategicfuturesindonesia.id/" class="flex items-center mb-4 sm:mb-0">
        <!-- <img src="#" class="mr-3 h-8" alt="Logo"> -->
        <span class="self-center text-lg sm:text-2xl whitespace-nowrap font-serif">Strategic Futures Indonesia</span>
      </a>
      <ul class="flex flex-wrap flex-col sm:flex-row items-start sm:items-center text-sm">
        <li class="mr-4 py-2 hover:underline md:mr-6 ">
          <nuxt-link to="/">
            About
          </nuxt-link>
        </li>
        <li class="mr-4 py-2 hover:underline md:mr-6">
          <nuxt-link to="/" >
            Privacy Policy
          </nuxt-link>
        </li>
        <li class="py-2 hover:underline">
          <nuxt-link to="#ContectForm" >
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8">
    <span class="block sm:text-sm text-left text-xs sm:text-center">© 2022 <a href="https://strategicfuturesindonesia.id/" class="hover:underline">Strategic Futures Indonesia</a>. All Rights Reserved.
    </span>
  </Bounded>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
