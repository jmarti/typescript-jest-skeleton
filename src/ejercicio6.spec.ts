import { arrPersonas, func } from './ejercicio6';

const freshArrPersonas = arrPersonas.map(p => ({...p}));

describe(`ejercicio 6`, () => {
    it(`devuelve objeto vacío si el index no existe`, () => {
        const result = func(Infinity);

        expect(result).toStrictEqual({});
    });

    // @TODO: ¿cómo compruebo en este caso que el objeto devuelto sea el que toca?
    it(`devuelve el objeto que esté en la posición del array con el attributo 'name' con valor 'choy'`, () => {
        const result = func(1);
        expect(result).toEqual({...arrPersonas[1], name: 'choy'});
    });

    it('arrPersonas no ha sido modificado', () => {
        func(0);
        expect(arrPersonas).toEqual(freshArrPersonas);
    });
});
