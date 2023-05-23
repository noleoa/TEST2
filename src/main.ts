/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Calling bootstrapExtra will initiliaze all the "custom properties"  
bootstrapExtra();

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "Il est " + time, []);
    })
    WA.room.area.onLeave('clock').subscribe(closePopup)
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

 
WA.room.area.onEnter("Test").subscribe(() => {
              currentPopup = WA.ui.openPopup("TestPopUp", "Vérifies en bas de ton écran que ton micro et ta caméra sois activés.", [{
        label: "Ok, Merci !",
        className: "normal",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])


    })

    WA.room.area.onLeave('Test').subscribe(closePopup)
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));



    }).catch(e => console.error(e));
function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
      }
}



const Menu = WA.ui.registerMenuCommand("menu test",
    {
       callback: () => {
            WA.chat.sendChatMessage("Bienvenu.e "+ WA.player.name +" !!" + "Ravi de t'accueillir !"+"Dirige-toi vers l'accueil, quelqu'un va s'occuper de toi !"+ "Si tu es perdu.e, tu peux cliquer sur le bouton [Besoin d'aide] en bas de ton écran."+"A tout moment, tu peux également retrouver un plan de la carte en cliquant sur [Plan de la carte].");
        }
    })

WA.room.area.onEnter("Welcome").subscribe(() => {
  WA.chat.sendChatMessage(("Bienvenu.e "+ WA.player.name +" !!" + "Ravi de t'accueillir !"+"Dirige-toi vers l'accueil en passant par la porte bleue, quelqu'un va s'occuper de toi !"+ "Si tu es perdu.e, tu peux cliquer sur le bouton [Besoin d'aide ?] en bas de ton écran."+"A tout moment, tu peux également retrouver un plan de la carte en cliquant sur [Plan de la carte]."),"Chatbot");
});

WA.room.area.onLeave('Welcome').subscribe(() => {
    WA.chat.close();
});



WA.ui.actionBar.addButton({
        id: "help-btn",
        label: "Besoin d'aide ?",
		callback: () => {
        WA.ui.modal.openModal({
title: "Je suis perdu(e)e",
        src: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/1_particulier/EV/1_declarer/141_autres_revenus/eco-collabo-fiscal-covoiturage.pdf",
	allow: "fullscreen",
    	allowApi: true,
    	position: "right",
           });
    }
})

WA.ui.actionBar.addButton({
        id: "map-btn",
        label: 'Plan de la carte',
		callback: () => {
        WA.ui.modal.openModal({
    title: "Plan de la carte",
        src: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/1_particulier/EV/1_declarer/141_autres_revenus/eco-collabo-fiscal-covoiturage.pdf",
	allow: "fullscreen",
    	allowApi: true,
    	position: "right",
   });
    }
})

export {}; 