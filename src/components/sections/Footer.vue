<template>
  <div>
    <footer class="footer container">
      <ul class="footer__contacts">
        <li class="footer__contacts-item">
          Краснодарский край, г. Сочи
        </li>
        <li class="footer__contacts-item">
          ул. Тоннельная 2а, офис 403
        </li>
        <li class="footer__contacts-item">
          <a
            href="tel:+78622659313"
            class="menu__link"
          >+7 862 265 9313</a>
        </li>
        <li class="footer__contacts-item">
          <a
            href="mailto:go@terminalgo.ru"
            class="menu__link"
          >go@terminalgo.ru</a>
        </li>
      </ul>
      <div class="footer-logo__block">
        <img
          src="@/assets/img/th_logo.png"
          alt=""
          class="footer-logo__img"
        >
        <img
          src="@/assets/img/th_games.png"
          alt=""
          class="footer-logo__img"
        >
        <img
          src="@/assets/img/th_go.png"
          alt=""
          class="footer-logo__img"
        >
        <img
          src="@/assets/img/GO_Logo_Alpha.png"
          alt=""
          class="footer-logo__img"
        >
      </div>
      <ul class="footer__menu-list">
        <li class="menu__item">
          <router-link
            to="/karta"
            class="menu__link"
          >
            Карта
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            to="/katalog"
            class="menu__link"
          >
            Каталог рекламных кластеров
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            to="/usloviya"
            class="menu__link"
          >
            Условия размещения
          </router-link>
        </li>
        <li class="menu__item">
          <a
            href="javascript:"
            class="menu__link"
          >Контакты</a>
        </li>
        <li class="menu__item">
          <a
            href="javascript:"
            class="menu__link"
          >Новости</a>
        </li>
        <li class="menu__item">
          <router-link
            to="/politika-konfidencialnosti"
            class="menu__link"
          >
            Политика конфиденциальности
          </router-link>
        </li>
      </ul>
    </footer>
    <div class="footer_bottom container">
      <p>Copyright © 2021 TECHHOME LLC. All rights reserved</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="sass" scoped>
.footer
  border-top: 1px solid #8b8b8b
  border-bottom: 1px solid #8b8b8b
  margin-top: 10px
  margin-bottom: 10px
  padding: 10px 0
  position: relative
  display: grid
  grid-template-columns: repeat(3, 1fr )
  align-items: center

  &-logo
    &__block
      display: flex
      flex-direction: row
      justify-content: space-around
      width: 80%
      margin: auto

    &__img
      width: auto
      height: 45px

  &__link
    display: block
    width: fit-content
    height: fit-content

  &__menu-list
    list-style: none
    justify-self: flex-end

  &__contacts
    list-style: none
    font-size: 14px
    justify-self: flex-start

    &-item
      margin-bottom: 5px

.footer_bottom
  font-size: 14px
  color: #b9b9b9
  position: relative
  display: flex
  justify-content: center
  margin-bottom: 10px

  &__link
    font-size: 14px
    color: #b9b9b9
    margin-left: 20px

    &:hover
      color: #b9b9b9

.menu__link
  font-size: 14px
  color: #b9b9b9

.menu__item
  margin-bottom: 5px
</style>
