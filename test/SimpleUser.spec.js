import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SimpleUser from '../src/SimpleUser.jsx';

describe('SimpleUser', () => {

  it('have div dom', () => {
    const props = {
      user: {},
      onSelect: sinon.spy()
    }
    const wrapper = <SimpleUser {...props} />
    expect(shallow(wrapper).find('.simple-user')).to.have.length(1)
  });
});
