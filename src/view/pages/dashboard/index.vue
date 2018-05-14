<template>
  <div class="p-Dashboard">
    <h1 class="p-Dashboard_Heading">That's the dashboard!</h1>
    <p class="p-Dashboard_Content">You should only get here if you're authenticated!</p>
    <p class="p-Dashboard_Content">Your Email Address : {{ email }}</p>
  </div>
</template>

<script>
import axios from '@/axios/auth';

export default {
  name: 'PageDashboard',
  data() {
    return {
      email: '',
    };
  },
  created() {
    axios
      .get('/users.json')
      .then((response) => {
        console.log(response);
        const { data } = response;
        const users = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const key in data) {
          if ({}.hasOwnProperty.call(data, key)) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
        }
        console.log(users);
        this.email = users[0].email;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
