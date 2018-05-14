<template>
  <div class="p-SignUp">
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
          <label for="age">Your Age</label>
          <input
            placeholder="Enter Age"
            type="number"
            id="age"
            v-model.number="age">
        </div>
        <div class="c-AuthForm-Input">
          <label for="password">Password</label>
          <input
            placeholder="Enter Password"
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="c-AuthForm-Input">
          <label for="confirm-password">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirm-password"
            v-model="confirmPassword">
        </div>
        <div class="c-AuthForm-Input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="" disabled>Select Country</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="c-AuthForm-Hobbies">
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="c-AuthForm_HobbyList">
            <div
              class="c-AuthForm-Input"
              v-for="(hobbyInput, index) in hobbyInputs"
              :key="hobbyInput.id">
              <label :for="hobbyInput.id">Hobby #{{ index + 1 }}</label>
              <input
                :placeholder="`Add Hobby #${ index + 1 }`"
                type="text"
                :id="hobbyInput.id"
                v-model="hobbyInput.value">
              <button @click="onDeleteHobby(hobbyInput.id)" class="isCloseButton" type="button">X</button>
            </div>
          </div>
        </div>
        <div class="c-AuthForm-Input isInline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
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
  name: 'PageSignUp',
  data() {
    return {
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      country: 'usa',
      hobbyInputs: [],
      terms: false,
    };
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: '',
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms,
      };
      console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
