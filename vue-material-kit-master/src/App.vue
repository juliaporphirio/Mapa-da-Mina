<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: SweetButter;
  src: url(assets/font/sweetbuttermilksansfree.ttf);
}

@font-face {
  font-family: Dandeleon;
  src: url(assets/font/dandeleonvintagedemo.ttf);
}
</style>

