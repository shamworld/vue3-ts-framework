/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-08-24 11:27:12
 * @LastEditors: Roy
 * @LastEditTime: 2021-08-24 16:23:11
 * @Deprecated: 否
 * @FilePath: /WKEX/commitlint.config.js
 */
module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 108],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'type-enum': [
            2,
            'always',
            /* 
                实例
                'feat: 新增xx功能'
                'fix: 修改xxbug'
                'perf: 优化xx'
                'style: 修改xx样式'
                'docs: xx文档'
                'test: 新增xx测试'
                'refactor: 重构xx功能'
                'build: 打包'
                'ci: 配置xx'
                'chore: xx变动'
                'revert: 回滚到xx版本'
            */
            [
                'feat',//新功能（feature）
                'fix',//修补bug
                'perf',//优化相关，比如性能提升、体验
                'style',//仅仅修改了空格,格式缩进,逗号等等（不影响代码运行的变动）
                'docs',//文档（documentation）
                'test',//增加测试
                'refactor',//重构（即不是新增功能，也不是修改bug的代码变动）
                'build',//打包或依赖相关内容
                'ci',//cli配置相关,如对k8s，docker相关配置
                'chore',//构建过程或辅助工具的变动
                'revert',//回滚到上一个版本 
            ],
        ],
    },
}