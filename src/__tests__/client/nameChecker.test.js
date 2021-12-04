import { checkForName } from "../../client/js/nameChecker";

describe("nameChecker Module", () => {
    it("Should have checkForName function", () => {
        expect(checkForName).toBeDefined()
    });

    it('checkForName should return true for Captain Names', () => {
        const names = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ]

        names.forEach(name => {
            expect(checkForName(name)).toBeTruthy()
        })
    })

    it('checkForName should return false for any other name', () => {
        const names = [
            "Mahmoud",
            "John",
            "Tyler"
        ]

        names.forEach(name => {
            expect(checkForName(name)).toBeFalsy()
        })
    })
});
