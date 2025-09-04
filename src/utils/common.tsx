import { isNumber } from "./index";

/** 16进制颜色转RGBRGBA字符串,val：16进制颜色，opa透明度 */
export const colorToRGB = (val: string, opa: number): string => {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = isNumber(opa); //判断是否有设置不透明度

  if (!pattern.test(val)) {
    //如果值不符合规则返回空字符
    return "";
  }

  var v = val.replace(/#/, ""); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = "";

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr =
    "rgb" + (isOpa ? "a" : "") + "(" + rgbStr + (isOpa ? "," + opa : "") + ")";
  return rgbStr;
};
