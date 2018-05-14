<template>
  <div class="p-Welcome">
    <h1 class="p-Welcome_Heading">Time to learn something new!</h1>
    <p class="p-Welcome_Content">You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
    <div class="c-CallToAction">
      <router-link to="/signup" class="c-CallToAction_Link">Sign Up</router-link>
      <router-link to="/signin" class="c-CallToAction_Link">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageWelcome',
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
