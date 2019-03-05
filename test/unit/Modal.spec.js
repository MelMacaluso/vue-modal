import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal'

describe('Multiple Modals', ()=> {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Modal, {
      propsData: {
        multiple: true,
        modals: [
          {
            btnText: 'Press me 1',
            modalContent: 'This is <strong>the</strong> content 1'
          },
          {
            btnText: 'Press me 2',
            modalContent:
              '<img src="https://media.giphy.com/media/5exwXWg9u7yow/giphy.gif">'
          },
          {
            btnText: 'Press me 3',
            modalContent: 'This is the <h3>content 3</h3>'
          }
        ],
        closeBtn: true,
        closeBtnContent: "<span>x</span>",
        showNav: true,
        showArrows: true
      }
    })
  // Open the modal
  wrapper.setData({ modalVisible: true })
  })

  describe('Contents rendered', ()=> {
    it('Trigger-modal Buttons', () => {
      wrapper.props().modals.forEach(btn => {
        expect(wrapper.html()).toContain(`<button>${btn.btnText}</button>`)
      })
    })
    it('Modal Cotents', () => {
      wrapper.props().modals.forEach((btn,i) => {
        wrapper.setData({ clickedBtn: i })
        expect(wrapper.html()).toContain(btn.modalContent)
      })
    })
  })

  describe('Interactions', ()=> {
    it('Open Modal', () => {
      wrapper.setData({ modalVisible: false })
      const btn = wrapper.find('.btns-wrapper button')
      btn.trigger('click')
      expect(wrapper.vm.modalVisible).toBeTruthy()
      expect(wrapper.contains('.modals')).toBeTruthy()
      expect(wrapper.contains('.overlay')).toBeTruthy()
    })
    it('Close Modal from closeBtn', () => {
      const btn = wrapper.find('.close')
      btn.trigger('click')
      expect(wrapper.vm.modalVisible).toBe(false)
      expect(wrapper.contains('.modals')).toBe(false)
      expect(wrapper.contains('.overlay')).toBe(false)
    })
    it('Close Modal from overlay', () => {
      const overlay = wrapper.find('.overlay')
      overlay.trigger('click')
      expect(wrapper.vm.modalVisible).toBe(false)
      expect(wrapper.contains('.modals')).toBe(false)
      expect(wrapper.contains('.overlay')).toBe(false)
    })
    it('Next Content', () => {
      const btn = wrapper.find('.navigation-arrows .next-arrow')
      btn.trigger('click')
      expect(wrapper.vm.clickedBtn).toBe(1)
    })
    it('Previous Content', () => {
      wrapper.setData({ clickedBtn: 1 })
      const btn = wrapper.find('.navigation-arrows .prev-arrow')
      btn.trigger('click')
      expect(wrapper.vm.clickedBtn).toBe(0)
    })
  })
})

