<template>
  <nav class="menu">
    <router-link
      class="menu__link"
      active-class="menu__link_active"
      :to="{ name: 'currencies' }"
    >
      Список Валют
    </router-link>
    <router-link
      class="menu__link"
      active-class="menu__link_active"
      :to="{ name: 'converter' }"
    >
      Конвертер
    </router-link>
  </nav>
</template>

<style lang="scss">
.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    padding: 10px 15px;
    text-decoration: none;
    color: #000;
    border: 1px solid rgba(18, 43, 66, 0.87);

    &_active {
      background: rgba(18, 43, 66, 0.87);
      color: #fff;
    }

    &:last-child {
      border-left: none;
    }
  }
}
</style>
