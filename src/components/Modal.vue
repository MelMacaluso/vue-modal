<template>
  <div>
    <div v-if="!inception">
      <button @click.stop="toggleModal">{{btnText}}</button>
    </div>
    <div v-else>
      <div v-for="(modal,i) in modals" :key="`modal-${i}`">
        <button @click.stop="toggleModal(i); beforeOpen()">{{modal.btnText}}</button>
        <button v-if="modal.closeBtn" @click.stop="modal.toggleModal">
          <div v-html="modal.closeBtnContent"></div>
        </button>
      </div>
    </div>
    <transition name="fade">
      <div class="pin bg-overlay" v-if="modalVisible" @click.self="toggleModal(); beforeClose()">
        <button v-if="closeBtn" @click.stop="toggleModal">
          <div v-html="closeBtnContent"></div>
        </button>
        <div v-if="!inception" class="modal">
          <slot v-if="!modalContent"></slot>
          <div v-else v-html="modalContent"></div>
        </div>
        <div v-else class="modals">
          <div class="content">
            <div v-for="(modal,i) in modals" :key="`content-${i}`">
                <transition name="fade">
                    <div v-if="clickedBtn === i" v-html="modal.modalContent"></div>
                </transition>
            </div>
          </div>
          <div class="navigation" v-if="showNav">
            <div v-for="(modal,i) in modals" :key="`btn-${i}`">
              <button :class="clickedBtn === i ? 'active' : '' " @click.stop="switchContent(i)">
                {{modal.btnText}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      clickedBtn: 0
    };
  },
  name: "Modal",
  props: {
    btnText: String,
    modalContent: String,
    closeBtn: Boolean,
    closeBtnContent: String,
    inception: Boolean,
    modals: Array,
    showNav: Boolean
  },
  methods: {
    beforeOpen() {
      this.$emit("before-open");
    },
    beforeClose() {
      this.$emit("before-close");
    },
    toggleModal(i) {
      this.modalVisible = !this.modalVisible;
      this.clickedBtn = i;
    },
    switchContent(i) {
      this.clickedBtn = i;
    }
  }
};
</script>

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
