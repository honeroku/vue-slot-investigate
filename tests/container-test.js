import Vue           from 'vue';
import TestContainer from '../components/test-container';

describe('TestContainer', () => {
  it('renders the initial message', (done) => {
    const Constructor = Vue.extend(TestContainer);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent).toBe('init');
    done();
  });

  it('renders the updated message', (done) => {
    const Constructor = Vue.extend(TestContainer);
    const vm = new Constructor().$mount();
    vm.message = 'updated';
    Vue.nextTick().then(() => {
      expect(vm.$el.textContent).toBe('updated');
      done();
    });
  });

  it('renders the updated message after slot switch', (done) => {
    const Constructor = Vue.extend(TestContainer);
    const vm = new Constructor().$mount();

    //console.log(vm.$refs.content);
    expect(vm.$refs.content.decorate).toBe(false);

    vm.message = 'updated';
    Vue.nextTick().then(() => {
      expect(vm.$el.textContent).toBe('updated');
      vm.$refs.content.decorate = true;
      Vue.nextTick().then(() => {
        expect(vm.$el.textContent).toBe('decorated updated');
        vm.message = 'more-updated';
        Vue.nextTick().then(() => {
          expect(vm.$el.textContent).toBe('decorated more-updated');
          done();
        });
      });
    });
  });
})
