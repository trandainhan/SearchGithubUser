import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SimpleUser from '../src/SimpleUser.jsx';

describe('SimpleUser', () => {

  const props = {
    user: {
      login: "Nhan",
      src: ''
    },
    onSelect: sinon.spy()
  }
  const wrapper = <SimpleUser {...props} />

  it('should render right class', () => {
    expect(shallow(wrapper).find('.simple-user')).to.have.length(1);
  });

  it('Should render right content', () => {
    expect(shallow(wrapper).find('p').text()).to.equal('Nhan');
  })
});
