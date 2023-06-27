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
              currentPopup = WA.ui.openPopup("TestPopUp", "Vérifies en bas de ton écran que ton micro et ta caméra soient activés.", [{
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


WA.room.area.onEnter("Test2").subscribe(() => {
  const popupContent = `<iframe src="https://www.wikipedia.com" width="100%" height="100%"></iframe>`;

  currentPopup = WA.ui.openPopup("TestPopUp2", popupContent, [{
    label: "Fermer",
    className: "normal",
    callback: (popup) => {
      popup.close();
    }
  }]);
});




WA.room.area.onEnter("Welcome").subscribe(() => {
  WA.chat.sendChatMessage(("Bienvenu.e "+ WA.player.name +" !" + " Dirige-toi vers l'accueil en passant par la porte. Quelqu'un va s'occuper de toi."),"Accueil.Chatbot");
});

WA.room.area.onLeave('Welcome').subscribe(() => {
    WA.chat.close();
});


WA.room.area.onLeave('Welcome').subscribe(() => {
    WA.chat.close();
});


WA.room.area.onEnter("NPD1").subscribe(() => {
  WA.chat.sendChatMessage(("Je dois gérer un imprévu sur un bâtiment. Il y a des problèmes électriques complexes qui nécessitent toute mon attention. Tout doit être conforme aux normes pour la sécurité de tous. On se voit une autre fois "+ WA.player.name +"?"),"Giuseppe.Chatbot");
});

WA.room.area.onLeave('NPD1').subscribe(() => {
    WA.chat.close();
});


WA.room.area.onEnter("NPD2").subscribe(() => {
  WA.chat.sendChatMessage(("Je suis sur un gros dossier "+ WA.player.name +". Reviens après stp !"),"Yann.Chatbot ");
});

WA.room.area.onLeave('NPD2').subscribe(() => {
    WA.chat.close();
});

WA.room.area.onEnter("NPD3").subscribe(() => {
  WA.chat.sendChatMessage(("Bonjour "+ WA.player.name +" ! J'ai une réunion de chantier imprévue et urgente dans 5 minutes. Le maitre d'oeuvre a besoin de moi ! On se voit plus tard ?"),"Emilie.Chatbot");
});

WA.room.area.onLeave("NPD3").subscribe(() => {
    WA.chat.close();
});

WA.room.area.onEnter("NPD4").subscribe(() => {
  WA.chat.sendChatMessage(("Hello "+ WA.player.name +"! Je suis pas dispo, je dois finaliser un rapport important pour l'un de nos projets en cours. N'hésite pas à te promener en attendant !"),"Sarah.Chatbot ");
});

WA.room.area.onLeave("NPD4").subscribe(() => {
    WA.chat.close();
});



WA.ui.actionBar.addButton({
        id: "help-btn",
        label: "Besoin d'aide ?",
		callback: () => {
        WA.ui.modal.openModal({
title: "Je suis perdu(e)e",
        src: "https://workadventu.re",
	allow: "fullscreen",
    	allowApi: true,
    	position: "right",
           });
    }
})


    WA.ui.modal.openModal({
        title: "Tutoriel",
        src: 'https://docs.google.com/document/d/1sJpzZ50XRonOpl0XYmivPG4Ze7Iv8Nl-6IpMxshzbTY/edit?usp=sharing',
        position: "center"
    });

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