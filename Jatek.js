import Kartya from "./Kartya.js"

export default class Jatek{
    #KEPLISTA=[]
    #kivalasztottak=[]

    constructor(KEPLISTA){
        this.#KEPLISTA=KEPLISTA
        this.jatekterOsszeAllit()
        $(window).on("kapcsol",(event)=>{
            console.log(event.detail)
            this.#kivalasztottak.push(event.detail)
            this.ellenoriz()
        })
    }
    jatekterOsszeAllit(){
        this.#KEPLISTA.forEach((elem)=>{
            new Kartya(elem,$(".jatekter"))
        })
    }
    #ellenoriz(esemenynev){
        if(this.#kivalasztottak.length===2){
            if (this.#kivalasztottak[0]===this.#kivalasztottak[1]){
                /**itt kéne viszaforditani az 2 elmet
                 * és ki kel üriteni a listát
                 */
                this.#kivalasztottak.pop()
                this.#kivalasztottak.pop()
                
            }
        }

    }
}