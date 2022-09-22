
export default class Cpf {
    private value: string;
    private FIRST_DIGIT_FACTOR = 10;
    private SECOND_DIGIT_FACTOR = 11;

    constructor (value: string) {
        if (!this.validate(value)) throw new Error("Invalid CPF");
        this.value = value;
    }

    validate(value: string) {
        if (!value) return false;
        const parseValue = this.removeNonDigits(value);
        if (!this.isValidLength(parseValue)) return false;
        if (this.allDigitsTheSame(parseValue)) return false
        const firstDigit = this.calculateDigit(parseValue, this.FIRST_DIGIT_FACTOR);
        const secondDigit = this.calculateDigit(parseValue, this.SECOND_DIGIT_FACTOR);
        let checkDigit = this.extractCheckDigit(parseValue);  
        const calculateCheckDigit = `${firstDigit}${secondDigit}`;  
        return checkDigit === calculateCheckDigit;
    }

    removeNonDigits(value: string) {
        return value.replace(/\D+/g,'');
    }

    isValidLength (value: string) {
        return value.length === 11;
    }

    allDigitsTheSame(value: string) {
        const [firstDigit] = value;
        return [...value].every(digit => digit === firstDigit);
    }

    calculateDigit (value: string, factor: number) {
        let total = 0;
        for (const digit of value) {
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest;
    }

    extractCheckDigit(value: string) {
        return value.slice(9);
    }
}