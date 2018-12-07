<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-html="parsed"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

import markdown from '@/service/markdown';
import { getDoc } from '@/service/getDoc';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      doc: 'I am using __markdown__.',
      hash: 'QmfSGhanWLSuaSz3oUp3wKZ6qrD1b5Hw4SSAS1X7J3UAbb',
    };
  },
  computed: {
    parsed() {
      return markdown(this.doc);
    },
  },
  mounted() {
    getDoc(this.hash).then(res => res.text()).then((doc) => {
      this.doc = doc;
    });
  },
};
</script>
