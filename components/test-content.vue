<template>
<div>
  <div v-if="decorate">
    <!-- some deeply nested decoration -->
    <div>
      <div>
        <div>decorated</div>
        <div>
          <slot name="main" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <slot name="main" />
  </div>
</div>
</template>

<script>
export default {
  name: 'TestContent',
  data: function() {
    return {
      decorate: false,
    };
  },
};
</script>
