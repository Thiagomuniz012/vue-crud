<template>
  <div>
    <footer>
      <ul>
        <li @click="navigateToHome">Home</li>
        <li @click="navigateToAbout">About</li>
        <li @click="navigateToContact">Contact</li>
        <li @click="navigateToConfig">Config</li>
        <li @click="navigateToFlag">Flag</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  methods: {
    navigateToHome() {
    },
    navigateToAbout() {
    },
    navigateToContact() {
    },
    navigateToConfig() {
    },
    navigateToFlag() {
    },
  },
};
</script>

<style>
footer {
  background-color: #333;
  color: #fff;
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 10px;
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
}
</style>
