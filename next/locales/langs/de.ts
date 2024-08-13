const de = {
  name: "Ree(n)vent",
  loggedOut: {
    carousel: {
      slogan: {
        subtitle: "Eventplanung neu erfunden",
      },
      create: {
        title: "Events einfach planen",
        subtitle:
          "Mit unserer individuellen Raumgestaltung lässt sich jedes Event ganz einfach planen",
      },
      login: {
        title: "Eventanmeldung ganz einfach",
        subtitle:
          "Registrieren Sie sich jetzt und nehmen sie an bevorstehenden Events teil",
      },
      overview: {
        title: "Alle Events auf einen Blick",
        subtitle:
          "Mit unserer Eventübersicht verpassen Sie mit Sicherheit kein Event mehr",
      },
    },
    tabs: {
      info: {
        label: "Info",
        toolbar: {
          searchPlaceholder: "Nach Event suchen...",
          startDate: "Startdatum",
          endDate: "Enddatum",
          status: "Status",
        },
        eventCard: {
          signUp: "Anmelden",
          moreInfo: "Mehr Infos",
          noDescription: "Keine Beschreibung vorhanden",
        },
        eventDetails: {
          back: "Zurück",
          description: "Beschreibung",
          dateRange: "Zeitraum",
          availableTables: "Buchbare Tische: ",
          status: "Status: ",
          address: "Adresse",
          addressValue: "{{adress}}, {{zip}}, {{city}}, {{country}}",
          contact: "Kontakt",
          noContact: "Kein Kontakt angegeben",
          noDescription: "Keine Beschreibung vorhanden",
        },
      },
      create: {
        label: "Event erstellen",
        title: {
          label: "In 3 Schritten zum Event",
          subText:
            "<1>Jetzt</1> <2>anmelden</2> <1>und mit dem Event Erstellen starten</1>",
        },
        steps: {
          stepOne: {
            title: "Schritt 1: Basisinformationen",
            description:
              "In einem ersten Schritt können Sie grundlegende Informationen zu Ihrem Event eingeben. Dazu gehören beispielsweise der Name des Events, der Zeitraum und eine kurze Beschreibung. Außerdem können Sie hier den Ort an dem Ihr Event stattfinden wird, sowie eine Kontaktmöglichkeit für Aussteller, angeben.",
          },
          stepTwo: {
            title: "Schritt 2: Raumplanung",
            description:
              "Der zweite Schritt besteht darin, den Raum für Ihr Event bestmöglich abzubilden. Sie haben die Möglichkeit, eine unbegrenzte Anzahl von Tischen einzufügen, die sich potenzielle Aussteller später reservieren können. Die Tische können einfach verschoben und gedreht werden, um Ihren Raum perfekt abzubilden.",
          },
          stepThree: {
            title: "Schritt 3: Weitere Informationen",
            description:
              "Im letzten Schritt haben Sie die Möglichkeit, eigene Fragen zu formulieren, die Aussteller bei der Buchung eines Tisches über Ree(n)vent beantworten müssen. Für jede Frage können Sie selbst bestimmen, in welchem Format sie später angezeigt werden soll.",
          },
        },
      },
      login: {
        label: "Anmelden",
        title: "Willkommen zurück",
        userName: "Benutzername",
        password: "Passwort",
        button: "Weiter",
        noAccount:
          "<1>Noch keinen Account?</1> <2>Jetzt kostenlos registrieren</2>",
      },
      signUp: {
        label: "Registrieren",
        userName: "Benutzername",
        password: "Passwort",
        email: "Email",
        firstName: "Vorname",
        lastName: "Nachname",
        button: "Jetzt registrieren",
        accountAvailable: "<1>Schon einen Account?</1> <2>Jetzt anmelden</2>",
      },
    },
  },

  loggedIn: {
    logOut: "Abmelden",
    createEvent: {
      steps: {
        first: "Event Informationen",
        second: "Raum Planung",
        third: "Formular erstellen",
      },
      prevNextStep: {
        nextStep: "Nächster Schritt",
        previousStep: "Vorheriger Schritt",
      },
      toolbar: {
        abort: "Abbrechen",
        create: "Event erstellen",
      },
      stepOne: {
        basics: {
          label: "Basis Daten",
          inputFields: {
            name: "Name",
            imageUrl: "Bild URL",
            startDate: "Startdatum",
            endDate: "Enddatum",
            description: {
              label: "Beschreibung",
              placeholder: "Erstellen sie eine Beschreibung für Ihr Event...",
            },
          },
        },
        contact: {
          label: "Kontaktdaten",
          inputFields: { email: "Email", phone: "Telefonnummer" },
        },
        address: {
          label: "Adresse",
          inputFields: {
            line1: "Adresse",
            zip: "PLZ",
            city: "Stadt",
            country: "Land",
          },
        },
      },
      stepTwo: {
        toolbar: {
          addTable: "Tisch hinzufügen",
          tableName: "Tischname",
          capacity: "Kapazität",
          color: "Farbe",
          delete: "Tisch löschen",
          info: "<1> <2>Tischname:</2> Der Tischname kann frei gewählt werden. Er erscheint zudem visuell auf dem jeweiligen Tisch.</1> <1> <2>Kapazität:</2> Die Kapazität gibt an, wie viele Personen an diesem Tisch maximal Platz haben. Geben sie eine Kapazität von '0' an, wenn das Objekt nicht als Tisch geplant werden soll</1>",
        },
      },
      stepThree: {
        createForm: {
          name: "Name",
          errorMessage: "Dieses Feld muss ausgefüllt sein",
          isRequired: "Muss angegeben werden",
          type: "Feldtyp",
          answerOption: "Antwort Möglichkeit {{counter}}",
          create: { new: "Feld erstellen", edit: "Feld aktualisieren" },
          delete: "Feld löschen",
          cancel: "Änderungen verwerfen",
          edit: "Bearbeiten",
          emptyForms: "Es wurden noch keine Felder erstellt",
          noAnswers: "Keine Antwortmöglichkeiten!",
        },
      },
    },
    dashboard: {
      organizedEvents: {
        label: "Meine Events",
        toolbar: {
          createNew: "Neues Event erstellen",
        },
      },
      signedUpEvents: {
        label: "Angemeldete Events",
      },
      allEvents: {
        label: "Alle Events",
        toolbar: {
          searchPlaceholder: "Nach Event suchen...",
          startDate: "Startdatum",
          endDate: "Enddatum",
          status: "Status",
        },
      },
    },
    eventSignUp: {
      steps: {
        first: "Tischauswahl",
        second: "Basis Informationen",
        third: "Event Formular",
      },
      toolbar: {
        abort: "Abbrechen",
        create: "Registrierung abschicken",
      },
      stepOne: {
        showCapacity: {
          true: "Tischkapazitäten ausblenden",
          false: "Tischkapazitäten anzeigen",
          text: "Kapazität: {{capacity}}",
        },
      },
      stepTwo: {
        label: "Basis Daten",
        inputFields: {
          name: "Standbezeichnung",
          contact: "Kontaktdaten",
          description: {
            label: "Beschreibung",
            placeholder:
              "Erstellen sie eine Beschreibung für Ihre Ausstellung...",
          },
        },
      },
    },
    user: {
      settings: {
        title: "Benutzer-Einstellungen",
        toolbar: {
          save: "Speichern",
          changePassword: "Passwort ändern",
          saveSuccess: "Speichern erfolgreich",
          saveError:
            "Speichern fehlgeschlagen. Bitte versuchen Sie es mit einer anderen Email erneut oder kontaktieren Sie den Support.",
        },
        form: {
          inputFields: {
            username: "Benutzername",
            email: "Email",
            firstName: "Vorname",
            lastName: "Nachname",
            imageUrl: "URL zum Profilbild",
          },
        },
      },
    },
  },
  enums: {
    eventStatus: {
      open: "Offen",
      onGoing: "Aktiv",
      closed: "Geschlossen",
      draft: "Entwurf",
    },
    formTypes: {
      inputField: "Textfeld",
      dropDown: "DropDown",
      checkBox: "Checkbox",
      radioButton: "Radio-Buttons",
      datePicker: "Datum",
    },
  },
  messages: {
    validation: {
      signUp: {
        invalidInput: "Geben sie einen gültigen Wert ein",
        invalidEmail: "Ungültige Email",
        passwordTooShort:
          "Das Passwort muss eine Länge von mindestens 8 Zeichen haben.",
        passwordNotSafeEnough:
          "Das Passwort muss mindestens aus einem Großbuchstaben, einem Kleinbuchstaben, einer Zahl und einem Sonderzeichen bestehen.",
      },
      login: {
        emptyField: "Dieses Feld darf nicht leer sein",
      },
      createEvent: {
        invalidInput: "Ungültige Eingabe",
      },
      eventSignUp: {
        noTableId: "Es wurde kein Tisch ausgewählt",
        emptyField: "Dieses Feld darf nicht leer sein",
      },
    },
    success: {
      createEvent: "Event wurde erfolgreich erstellt",
      signup: "Registrierung erfolgreich",
      eventRegistrationSignUp: "Registrierung wurde erfolgreich abgeschickt",
    },
    error: {
      createEvent: {
        failed: "Fehler beim Erstellen des Events",
        missingFields: "Es gibt noch Felder die ausgefüllt werden müssen",
      },
      eventRegistrationSignUp: {
        failed: "Fehler beim Abschicken der Registrierung",
        missingFields: "Es gibt noch Felder die ausgefüllt werden müssen",
        tableHasNoCapacity: "Dieser Tisch kann nicht gebucht werden",
        tableAlreadyOccupied: "Dieser Tisch ist bereits besetzt",
      },
      signup: {
        missingFields: "Es gibt noch Felder die ausgefüllt werden müssen",
        usernameAlreadyExists:
          "Der angegebene Benutzername ist bereits vergeben",
        emailAlreadyExists: "Die angegebene Email ist bereits vergeben",
      },
      login: {
        missingFields: "Es gibt noch Felder die ausgefüllt werden müssen",
        invalidUserName: "Falscher Benutzername",
        invalidPassword: "Falsches Passwort",
      },
      logout: {
        failed: "Fehler beim Abmelden",
      },
    },
  },
};

export default de;
