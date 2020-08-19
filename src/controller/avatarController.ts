import http from 'http'
import express from 'express'

export function qq(request: express.Request, response: express.Response): void {
  const qq = request.params.qq
  console.log(`${new Date().toLocaleString()}---${qq}`)
  http.get(`http://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`, res => {
    let imgData = ''
    res.setEncoding('binary')
    res.on('data', chunk => (imgData += chunk))
    res.on('end', () => {
      response.setHeader('Content-Type', 'image/jpeg')
      response.write(imgData, 'binary')
      response.end()
    })
  })
}
