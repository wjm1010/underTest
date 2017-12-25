export default (format, date) => {
  if (!format) format = 'YYYY-MM-DD hh:mm:ss'
  if (!date) {
    date = new Date()
  } else {
    let check = (v) => 'YMDhmsq'.split('').concat(['ms']).filter((k) => {
      if (new RegExp('(' + k + ')').test(v)) {
        return k
      }
    })
    if (check(format).length >= 0 || check(date).length < 0) {
      let d = date
      date = new Date(format)
      format = d
    }
    if (!(format instanceof Date)) {
      date = new Date(date)
    }
  }
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }

  if (/(YY+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(ms+)/.test(format)) {
    format = format.replace(RegExp.$1, 'S')
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
