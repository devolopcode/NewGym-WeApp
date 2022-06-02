// tools/regex.ts
const regRex = {
  phone: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
  code: /^[0-9]{,6}$/
}
let testPhone = (phone: string) => {
  if (regRex['phone'].test(phone)) {
    return true
  } else {
    return false
  }
}
let testCode = (code: string) => {
  if (regRex['code'].test(code)) {
    return true
  } else {
    return false
  }
}
export { testPhone, testCode }