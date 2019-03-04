<template>
  <div>
    <div v-if="!multiple">
      <button @click.stop="toggleModal">{{btnText}}</button>
    </div>
    <div v-else class="btns-wrapper">
      <div v-for="(modal,i) in modals" :key="`modal-${i}`"  class="btn-wrapper">
        <button @click.stop="toggleModal(i); beforeOpen()">{{modal.btnText}}</button>
      </div>
    </div>
    <transition name="fade">
      <div class="overlay" v-if="modalVisible" @click.self="toggleModal(); beforeClose()">
        <button class="close" v-if="closeBtn" @click.stop="toggleModal(); beforeClose()">
          <div v-html="closeBtnContent"></div>
        </button>
        <div v-if="!multiple" class="modal">
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
          <div class="navigation-arrows" v-if="showArrows">
            <button class="prev-arrow" v-if="clickedBtn !== 0" @click="prevModal" v-html="arrowPrevContent"></button>
            <button class="close" v-if="showArrowsCloseBtn" @click.stop="toggleModal(); beforeClose()">
              <div v-html="closeBtnContent"></div>
            </button>
            <button class="next-arrow" v-if="clickedBtn !== (modals.length - 1) " @click="nextModal" v-html="arrowNextContent"></button>
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
    closeBtnContent: {
      type: String,
      default: "X"
    },
    multiple: Boolean,
    modals: Array,
    showNav: Boolean,
    showArrows: Boolean,
    showArrowsCloseBtn: Boolean,
    arrowPrevContent: {
      type: String,
      default: "<"
    },
    arrowNextContent: {
      type: String,
      default: ">"
    }
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
    },
    prevModal() {
      this.clickedBtn > 0 ? (this.clickedBtn -= 1) : "";
    },
    nextModal() {
      this.clickedBtn < this.modals.length - 1 ? (this.clickedBtn += 1) : "";
    }
  }
};
</script>

<style scoped lang="scss">
.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
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
