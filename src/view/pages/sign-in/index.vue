<template>
  <div class="p-SignIn">
    <div class="c-AuthForm">
      <form @submit.prevent="onSubmit">
        <div class="c-AuthForm-Input">
          <label for="email">Email</label>
          <input
            placeholder="Enter Email"
            type="email"
            id="email"
            v-model="email">
        </div>
        <div class="c-AuthForm-Input">
          <label for="password">Password</label>
          <input
            placeholder="Enter Password"
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="c-AuthForm-Submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
    },
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
