import '@testing-library/jest-dom'
import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem></GifGridItem>', () => {
  const title ='Un titulo'
  const url ='http//'
  test('Debe mostrar el copmponenete correctamnte', () => {
    
const wrapper = shallow(<GifGridItem title={title} url={url}/>) 

   expect(wrapper).toMatchSnapshot()
  })
  
})
