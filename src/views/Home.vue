<template>
  <div class="home">
    <x-header title="aaa"></x-header>
    <group title="components">
      <cell title="number">1</cell>  
      <cell title="link" is-link>2</cell>
      <popup-picker v-model="picker1" title="picker" :data="[['1', '2', '3']]"></popup-picker>
      <x-input title="XInput" placeholder="please input"></x-input>
    </group>
    <group title="x-icon">
      <x-icon type="ios-search" size="30"></x-icon>
      <x-icon type="ios-search-strong" size="30"></x-icon>
      <x-icon type="ios-star" size="30"></x-icon>
      <x-icon type="ios-star-half" size="30"></x-icon>
      <x-icon type="ios-star-outline" size="30"></x-icon>
      <x-icon type="ios-heart" size="30"></x-icon>
      <x-icon type="ios-heart-outline" size="30"></x-icon>
      <x-button type="primary">XButton</x-button>
    </group>
  </div>
</template>

<script>
import { Cell, Group, PopupPicker, XButton, XHeader, XInput } from 'vux'

export default {
  name: 'home',
  components: {
    Cell,
    Group,
    PopupPicker,
    XButton,
    XHeader,
    XInput
  },
  created () {
    this.$vux.toast.text('hello')
  },
  data () {
    return {
      picker1: ['1']
    }
  }
}
</script>
