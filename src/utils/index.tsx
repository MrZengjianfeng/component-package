/** 1.邮箱 */
export const isEmail = (str: any): boolean => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    str
  );
};

/** 2.手机号码 */
export const isMobile = (value: any): boolean => {
  return /^1[0-9]{10}$/.test(value);
};

/** 3.电话号码 */
export const isPhone = (value: any): boolean => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value);
};

/** 4.是否url地址 */
export const isURL = (value: any): boolean => {
  return /^http[s]?:\/\/.*/.test(value);
};

/** 5.是否字符串 */
export const isString = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
};

/** 6.是否数字 */
export const isNumber = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
};

/** 7.是否boolean */
export const isBoolean = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
};

/** 8.是否函数 */
export const isFunction = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
};

/** 9.是否为null */
export const isNull = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Null";
};

/** 10.是否undefined */
export const isUndefined = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Undefined";
};

/** 11.是否对象 */
export const isObj = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
};

/** 12.是否数组 */
export const isArray = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
};

/** 13.是否时间 */
export const isDate = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
};

/** 14.是否正则 */
export const isRegExp = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
};

/** 15.是否错误对象 */
export const isError = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Error";
};

/** 16.是否Symbol函数 */
export const isSymbol = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
};

/** 17.是否Promise对象 */
export const isPromise = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
};

/** 18.是否Set对象 */
export const isSet = (value: any): boolean => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Set";
};

/** 判断数据类型 */
export function getDataType(value: any): string {
  const type = Object.prototype.toString.call(value).slice(8, -1);
  const typeCase = type.toLowerCase();
  return typeCase;
}

/** 去空格 */
export function trim(
  str: string,
  pos: "both" | "left" | "right" | "all"
): string {
  if (getDataType(str) == "string") {
    switch (pos) {
      case "both":
        /** 去掉前后空格 */
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case "left":
        return str.replace(/^\s*/, "");
      case "right":
        return str.replace(/(\s*$)/g, "");
      case "all":
        return str.replace(/\s+/g, "");
      default:
        return str;
    }
  }
  return str;
}

/** 字符转换 type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写 */
export const changeCase = (str: string, type: number): string => {
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split("")
        .map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};

/**
 * 获取指定范围内的随机整数
 * @param {number} min - 随机数最小值（包含）
 * @param {number} max - 随机数最大值（包含）
 * @returns {number} 指定范围内的随机数
 */
export function getRandomNumber(min: number, max: number): number {
  // 确保 min 小于等于 max
  if (min > max) {
    [min, max] = [max, min]; // 交换值
  }
  // 生成 min 到 max 之间的随机数（包含 min 和 max）
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} min - 随机数最小值（包含）
 * @param {number} max - 随机数最大值（包含）
 * @returns {number} 指定范围内的随机数浮点数 */
export function getRandomFloat(min: number, max: number): number {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.random() * (max - min) + min;
}
