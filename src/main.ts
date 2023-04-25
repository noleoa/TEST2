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
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })
    WA.room.area.onLeave('clock').subscribe(closePopup)
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

 
WA.room.area.onEnter('NosAgences').subscribe(() => {
              currentPopup = WA.ui.openPopup("NosAgencesPopUp", "Salut toi", [


{
        label: "Fermer",
        className: "normal",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }


]);
    })

    WA.room.area.onLeave('NosAgences').subscribe(closePopup)
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

export {};