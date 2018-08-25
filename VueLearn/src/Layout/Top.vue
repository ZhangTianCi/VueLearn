<template>
    <div>
        <img src='../assets/logo.png'>
        <router-view/>
    </div>
</template>
<script>
export default {
  name: "Layout_Top",
  data() {
    return {
      Data: 100,
      msg: "Welcome to Your Top"
    };
  }
};
</script>
