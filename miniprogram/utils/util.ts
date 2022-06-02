export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

const t = (key:any, option:any = {}) => {
  const language = wx.getStorageSync('lang');
  let locales = null
  if (language === 'en_US') {
    locales = require('../i18n/en')
  } else {
    locales = require('../i18n/zh')
  }
  let result = locales[key]
  for (let optionKey in option) {
    result = result.replace(`{${optionKey}}`, option[optionKey])
  }
  return result
}

module.exports = {
  t
}