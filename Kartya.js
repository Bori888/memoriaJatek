export default class Kartya{
    /*Megjeleniti a képet 
    ha rá katintunk megfordul
    visza is fordul
    Ha két egyforma  van felul akor láthatatlan lesz */
    #kep=""
    #allapot = true;/*tru= láthato a kép false láthato a hátoldal */
    #szuloElem;/*dom elem, hátér elem */
    #kepElem
    constructor(kep , szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem
        this.#allapot=false
        this.#megjelenit()
        this.kepElem=this.#szuloElem.children("div:last-child").children("img")
        console.log(this.#kepElem)
        this.#kepElem.om("click",()=>{
            this.setAllapot(true)
            this.#trigger(kapcsol)
        })

    }
    #trigger(esemenynev){
        const e= new CustomEvent(esemenynev,{detail:this.#kep})
        window.dispatchEvent(e)

    }

    #megjelenit(){
        let txt=`
        <div class="card col-sm-3">
            <img src="kepek/hatter.jpg" alt="memoriajáték kiskep">
        </div>
        `
        this.#szuloElem.append(txt)
        
    }
    setAllapot(ertek){
        if (ertek==true||ertek== false) {
            this.#allapot=ertek
            this.#felfordit()
            
        }
        
    }
    #felfordit(){
        /*Az állapottol fuggöen vagy a h.k. vagy a k. et toldi be a kep src-jbe */
        /*Akor kell végrehajtodni ha ráé katintunk */
        if (this.#allapot){
            this.#kepElem.attr("src",this.#kep)
        }
        else{
            this.#kepElem.attr("src","kepek/hatter.jpg")

        }


    }
}