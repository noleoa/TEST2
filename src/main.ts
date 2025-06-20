/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Calling bootstrapExtra will initiliaze all the "custom properties"
bootstrapExtra();

console.log("Script started successfully");

let currentPopup: any = undefined;

// Waiting for the API to be ready
// Bonjour
WA.onInit()
  .then(() => {
    console.log("Scripting API ready");
    console.log("Player tags: ", WA.player.tags);
    if(WA.player.tags.includes('Tech')) {        // si les tags tu woka incluent le tag 'manager'
      WA.player.setOutlineColor(255, 0, 0);   // change la couleur autour du woka à rouge (c'est un code RVB) 
    }
    if(WA.player.tags.includes('Support')) {        // si les tags tu woka incluent le tag 'manager'
      WA.player.setOutlineColor(27, 1, 155);   // change la couleur autour du woka à rouge (c'est un code RVB) 
    }
    WA.room.area.onEnter("clock").subscribe(() => {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      currentPopup = WA.ui.openPopup("clockPopup", "Il est " + time, []);
    });
    WA.room.area.onLeave("clock").subscribe(closePopup);
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));

    WA.room.area.onEnter("Test").subscribe(() => {
      currentPopup = WA.ui.openPopup(
        "TestPopUp",
        "Vérifies en bas de ton écran que ton micro et ta caméra soient activés.",
        [
          {
            label: "Ok, Merci !",
            className: "normal",
            callback: (popup) => {
              // Close the popup when the "Close" button is pressed.
              popup.close();
            },
          },
        ]
      );
    });
    WA.room.area.onLeave("Test").subscribe(closePopup);
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
function closePopup() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

WA.room.area.onEnter("Welcome").subscribe(() => {
  WA.chat.sendChatMessage(
    "Bienvenu.e " +
      WA.player.name +
      " !" +
      " Dirige-toi vers l'accueil en passant par la porte. Quelqu'un va s'occuper de toi.",
    "Accueil.Chatbot"
  );
});

WA.room.area.onLeave("Welcome").subscribe(() => {
  WA.chat.close();
});

WA.room.area.onLeave("Welcome").subscribe(() => {
  WA.chat.close();
});

WA.room.area.onEnter("NPD1").subscribe(() => {
  WA.chat.sendChatMessage(
    "Je dois gérer un imprévu sur un bâtiment. Il y a des problèmes électriques complexes qui nécessitent toute mon attention. Tout doit être conforme aux normes pour la sécurité de tous. On se voit une autre fois " +
      WA.player.name +
      "?",
    "Giuseppe.Chatbot"
  );
});

WA.room.area.onLeave("NPD1").subscribe(() => {
  WA.chat.close();
});

WA.room.area.onEnter("NPD2").subscribe(() => {
  WA.chat.sendChatMessage(
    "Je suis sur un gros dossier " + WA.player.name + ". Reviens après stp !",
    "Yann.Chatbot "
  );
});

WA.room.area.onLeave("NPD2").subscribe(() => {
  WA.chat.close();
});



WA.room.area.onEnter("NPD4").subscribe(() => {
  WA.chat.sendChatMessage(
    "Hello " +
      WA.player.name +
      "! Je suis pas dispo, je dois finaliser un rapport important pour l'un de nos projets en cours. N'hésite pas à te promener en attendant !",
    "Sarah.Chatbot "
  );
});

WA.room.area.onLeave("NPD4").subscribe(() => {
  WA.chat.close();
});

WA.room.area.onEnter("NPD5").subscribe(() => {
  WA.chat.sendChatMessage(
    "Hello " +
      WA.player.name +
      "! Lieu accessible uniquement avec un badge",
    "Notifications"
  );
});

WA.room.area.onLeave("NPD5").subscribe(() => {
  WA.chat.close();
});


WA.ui.actionBar.addButton({
  id: "help-btn",
  label: "Besoin d'aide ?",
  callback: () => {
    WA.ui.modal.openModal({
      title: "Tutoriel",
      src: "https://noleoa.github.io/TEST2/Affiches/tuto.pdf",
      allow: "fullscreen",
      allowApi: true,
      position: "right",
    });
  },
});

WA.ui.actionBar.addButton({
  id: "map-btn",
  label: "Plan de la carte",
  callback: () => {
    WA.ui.modal.openModal({
      title: "Plan de la carte",
      src: "https://noleoa.github.io/TEST2/Affiches/map3.pdf",
      allow: "fullscreen",
      allowApi: true,
      position: "center",
    });
  },
});

WA.room.area.onEnter("Ascenseur").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "AscenseurPopUp",
    "",
    [
      {
        label: "1️⃣🔼",
        className: "primary",
        callback: () => {
          WA.player.moveTo(1159,200);
        },
        
      },
    ]
  );
});
WA.room.area.onLeave("Ascenseur").subscribe(closePopup);

WA.room.area.onEnter("Descente").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "DescentePopUp",
    "",
    [
      {
        label: "0️⃣🔽",
        className: "normal",
        callback: () => {
          WA.player.moveTo(1159,540);
        },
        
      },
    ]
  );
});
WA.room.area.onLeave("Descente").subscribe(closePopup);



export {};

