module.exports = {
  extends: [
    // 'plugin:vue/essential',// vue核心规范
    'airbnb-base',
    // prettier规范,覆盖eslint格式配置,写在最后
    'prettier',
  ],
  rules: {
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
    // 'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0, // 禁止使用无关的包
    'import/no-unresolved': 0, // 关闭检查未解析的模块
    'no-use-before-define': 0, // 禁止在未定义前使用变量
    'arrow-body-style': 0, // 禁止箭头函数体使用大括号
    'no-plusplus': 0, // 禁止使用++，--
    'no-continue': 0, // 禁止使用continue
    'import/prefer-default-export': 0, // 禁止使用export default
    'no-unused-vars': 1, // 未使用变量检查
    'prefer-destructuring': 1,// 优先使用数组和对象解构
    'no-shadow': 0, // 禁止变量声明时使用相同名字
    'import/extensions': 0, // 使用文件扩展名
  },
};
