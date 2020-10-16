import React from 'react';
import { shallow } from 'enzyme';
import { GifApp } from '../GifApp';
import '@testing-library/jest-dom';

describe('Pruebas en >GifApp/>', () => {

  test('Debe mostrar el componente', () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    

    const catregories=['one punch', 'gragon ball']
    const wrapper= shallow(<GifApp defaultCategories={catregories}/>)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(catregories.length)
  })
  
});
