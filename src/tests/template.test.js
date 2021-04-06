import {getSaludo} from "../template";

describe("Prueba getSaludo", () => {
    test("should return a name + greetings", () => {
        const name = "Nanami";
        const grettings = getSaludo(name);
        expect(grettings).toBe(`Hi ${name}`);
    });

    test("should return default name + greetings", () => {
        const grettings =  getSaludo();
        expect(grettings).toBe(`Hi Jhon`);
    });
});