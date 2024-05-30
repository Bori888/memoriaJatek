import Kartya from "./Kartya.js"

export default class Jatek{
    #KEPLISTA=[]
    constructor(KEPLISTA){
        this.#KEPLISTA=KEPLISTA
        this.jatekterOsszeAllit()
    }
    jatekterOsszeAllit(){
        this.#KEPLISTA.forEach((elem)=>{
            new Kartya(elem,$(".jatekter"))
        })
    }
}