let message: string= "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message)

let isEnoughToBeatMF = function(parsecs: number):boolean{
  return parsecs < 12
}

let distance=14

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance)?'YES':'NO'}`)

let call =  (name:string) => console.log(`Do you copy name, ${name}?`)
call('R2')

                            //o valor padrão pode ser uma chamada de função.
function inc (speed: number, inc:number=1):number{
  return speed + inc;
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)
