<template>
  <div>
    <footer class="footer container">
      <router-link to="/" class="footer__link">
        <img src="@/assets/img/TH_Logo_Vertical_W.png" alt="" class="footer__th-logo">
      </router-link>
      <ul class="footer__menu-list">
        <li class="menu__item"><router-link to="/karta" class="menu__link">Карта</router-link></li>
        <li class="menu__item"><a href="javascript:" class="menu__link">Каталог рекламных кластеров</a></li>
        <li class="menu__item"><a href="javascript:" class="menu__link">Условия размещения</a></li>
        <li class="menu__item"><a href="javascript:" class="menu__link">Контакты</a></li>
        <li class="menu__item"><a href="javascript:" class="menu__link">Новости</a></li>
      </ul>
      <ul class="footer__contacts">
        <li class="footer__contacts-item">Краснодарский край, г. Сочи</li>
        <li class="footer__contacts-item">ул. Тоннельная 2а, офис 403</li>
        <li class="footer__contacts-item">8(800)000-00-00</li>
        <li class="footer__contacts-item">tech-home@mail.ru</li>
      </ul>
    </footer>
    <div class="footer_bottom container">
      <p>Copyright © 2021 Techhome LLC. All rights reserved</p>
      <div class="">
        <router-link to="/politika-konfidencialnosti" class="footer_bottom__link">Политика конфиденциальности</router-link>
      </div>
    </div>
  </div>
</template>

<script>
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

  &__th-logo
    display: block
    width: 150px

  &__link
    display: block
    width: fit-content
    height: fit-content

  &__menu-list
    list-style: none
    justify-self: center

    & .menu__link
      font-size: 14px
      color: #b9b9b9

    & .menu__item
      margin-bottom: 5px

  &__contacts
    list-style: none
    font-size: 14px
    justify-self: end

    &-item
      margin-bottom: 5px

.footer_bottom
  font-size: 14px
  color: #b9b9b9
  position: relative
  display: flex
  justify-content: space-between
  margin-bottom: 10px

  &__link
    font-size: 14px
    color: #b9b9b9
    margin-left: 20px

    &:hover
      color: #b9b9b9
</style>
