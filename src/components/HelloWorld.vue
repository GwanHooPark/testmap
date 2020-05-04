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
    <button class="add-button">Add to home screen</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted: function() {
    console.log('hello world mounted');
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('before install')
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      window.deferredPrompt = e;
      // Stash the event so it can be triggered later.
      // eslint-disable-next-line no-undef

      /*var deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      let addBtn = document.querySelector(".add-button");
      addBtn.style.display = 'block';*/

      //addBtn.addEventListener('click', (e) => {

        // hide our user interface that shows our A2HS button
        //addBtn.style.display = 'none';
        // Show the prompt
      window.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
      window.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
        window.deferredPrompt = null;
        });
      //});
    });
    window.addEventListener('appinstalled', () => {
      console.log("app installed");
    });
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
