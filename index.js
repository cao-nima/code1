/*
 * @Author: cat 74043802+212414016@users.noreply.github.com
 * @Date: 2023-02-26 10:44:24
 * @LastEditors: cat 74043802+212414016@users.noreply.github.com
 * @LastEditTime: 2023-02-26 13:59:30
 * @FilePath: /code1/index.js
 * @Description: 
 */
import {createServer} from 'http'

const server = createServer((req,res)=>{
    if(req.method === "GET"){
        res.end('get')
    }
    
})
server.listen(8080)