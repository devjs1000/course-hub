import { useState } from "react"
import axios from 'axios'
export default () => {

    const betterFetch = (api, lasting = 24 * 60 * 60 * 1000, method = 'GET', type = 'unStill', callback) => {

        const get = () => {
            if (method == "GET") {
                console.log('it is a get req');

                axios.get(api).then(res => {
                    console.log('better fetching api');
                    console.log(res);

                    callback(res)
                    const data = { [type]: { lasting: 0, data: '' as any, last: 0 } }
                    if (type === 'unStill' || 'still') {
                        let day=1000*60*60*24
                        if (lasting > day) {
                            console.warn(`setting a lasting bigger then ${day} is not supported!`)
                        }
                        data[type].lasting = lasting
                        data[type].data = res
                        data[type].last = new Date().getTime()

                        localStorage.setItem('better', JSON.stringify(data))

                    } else {
                        console.error(`${type}  is inValid!`)
                    }
                })
            }

        }

        let cache = JSON.parse(localStorage.getItem('better'))
        let [lastingTime, lastTime, newTime]=[0,0,0]
        try{
            lastingTime = cache[type]?.lasting
           lastTime = cache[type]?.last
            newTime = new Date().getTime()
    
        }catch(err){
            
        }
if(cache==null){
    console.log(0);
    
  get()
}else if(lastTime+lastingTime>newTime){
    console.log(1);
    
    callback(cache[type]?.data)
}else{
    console.log(2);
    
    get()
}

console.log(lastTime, lastingTime, newTime);




    }

    return [betterFetch]
}