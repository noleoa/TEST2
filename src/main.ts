/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
console.log('Script started successfully');

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

// Waiting for the API to be ready
WA.onInit().then(() => {

    for (let i = 1; i < 12; i++) {
        WA.room.onEnterLayer('zone_overlay_' + i).subscribe(() => {
            WA.room.showLayer('overlay_room_' + i);
        })
        WA.room.onLeaveLayer('zone_overlay_' + i).subscribe(() => {
            WA.room.hideLayer('overlay_room_' + i);
        })
    }


    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
})
    WA.room.area.onEnter("clock").subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "Il est " + time, []);
    });
    WA.room.area.onLeave("clock").subscribe(closePopup)
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e))

 
WA.room.area.onEnter("Test").subscribe(() => {
              currentPopup = WA.ui.openPopup("TestPopUp", "Vérifies en bas de ton écran que ton micro et ta caméra sois activés. Besoin d'aide ? Retourne sur le logo Alpes Contrôles : Le tuto apparaîtra sur ta droite.", [{
        label: "Ok, Merci !",
        className: "normal",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])

    WA.room.area.onLeave("Test").subscribe(closePopup)
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