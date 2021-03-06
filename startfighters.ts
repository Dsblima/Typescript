import {Spacecraft,Containership} from './base-ships'

class MillenniumFalcon extends Spacecraft implements Containership{
  cargoContainers: number

  constructor(){
    super('hyperdrive')
    this.cargoContainers = 4
  }

  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()//  é possível chamar a implementação da superclasse
    }else{
      console.log('Failed to jump into hyperspace')
    }
  }
}

export{MillenniumFalcon}
