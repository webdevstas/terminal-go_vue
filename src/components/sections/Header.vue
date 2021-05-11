<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <router-link to="/" class="header__th-logo-link">
          <div class="header__logo-block">
            <img src="@/assets/img/icons/go_logo.svg" alt="" class="header__go-logo-img">
            <img src="@/assets/img/icons/THGO_Logo.png" alt="" class="header__th-logo-img">
          </div>
        </router-link>
        <div class="header__group_right">
          <button id="header__partner-btn" class="btn btn-outline-light" role="button"
                  @click="modalVisible = !modalVisible">Стать партнёром
          </button>
        </div>
      </div>
    </div>
  </header>
  <teleport to="body">
    <AppModal
      :title="modalTitle"
      :visibility="modalVisible"
      @close="modalVisible = false"
      :modalSize="{height: '350px', width: '500px'}">
      <Form action="" class="request-form" @submit="submitRequest">
        <ErrorMessage name="phone" :class="'danger form-error'"/>
        <div class="input-block">
          <label for="phone">Телефон:</label>
          <Field
            type="tel"
            class="form-control"
            name="phone"
            id="phone"
            v-model="requestPhone"
            :rules="phoneRules"
            :validateOnInput="true"/>
        </div>
        <div class="input-block">
          <button type="submit" class="request btn btn-outline-success">Отправить</button>
        </div>
        <div class="modal-policy">
          <p class="modal-policy__text">Нажимая кнопку "Отправить" вы подтверждаете своё согласие с
            <a href="#"
               class="modal-policy__link"
               @click.prevent="goTo('/politika-konfidencialnosti')">политикой конфиденциальности</a></p>
        </div>
      </Form>
    </AppModal>
    <AppAlert
      title="Заявка успешно отправлена"
      :visibility="alertVisible"
      type="success"
      @alertClosed="alertVisible = false"
      message="Спасибо! Ближайшее время мы с вами свяжемся."
    />
  </teleport>
</template>

<script lang="ts">
import AppModal from '@/components/ui/AppModal'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import AppAlert from '@/components/ui/AppAlert'

export default {
  components: {
    AppAlert,
    AppModal,
    Field,
    Form,
    ErrorMessage
  },

  data () {
    return {
      modalVisible: false,
      requestPhone: '',
      modalTitle: 'Оставить заявку',
      phoneRules: yup.string().required('Введите номер телефона').matches('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$', 'Введите корректный номер телефона'),
      alertVisible: false
    }
  },

  methods: {
    submitRequest () {
      this.modalVisible = false
      this.alertVisible = true
      console.log(this.requestPhone)
    },

    goTo (path) {
      this.modalVisible = false
      this.$router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  position: fixed
  padding: 10px 0
  z-index: 1000
  background-color: rgba(5, 5, 5, .9)
  width: 100%

  &__row
    display: flex
    flex-direction: row
    width: 100%
    align-items: center
    justify-content: space-between

  &__logo-block
    display: flex
    flex-direction: row
    width: 100px
    justify-content: space-between
    align-items: center

  &__go-logo
    &-img
      display: inline-block
      width: auto
      height: 40px

  &__th-logo
    &-img
      height: 30px

  &__group
    &_right
      display: flex
      flex-direction: row
      flex-wrap: wrap
      align-items: center
      justify-content: space-between

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

.modal
  &-policy
    color: #070707
    font-size: 14px
    max-width: 50%
    margin: auto

    &__link
      color: #070707

label
  color: #070707

@supports (backdrop-filter: blur(5px) saturate(180%)) or (-webkit-backdrop-filter: blur(5px) saturate(180%))
  .header
    -webkit-backdrop-filter: blur(5px) saturate(180%)
    backdrop-filter: blur(5px) saturate(150%)
    background-color: #2b2b2b4d
</style>
