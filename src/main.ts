/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Calling bootstrapExtra will initiliaze all the "custom properties"
bootstrapExtra();

console.log("Script started successfully");

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    console.log("Scripting API ready");
    console.log("Player tags: ", WA.player.tags);

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

WA.room.area.onEnter("APJ").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/sounds/APJ.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("APJ").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("PJ1").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/sounds/PJ1.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("PJ1").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("PJ2").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/sounds/PJ2.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("PJ2").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("AEXP1").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/AEXP1.pdf",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("AEXP1").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("AEXP2").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/AEXP2.pdf",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("AEXP2").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ASPS").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ASPS.pdf",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ASPS").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ACTC").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ACTC.pdf",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ACTC").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("CTC1").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/sounds/CTC1.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("CTC1").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("CTC2").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/sounds/CTC2.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("CTC2").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("SC1").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/SC1.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("SC1").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("SC2").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/SC2.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("SC2").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC1").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC1.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC1").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC2").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC2.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC2").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC3").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC3.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC3").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC4").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC4.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC4").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC5").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC5.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC5").subscribe(() => {
  WA.ui.modal.closeModal();
});

WA.room.area.onEnter("ABAC6").subscribe(() => {
  currentPopup = WA.ui.modal.openModal({
    title: "Tutoriel",
    src: "https://noleoa.github.io/TEST2/Affiches/ABAC6.png",
    allow: "fullscreen",
    allowApi: true,
    position: "center",
  });
});

WA.room.area.onLeave("ABAC6").subscribe(() => {
  WA.ui.modal.closeModal();
});




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

WA.room.area.onEnter("NPD3").subscribe(() => {
  WA.chat.sendChatMessage(
    "Bonjour " +
      WA.player.name +
      " ! J'ai une réunion de chantier imprévue et urgente dans 5 minutes. Le maitre d'oeuvre a besoin de moi ! On se voit plus tard ?",
    "Emilie.Chatbot"
  );
});

WA.room.area.onLeave("NPD3").subscribe(() => {
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

WA.ui.actionBar.addButton({
  id: "help-btn",
  label: "Besoin d'aide ?",
  callback: () => {
    WA.ui.modal.openModal({
      title: "Je suis perdu(e)e",
      src: "https://www.videoask.com/f5x29kfpv",
      allow: "fullscreen",
      allowApi: true,
      position: "right",
    });
  },
});


WA.ui.modal.openModal({
  title: "Tutoriel",
  src: "https://www.videoask.com/f5x29kfpv",
  allow: "fullscreen",
  allowApi: true,
  position: "center",
});

WA.ui.actionBar.addButton({
  id: "map-btn",
  label: "Plan de la carte",
  callback: () => {
    WA.ui.modal.openModal({
      title: "Plan de la carte",
      src: "https://www.videoask.com/f5x29kfpv",
      allow: "fullscreen",
      allowApi: true,
      position: "right",
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
        className: "normal",
        callback: () => {
          WA.player.moveTo(880,475);
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
          WA.player.moveTo(880,780);
        },
        
      },
    ]
  );
});
WA.room.area.onLeave("Descente").subscribe(closePopup);



export {};
