import http from 'axios'

const button = document.querySelector('#buttonGreet') as HTMLButtonElement
button.onclick = () => {
    const csInterface = new CSInterface()
    const url = 'http://192.168.1.160/om2/api/reports/works/scanner'

    http.get(url).then(({data}) => {
        // リクエスト処理完了
        const {result} = data
        const name = result[0].album_name
        csInterface.evalScript(`sayHello("${name}")`, (result: string) => {
            console.log("reuslt", result)
        })
    }).catch(error => {
        csInterface.evalScript(`sayHello("しっぱい")`, (result: string) => {
            console.log("reuslt", result)
        })
    })
}

const buttonAdj = document.querySelector('#buttonAdj') as HTMLButtonElement
buttonAdj.onclick = () => {
    const csInterface = new CSInterface()
    const url = 'http://192.168.1.160/om2/api/ai/colorAdjust'

    http.get(url).then( ({data}) => {
        const { result} = data
        const { inputRangeStart, inputRangeEnd, inputRangeGamma } = result
        csInterface.evalScript(`adjustLevels(${inputRangeStart}, ${inputRangeEnd}, ${inputRangeGamma})`, (result: string) => {
            console.log("reuslt", result)
        })
    }).catch(error => {
        csInterface.evalScript(`sayHello("しっぱい")`, (result: string) => {
            console.log("reuslt", result)
        })
    })
}