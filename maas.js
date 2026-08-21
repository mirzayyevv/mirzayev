//function massTarixi(){
   // const bugun = new Date();
   // const il = bugun.getFullYear();
    //const ay = bugun.getMonth();
    //const gun = bugun.getDate();

   // const massTarixi = new Date(il,gwn > 15 ? ay + 1: ay,15);

    //const hefteGunu = massTarixi.getDate();
    //if(hefteGunu===6) massTarixi.setDate(14);
   // if(hefteGunu===0) massTarixi.setDate(13);
    
    //return massTarixi.toLocaleDateString("az-AZ");
//}

 // console.log(massTarixi());
  
    
function novbetiMaashTarixi() {
    const bugun = new Date();
    const il = bugun.getFullYear();
    const ay = bugun.getMonth();
    const gun = bugun.getDate();

    const maashTarixi = new Date(il, gun > 15 ? ay + 1 : ay, 15);

    const hefteGunu = maashTarixi.getDay();
    if (hefteGunu === 6) maashTarixi.setDate(14);
    if (hefteGunu === 0) maashTarixi.setDate(13);

    return maashTarixi.toLocaleDateString("az-AZ");
}

console.log(`Növbəti maaş tarixi: ${novbetiMaashTarixi()}`);