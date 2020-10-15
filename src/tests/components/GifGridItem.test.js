import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem></GifGridItem>", () => {

  const title = "Un titulo";
  const url = "http//";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el copmponenete correctamnte", () => {


    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con titulo ', () => {
    const p=wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })
  
  test('Debe de tener la imagen igual al url y alt de los props ', () => {
    const img= wrapper.find('img')
    expect(img.props().src).toBe(url)
  })
  
  test('Debe de tener animacion css ', () => {
    const div= wrapper.find('div')
    const className= div.prop('className')
    expect(className.includes('animate_fadeIn')).toBe(false)
  })
  
});
