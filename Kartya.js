export default class Kartya{
    /*Megjeleniti a képet 
    ha rá katintunk megfordul
    visza is fordul
    Ha két egyforma  van felul akor láthatatlan lesz */
    #kep=""
    #allapot = true;/*tru= láthato a kép false láthato a hátoldal */
    #szuloElem;/*dom elem, hátér elem */
    constructor(kep , szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem
        this.#allapot=false
        this.#megjelenit()

    }
    #megjelenit(){
        let txt=`
        <div class="card col-sm-3">
            <img src="${this.#kep}" alt="memoriajáték kiskep">
        </div>
        `
        this.#szuloElem.append(txt)
        
    }
    felfordit(){

    }
}