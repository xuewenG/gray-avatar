# 介绍

这是一个可以获取 QQ 头像的小工具。

使用了 QQ 官方的接口，这个官方的接口可以直接获取头像。但是如果需要在自己的网页中使用，可能会遇到跨域的问题 (搭配 canvas 时)，所以我写了个工具来中转一下。

# 安装

直接使用 Docker 即可运行，如：

```shell
docker run -d \
-e PORT=8082 \
--net host \
--name gray-avatar-docker \
ixuewen/gray-avatar
```

可选的环境变量有：

| 环境变量     | 作用                                                                                          | 默认值 |
| ------------ | --------------------------------------------------------------------------------------------- | ------ |
| PORT         | 监听的端口号                                                                                  | 8082   |
| CONTEXT_PATH | 请求地址前缀                                                                                  | /gray-avatar     |
| CORS_ORIGIN  | 允许的跨域列表。若有多个 Origin，请使用 `,` 分隔，例如：`http://localhost,http://example.com` | ''     |

# 访问

使用浏览器访问: `http://${YOUR_DOMAIN}:${PORT}/${CONTEXT_PATH}/avatar/${QQ_NUMBER}`

例如: `https://api.xuewen.ink/gray-avatar/avatar/12586985`

这个地址中的变量取值为：

1. PORT: 80
2. CONTEXT_PATH: /gray-avatar
3. QQ_NUMBER: 12586985
