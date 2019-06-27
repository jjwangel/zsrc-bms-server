const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const appConfig = require('../../config/app-config');

/**
 * @description 获取token
 * @param {object} 附加数据 
 * @param {String} tokenParameter 
 * @returns 
 */
const tokenSign = function (payload, tokenParameter) {
  return new Promise((resolve, reject) => {
    if (payload && tokenParameter.key) {
      jwt.sign(payload, tokenParameter.key, {
        expiresIn: tokenParameter.expires,
      }, function (err, token) {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      })
    } else {
      reject(new Error('无效的签名参数！'))
    }
  })
}

/**
 * @description 验证token，并返回附加数据
 * @param {String} token 
 * @param {String} tokenParameter  
 * @returns 返回附加数据
 */
const tokenVerify = function (token, tokenParameter) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, tokenParameter.key, function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  })
}

/**
 * @description 返回加密后字符串
 * @param {any} value 待加密字符串
 * @param {any} SecretKey 密匙
 * @returns 加密后字符串
 */
const createHMAC = function (value, SecretKey) {
  return crypto.createHmac('sha256', SecretKey).update(value).digest('hex');
}

module.exports = {
  tokenSign,
  tokenVerify,
  createHMAC,
}