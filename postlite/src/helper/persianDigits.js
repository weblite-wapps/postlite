// modules
import * as R from 'ramda'
const persianNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export default (num) =>
  R.reduce(R.concat, '', R.map(i => persianNums[i], String(num)))
