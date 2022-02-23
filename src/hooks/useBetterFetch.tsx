import { useState } from "react"
import axios from 'axios'
export default () => {

    const betterFetch = (api, lasting = 24, method = 'GET', type = 'unStill', callback) => {
        let cache = JSON.parse(localStorage.getItem('better'))
        if (cache == null) {
            console.log('cache is null');

            if (method == "GET") {
                console.log('it is a get req');

                axios.get(api).then(res => {
                    console.log('better fetching api');
                    console.log(res);

                    callback(res)
                    const data = {[type]:{lasting:0, data:[], last:0}}
                    if (type === 'unStill' || 'still') {
                        if (lasting > 24) {
                            console.warn('setting a lasting bigger then 24 is not supported!')
                        }
                        data[type].lasting = lasting
                        data[type].data = res.data
                        data[type].last = new Date().getTime()

                        localStorage.setItem('better', JSON.stringify(data))

                    } else {
                        console.error(`${type}  is inValid!`)
                    }
                })
            }
        } else if (cache[type]?.lasting + cache[type]?.last < new Date().getTime()) {
            callback(cache[type]?.data)
            console.log(cache[type].data);

        }
    }

    return [betterFetch]
}