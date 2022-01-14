中文 ｜ [English](https://github.com/liuxueyong123/html2cssTree/blob/master/README-english.md)

## css2object

一款 vscode 插件，将选中的 css 进行转换为 css object

## 下载

已经上架：[marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=liuxueyong123.css2object)

或者在 vscode 扩展中直接搜索 css2object 安装即可

## 快捷键

mac: `command + 3`

windows: `ctrl + 3`

如有冲突，用户可自定义快捷键

## 功能

选中需要转换的 css 后，按下快捷键（或右键菜单选择 css2object）即可转换为 css object

例：

``` css
position: fixed;
bottom: 0;
left: 0;
right: 0;
max-width: 500px;
margin: 0 auto;
```

结果：

``` css
position: 'fixed',
bottom: '0',
left: '0',
right: '0',
maxWidth: '500px',
margin: '0 auto',
```

## License

MIT © Richard McRichface
