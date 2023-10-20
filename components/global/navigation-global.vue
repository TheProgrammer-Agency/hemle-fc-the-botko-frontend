<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('index')">
          <span>{{ $t('header.home') }}</span>
        </n-link>

      </li>

      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/#teams')">
          <span>{{ $t('header.equip') }}</span>
        </n-link>

      </li>

      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/blog')">
          <span>{{ $t('header.actus') }}</span>
        </n-link>

      </li>

      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/pricing')">
          <span>{{ $t('header.become_member') }}</span>
        </n-link>

      </li>
      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/contact-us-with-map')">
          <span>{{ $t('header.contact') }}</span>
        </n-link>

      </li>


    </ul>
  </nav>
</template>

<style lang="scss">
.mega__list {
  display: flex;
  li {
    flex-basis: 25%;
  }
}
</style>