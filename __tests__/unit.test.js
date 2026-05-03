// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber
test('test if valid phone number returns true', () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('test if multiple valid phone numbers returns true', () => {
    expect(isPhoneNumber("113-446-2323","123-456-2323")).toBe(true);
});
test('test multiple invalid phone format to return false', () => {
    expect(isPhoneNumber("123-456-2","123-456-2")).toBe(false);
});
test('test single invalid format phone return false', () => {
    expect(isPhoneNumber("12456-223")).toBe(false);
});

//isEmail
test('test single valid email return true', () => {
    expect(isEmail("test@yes.com")).toBe(true);
});
test('test multiple valid email return true', () => {
    expect(isEmail("test@yes.com", "gmailacc@gmail.com")).toBe(true);
});
test('test single invalid email return false', () => {
    expect(isEmail("test@yescom")).toBe(false);
});
test('test multiple invalid email return false', () => {
    expect(isEmail("testyesasdcom", "gmailacc@@gmail.com")).toBe(false);
});

//isStrongPassword
test('test valid strongPass to return true', () => {
    expect(isStrongPassword("t_passwrd2")).toBe(true);
});
test('test valid strongPass short to return true', () => {
    expect(isStrongPassword("trd2")).toBe(true);
});
test('test invalid strongPass with bad symbols to return false', () => {
    expect(isStrongPassword("tr@d2")).toBe(false);
});
test('test invalid strongPass long to return false', () => {
    expect(isStrongPassword("trd2asdasdadsasdads")).toBe(false);
});

//isDate
test('test valid date double month to return true', () => {
    expect(isDate("01/23/4523")).toBe(true);
});
test('test valid date single month to return true', () => {
    expect(isDate("1/23/4523")).toBe(true);
});
test('test invalid date triple month to return false', () => {
    expect(isDate("123/23/4523")).toBe(false);
});
test('test invalid date no slash to return false', () => {
    expect(isDate("1233523")).toBe(false);
});

//isHexColor
test('test 6 char hex to return true', () => {
    expect(isHexColor("ffeeff")).toBe(true);
});
test('test 3 char hex to return true', () => {
    expect(isHexColor("fef")).toBe(true);
});
test('test 4 char hex to return false', () => {
    expect(isHexColor("feff")).toBe(false);
});
test('test invalid char hex to return false', () => {
    expect(isHexColor("getf")).toBe(false);
});