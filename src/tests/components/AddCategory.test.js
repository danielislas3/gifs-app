import React from "react";
import "@testing-library/jest-dom";
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe("pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper;

  //ciclo de vida de pruebas
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el texto del input", () => {
    const input = wrapper.find("input");
    const value = "hola mundito";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").first().text().trim()).toBe(value);
  });

  test("No debe de hacer submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar setCategories y limpiar input", () => {
    /*
    1.- Simular inputChange
    2.- Simular submit
    3.- SetCategories se debe de haber llamado 
    4.- El valor del input debe de reiniciarce despyues del proceso
    */
    const value = "hola mundito";
    const input = wrapper.find("input");
    //1
    input.simulate("change", { target: { value } });
    //2
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    //3
    expect(setCategories).toHaveBeenCalled();

    //4
    expect(input.prop('value')).toBe('');

  });
});
