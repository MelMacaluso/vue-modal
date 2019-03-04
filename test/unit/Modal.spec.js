import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/Modal'

describe('Multiple Content modals', ()=> {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Modal, {
      propsData: {
        inception: true,
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
        showNav: true,
        showArrows: true
      }
    })
  // Open the modal
  wrapper.setData({ modalVisible: true })
  })

  describe('Contents passed', ()=> {
    it('Show populated buttons', () => {
      wrapper.props().modals.forEach(btn => {
        expect(wrapper.html()).toContain(`<button>${btn.btnText}</button>`)
      })
    })
    it('Show populated contents', () => {
      wrapper.props().modals.forEach((btn,i) => {
        wrapper.setData({ clickedBtn: i })
        expect(wrapper.html()).toContain(btn.modalContent)
      })
    })
  })

  describe('Current viewed Modal (clickedBtn)', ()=> {
    it('Increase on button click', () => {
      const btn = wrapper.find('.navigation-arrows .next-arrow')
      btn.trigger('click')
      expect(wrapper.vm.clickedBtn).toBe(1)
    })
    it('Decrease on button click', () => {
      wrapper.setData({ clickedBtn: 1 })
      const btn = wrapper.find('.navigation-arrows .prev-arrow')
      btn.trigger('click')
      expect(wrapper.vm.clickedBtn).toBe(0)
    })
  })
})

