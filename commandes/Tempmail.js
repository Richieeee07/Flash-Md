"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*RICHIE-MD* Temporary emails,Powered by *Richiee* \n\n ' + "Click the link below to create unlimited TEMPORARY Emails. Powered by *RICHIE-MD.*";
    let d = ' https://tempmailpro.app';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/34b427726e21069df3966.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *RICHIE-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Richiee*'
      let varmess=z+d
      var img='https://telegra.ph/file/34b427726e21069df3966.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
