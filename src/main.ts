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
              currentPopup = WA.ui.openPopup("TestPopUp", "Vérifies en bas de ton écran que ton micro et ta caméra sois activés. /n Besoin d'aide ? /n Appuie sur le bouton [Je suis perdu(e)] en bas de l'écran.", [{
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


WA.ui.actionBar.addButton({
        id: 'lost-btn',
        label: 'Je suis perdu(e)',
		callback: () => {
        WA.ui.modal.openModal({
title: "Je suis perdu(e)e",
        src: 'https://www.impots.gouv.fr/sites/default/files/media/1_metier/1_particulier/EV/1_declarer/141_autres_revenus/eco-collabo-fiscal-covoiturage.pdf',
	allow: "fullscreen",
    	allowApi: true,
    	position: "center",
           });
    }
})

WA.ui.actionBar.addButton({
        id: 'map-btn',
        label: 'Plan de la carte',
		callback: () => {
        WA.ui.modal.openModal({
    title: "Plan de la carte",
        src: 'https://www.impots.gouv.fr/sites/default/files/media/1_metier/1_particulier/EV/1_declarer/141_autres_revenus/eco-collabo-fiscal-covoiturage.pdf',
	allow: "fullscreen",
    	allowApi: true,
    	position: "center",
   });
    }
})

export {}; 