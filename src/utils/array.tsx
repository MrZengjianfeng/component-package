/** 数组去重 */
export const unique = (arr: any[]): any[] => {
  // 更准确的特性检测
  if (typeof Array.from === "function" && typeof Set === "function") {
    return Array.from(new Set(arr));
  } else {
    var seen = new Map(); // 使用 Map 提高类型安全性
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      // 使用 Map 的 has/get 方法进行更准确的判断
      if (!seen.has(arr[i])) {
        seen.set(arr[i], true);
        result.push(arr[i]);
      }
    }
    return result;
  }
};

/** 求两个集合的并集 */
export const union = (a: any[], b: any[]) => {
  var newArr = a.concat(b);
  return unique(newArr); // 直接调用 unique 函数
};

/** 求两个集合的交集 */
export const intersect = (a: any[], b: any[]) => {
  // 修正冒号
  a = unique(a); // 直接调用 unique
  // 需要实现或导入 map 和 contains 函数
  // 或使用原生数组方法
  return a.filter((item) => b.includes(item));
};

/** 求数组的最大值 */
export const numMax = (arr: number[]): number | undefined => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // 或抛出错误
  }
  return Math.max(...arr);
};

export const numMin = (arr: number[]): number | undefined => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // 或抛出错误
  }
  return Math.min(...arr);
};

/** 求和 */
export const numSum = (arr: number[]): number | undefined => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // 或抛出错误
  }
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
};

/** 平均值 */
export const average = (arr: number[]): number | undefined => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // 或抛出错误
  }
  return numSum(arr) || 0 / arr.length;
};
