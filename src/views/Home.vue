<template>
  <div class="home">
    <Map/>
    <button class="add-button" v-on:click="clickInstallBtn">Add to home screen</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map
  },
  data: function() {
    return {
      deferredPrompt: null
    };
  },
  mounted: function() {
    console.log('hello world mounted');
    window.addEventListener('appinstalled', () => {
      console.log("app installed");
    });
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log("app beforeinstalled");
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
    hideMyInstallPromotion: function(){
      let addBtn = document.querySelector(".add-button");
      addBtn.style.display = 'none';
    },
    clickInstallBtn: function(){
      this.hideMyInstallPromotion();
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  }
};
</script>
<style>
  .add-button {
    position : absolute;
    top: 0;
    left: 0;
    display:none;
    z-index:1000
  }
</style>
