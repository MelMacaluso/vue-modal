<template>
  <div>
    <button @click.stop="toggleModal">{{btnText}}</button>
    <transition name="fade">
      <div class="pin bg-overlay" v-if="modalVisible" @click.self="toggleModal">
        <button v-if="closeBtn" @click.stop="toggleModal">
          <div v-html="closeBtnHTML"></div>
        </button>
        <div v-html="modalHTML">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false
    };
  },
  name: "Modal",
  props: {
    btnText: String,
    modalHTML: String,
    closeBtn: Boolean,
    closeBtnHTML: String
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pin {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
.bg-overlay {
  background-color: rgba(0, 0, 0, 0.8);
}

//Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
