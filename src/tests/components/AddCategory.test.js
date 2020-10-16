import React from "react";
import '@testing-library/jest-dom'
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe("pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn()
  let wrapper 

  //ciclo de vida de pruebas
  beforeEach(()=>{
    jest.clearAllMocks()
     wrapper = shallow(<AddCategory setCategories={setCategories} />);

  })
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el texto del input", () => {
    const input = wrapper.find("input");
    const value = "hola mundito";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").first().text().trim()).toBe(value);
  });

test('No debe de hacer submit', () => {
 wrapper.find('form').simulate('submit',{preventDefault(){}})

 expect(setCategories).not.toHaveBeenCalled();

})


});
