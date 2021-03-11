<template>
  <header class="header">
    <a href="/" class="header__th-logo-link">
      <img src="@/assets/img/icons/go_logo.svg" alt="" class="header__go-logo-img">
    </a>
    <div class="header__group_right">
      <button id="header__partner-btn" class="btn btn-outline-light" role="button"
              @click="modalVisible = !modalVisible">Стать партнёром
      </button>
    </div>
  </header>
  <teleport to="body">
    <AppModal
      :title="modalTitle"
      :visibility="modalVisible"
      @close="modalVisible = false"
      :modalSize="{height: '300px'}">
      <form action="" class="request-form" @submit.prevent="submitRequest" v-if="!policyVisible">
        <div class="input-block">
          <label for="phone">Телефон:</label>
          <input type="tel" class="form-control" name="phone" id="phone" v-model="requestPhone">
        </div>
        <div class="input-block">
          <button type="submit" class="request btn btn-outline-success">Отправить</button>
        </div>
        <a href="#" class="policy-link" @click.prevent="openPolicy">Политика конфиденциальности</a>
      </form>
    </AppModal>
  </teleport>
</template>

<script>
import AppModal from '@/components/ui/AppModal'

export default {
  components: { AppModal },
  data () {
    return {
      modalVisible: false,
      policyVisible: false,
      requestPhone: '',
      modalTitle: 'Оставить заявку'
    }
  },
  methods: {
    submitRequest () {
      console.log(this.requestPhone)
    },
    openPolicy () {
      this.policyVisible = true
      this.modalTitle = 'Политика конфиденциальности'
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  position: fixed
  width: 100vw
  display: flex
  flex-direction: row
  padding: 10px 30px
  justify-content: space-between
  align-items: center
  z-index: 1000
  background-color: rgba(5, 5, 5, .9)

  &__go-logo
    &-img
      display: block
      width: 20px

  &__group
    &_right
      display: flex
      flex-direction: row
      flex-wrap: wrap
      align-items: center
      justify-content: space-between
      width: 250px

.burger
  cursor: pointer
  width: 50px
  display: block
  z-index: 3

  &__item
    width: 50px
    text-align: end
    border-top: 2px solid #fff
    margin: 0
    transition: .3s

    &.horizontal
      margin-bottom: 10px

.menu
  position: absolute
  background-color: rgba(20, 20, 21, .9)
  right: -600px
  top: 0
  height: 100vh
  width: 500px
  z-index: 2
  transition: .3s

  &__list
    display: block
    margin-top: 30px
    list-style: none
    max-width: 400px

    &_bottom
      display: block
      position: relative
      top: 50vh
      list-style: none
      display: flex
      flex-direction: row
      font-size: 16px
      justify-content: space-between
      max-width: 400px

  &__item
    margin-bottom: 20px

  &__link
    font-size: 20px

    &_bottom
      font-size: 16px

  &_opened
    right: 0

.account
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-start
  flex-wrap: wrap
  height: 107px

  &__icon
    width: 50px
    height: auto
    display: block
    margin: 20px

.input-block
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  margin-bottom: 30px

label
  color: #070707

@supports (backdrop-filter: blur(5px) saturate(180%)) or (-webkit-backdrop-filter: blur(5px) saturate(180%))
  .header
    -webkit-backdrop-filter: blur(5px) saturate(180%)
    backdrop-filter: blur(5px) saturate(150%)
    background-color: #2b2b2b4d
</style>
