<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <button class="add-button" style="display:none" v-on:click="clickInstallBtn">Add to home screen</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function () {
    return {
      deferredPrompt: null
    }
  },
  mounted: function() {
    console.log('hello world mounted');

    window.addEventListener('appinstalled', () => {
      console.log("app installed");
    });

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallPromotion();
    });
  },
  methods: {
    showInstallPromotion: function(){
      let addBtn = document.querySelector(".add-button");
      addBtn.style.display = 'block';
    },
    clickInstallBtn: function(){
      this.hideMyInstallPromotion();
      // Show the install prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      })

    },
    hideMyInstallPromotion: function(){
      let addBtn = document.querySelector(".add-button");
      addBtn.style.display = 'none';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}
</style>
