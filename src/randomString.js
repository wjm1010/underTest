export default (() => {
  const $s = '`!@#$%^&*()-+=_[]{},./<>?;:"|\\\''
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = lowers.toUpperCase()
  const digits = '0123456789'
  let maps = {
    $: [$s, $s.length],
    d: [digits, digits.length],
    l: [lowers, lowers.length],
    u: [uppers, uppers.length]
  }
  let resolve = (format) => {
    let keys = (format || 'dlu').split('').sort()
    let key = keys.join('')
    if (!maps[key]) {
      keys.reduce((path, name) => {
        let curr = `${path}${name}`
        if (!maps[curr]) {
          let [arr, len] = maps[path]
          let [arr1, len1] = maps[name]
          maps[curr] = [arr.concat(arr1), len + len1]
        }
        return curr
      }, '')
    }
    return maps[key]
  }
  return (size = 6, format, symbols) => {
    let [chars, charl] = resolve(format)
    let str = ''
    let chr
    if (symbols) {
      chars = chars.replace($s, '')
      charl = chars.length
    }
    while (size-- > 0) {
      chr = chars.charAt(Math.round(Math.random() * charl))
      str += chr
    }
    return str
  }
})()
