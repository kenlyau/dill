export default function (date = Date.now()) {
  const D = new Date(date)
  const T = {
    "M+": D.getMonth() + 1,
    "d+": D.getDate(),
    "h+": D.getHours(),
    "m+": D.getMinutes(),
    "s+": D.getSeconds(),
    "q+": Math.floor((D.getMonth() + 3) / 3),
    "S": D.getMilliseconds()
  }
  return {
    D,
    format: (fmt) => {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (D.getFullYear() + '')).substr(4 - RegExp.$1.length)
      }
      for (let k in T) {
        if (new RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (T[k]) : (("00" + T[k]).substr(("" + T[k]).length)))
        }
      }
      return fmt
    }
  }
}
