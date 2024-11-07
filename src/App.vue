<script setup>
</script>

<template>
  <Menu>
    <div class="nav">
      <RouterLink class="route" to="/"> Início </RouterLink>
      <RouterLink class="route" to="/detalhes"> Detalhes </RouterLink>
    </div>
  </Menu>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.route {
  color: black;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 600;
  margin-left: 20px;
}

.nav {
  display: inline;
  margin-left: 80px;
}
</style>
