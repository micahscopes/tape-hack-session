import test from 'tape'
import { shallow } from 'vue-test-utils'
import MyInput from '../../src/components/MyInput'

test('MyInput can have its input changed', t => {
  t.plan(1)
  const wrapper = shallow(MyInput)
  const input = wrapper.find('input')
  input.element.value = 'edited'
  // input.trigger('input')
  t.equal(input.element.value, 'edited', 'MyInput value edited')
})

test('MyInput can have its prop changed', t => {
  t.plan(1)
  const wrapper = shallow(MyInput)
  const input = wrapper.find('input')
  const output = wrapper.find('#output')
  input.element.value = 'edited'
  input.trigger('input')
  t.equal(output.text(), 'edited', 'MyInput prop edited')
})
