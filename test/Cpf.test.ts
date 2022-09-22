import Cpf from "../src/Cpf";

const validCpfs = [
    "886.634.854-68",
    "473.087.668-70"
]
test.each(validCpfs)("Should be able to validate a valid vat number", (value) => {
    const cpf = new Cpf(value);
    expect(cpf).toBeDefined();
})

const cpfsWithTheSameDigit = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"
]

test.each(cpfsWithTheSameDigit)("Should be able to validate a vat number with de same digits", (cpf) => {
    expect (() => new Cpf(cpf)).toThrow("Invalid CPF");
})

test("Should be able to validate a vat number with smallest invalid size", () => {
    expect(() => new Cpf("47308770")).toThrow("Invalid CPF");
})

test("Should be able to validate a vat number with biggest invalid size", () => {
    expect(() => new Cpf("473.087.668-70111"));
})

test("Should be able to validate a vat number with biggest invalid value", () => {
    expect (() => new Cpf("")).toThrow("Invalid CPF");
})