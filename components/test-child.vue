<template>
<div>{{ message }}</div>
</template>

<script>
export default {
  name: 'TestChild',
  props: {
    message: {
      type   : String,
      default: '',
    },
  },
};
</script>
