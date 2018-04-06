<template>
<div>
  <test-content ref="content">
    <div slot="main">
      <test-child :message="message" />
    </div>
  </test-content>
</div>
</template>

<script>
import TestChild   from './test-child';
import TestContent from './test-content';

export default {
  name: 'TestContainer',
  components: {
    TestChild,
    TestContent,
  },
  data: function() {
    return {
      message: 'init',
    };
  },
};
</script>
