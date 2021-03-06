const { User } = require('../models');

const tokenStore = new Map();

async function initializeTokenStore() {
  const users = await User.findAll();
  users.forEach((user) => {
    if (user.wechatAppId) {
      tokenStore.set(user.prefix, {
        wechatAppId: user.wechatAppId,
        wechatAppSecret: user.wechatAppSecret,
        wechatTemplateId: user.wechatTemplateId,
        wechatOpenId: user.wechatOpenId,
        wechatVerifyToken: user.wechatVerifyToken,
        token: '',
      });
    }
  });
  console.log('Token store initialized.');
}

module.exports = {
  initializeTokenStore,
  tokenStore,
};
