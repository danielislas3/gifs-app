const { renderHook } = require('@testing-library/react-hooks');
const { useFetchGifs } = require('../../hooks/useFetchGifs');

describe('Pruebas en useFetch', () => {
  
  
  test('debe de retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('one punch'));
    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true)
    //  {data,loading }= useFetchGifs('one punch')
  });
  
  test('debe de retornar un arreglo de imgs y el loading en false', async () => {
    
    const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('one punch'))
    await waitForNextUpdate();
    const {data, loading} =result.current
    
    expect(data.length).toEqual(10)
    expect(loading).toBe(false)
  
  })
  
});
