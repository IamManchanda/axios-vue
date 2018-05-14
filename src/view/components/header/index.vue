<template>
  <header class="c-Header">
    <div class="c-Header_Logo">
      <router-link to="/" class="c-Header_LogoLink">Vue & Vuex with Axios</router-link>
    </div>
    <nav class="c-Header_Nav">
      <ul class="c-NavList">
        <li class="c-NavList_Item">
          <router-link to="/signup" class="c-NavList_ItemLink">Sign Up</router-link>
        </li>
        <li class="c-NavList_Item">
          <router-link to="/signin" class="c-NavList_ItemLink">Sign In</router-link>
        </li>
        <li class="c-NavList_Item">
          <router-link to="/dashboard" class="c-NavList_ItemLink">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'ComponentHeader',
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
