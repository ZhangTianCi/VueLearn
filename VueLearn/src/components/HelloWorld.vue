<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-for="(item) in 100" :key="item">{{item}}<br></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HelloWorld"
    };
  }
};
</script>
