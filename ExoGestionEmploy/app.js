const { v4: uuidv4 } = require("uuid");
const { stdout, stdin } = require("process");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: true,
});

let allData = [];
const studentData = {
  id: null,
  nom: null,
  prenom: null,
  age: null,
  promo: null,
  matricule: null,
};
//génère le matricule
function genererMatricule(n) {
  // Convertit le nombre en chaîne et le formate pour avoir 4 chiffres
  let nombreFormate = n.toString().padStart(4, "0");
  let formatMatricule = "BJGLI" + nombreFormate;
  return formatMatricule;
}
// cette fonction rafraîchit dans le json la liste des étudiants lors de l'ajout
function refreshUsers() {
  //lecture du fichier etudiants.json
  fs.readFile("etudiants.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      return;
    }
    //insère les etudiants déjà dans le fichier dans allData
    let temp = JSON.parse(data);
    temp.forEach((currentItem) => {
      allData.push(currentItem);
    });
    //Ajoute à allData le nouvel etudiants
    allData.push(studentData);
    //attribution d'un matricule au nouvel étudiant en fonction de celui listé avant lui
    allData.forEach((currentItem, index) => {
      if (currentItem.matricule == null) {
        let temp = allData[index - 1].matricule.split("");
        let code =
          Number(temp[5]) + Number(temp[6]) + Number(temp[7]) + Number(temp[8]);
        currentItem.matricule = genererMatricule(code + 1);
      }
    });
    //Réécriture du fichier avec les données actuelles
    fs.writeFile("etudiants.json", JSON.stringify(allData), (err) => {
      if (err) {
        console.error("Erreur lors de l'ajout de contenu :", err);
        return;
      }
      console.log("------Étudiant ajouté avec succès !-----");
      rl.close();
    });
  });
}
//logique d'ajout d'un étudiant
function ajouterEtudiant() {
  //génération d'un id unique
  studentData.id = uuidv4();
  rl.question("--------Entrez le nom de l'étudiant : ", (lastname) => {
    studentData.nom = lastname;
    console.log("Vous avez entré :", lastname);
    rl.question("--------Entrez le prénom de l'étudiant : ", (firstname) => {
      studentData.prenom = firstname;
      console.log("Vous avez entré", firstname);
      rl.question("--------Entrez l'âge de l'étudiant : ", (age) => {
        //vérifie si l'âge est un nombre
        if (isNaN(age)) {
          console.log("\n ****** Ecrivez un nombre *****\n");
          setTimeout(() => {
            lunchApp();
          }, 1000);
        } else {
          studentData.age = age;
          console.log("Vous avez entré :", age);
          rl.question(
            "--------Entrez la promotion de l'étudiant : ",
            (promo) => {
              //vérifie si la promo est un nombre
              if (isNaN(promo)) {
                console.log("\n ****** Ecrivez un nombre *****\n");
                setTimeout(() => {
                  lunchApp();
                }, 1000);
              } else {
                studentData.promo = promo;
                console.log("Vous avez entré :", promo);
                //rafraîchit le fichier json
                refreshUsers();
              }
            }
          );
        }
      });
    });
  });
}
//logique d'affichage des users
function afficheListeUsers() {
  fs.readFile("etudiants.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      return;
    }
    //insère les etudiants déjà dans le fichier dans allData
    let temp = JSON.parse(data);
    let compt = 1;
    temp.forEach((currentItem) => {
      console.log(
        `${compt}. ID :${currentItem.id},Nom: ${currentItem.nom}, Prénom: ${currentItem.prenom}, Age: ${currentItem.age}, Promo: ${currentItem.promo}, Matricule: ${currentItem.matricule}\n`
      );
      compt++;
    });

    rl.close();
  });
}

function fetchStudents() {
  //lecture du fichier etudiants.json
  fs.readFile("etudiants.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      return;
    }
    allData = [];
    //insère les etudiants déjà dans le fichier dans allData
    let temp = JSON.parse(data);
    temp.forEach((currentItem) => {
      allData.push(currentItem);
    });
  });
}
function sendStudentsList() {
  fs.writeFile("etudiants.json", JSON.stringify(allData), (err) => {
    if (err) {
      console.error("Erreur lors de l'ajout de contenu :", err);
      return;
    }
    console.log("\n-----Liste Étudiant actualisée avec succès !-----\n");
    rl.close();
  });
}

function modifUser() {
  rl.question(
    "--------Sélectionner à partir de : \n1. id\n2. matricule\n\n",
    (choix) => {
      fetchStudents();
      switch (choix) {
        case "1":
          rl.question("Entrez l'id\n", (id) => {
            let theStudent = null;
            let theStudentIndex = null;
            theStudent = allData.find((currentItem) => currentItem.id == id);
            theStudentIndex = allData.findIndex(
              (currentItem) => currentItem.id == id
            );
            if (theStudent != null) {
              console.log(
                `Vous avez recherché\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}\n`
              );

              rl.question(
                "-------Entrez le nom de l'étudiant : ",
                (lastname) => {
                  theStudent.nom = lastname;
                  console.log("Vous avez entré :", lastname);
                  rl.question(
                    "--------Entrez le prénom de l'étudiant : ",
                    (firstname) => {
                      theStudent.prenom = firstname;
                      console.log("Vous avez entré :", firstname);
                      rl.question(
                        "--------Entrez l'âge de l'étudiant : ",
                        (age) => {
                          if (isNaN(age)) {
                            console.log("\n ****** Ecrivez un nombre *****\n");
                            setTimeout(() => {
                              lunchApp();
                            }, 1000);
                          } else {
                            theStudent.age = age;
                            console.log("Vous avez entré :", age);
                            rl.question(
                              "--------Entrez la promotion de l'étudiant : ",
                              (promo) => {
                                if (isNaN(promo)) {
                                  console.log(
                                    "\n ****** Ecrivez un nombre *****\n"
                                  );
                                  setTimeout(() => {
                                    lunchApp();
                                  }, 1000);
                                } else {
                                  theStudent.promo = promo;
                                  console.log("Vous avez entré :", promo);
                                  console.log(
                                    `\n_____Voici l'étudiant après les modifications :\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}`
                                  );
                                  if (theStudentIndex != null) {
                                    allData[theStudentIndex] = theStudent;
                                  }
                                  sendStudentsList();
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  );
                }
              );
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;
        case "2":
          rl.question("Entrez le matricule\n", (matricule) => {
            let theStudent = null;
            let theStudentIndex = null;
            theStudent = allData.find(
              (currentItem) => currentItem.matricule == matricule
            );
            theStudentIndex = allData.findIndex(
              (currentItem) => currentItem.matricule == matricule
            );
            if (theStudent != null) {
              console.log(
                `Vous avez recherché\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}\n`
              );

              rl.question(
                "-------Entrez le nom de l'étudiant : ",
                (lastname) => {
                  theStudent.nom = lastname;
                  console.log("Vous avez entré :", lastname);
                  rl.question(
                    "--------Entrez le prénom de l'étudiant : ",
                    (firstname) => {
                      theStudent.prenom = firstname;
                      console.log("Vous avez entré :", firstname);
                      rl.question(
                        "--------Entrez l'âge de l'étudiant : ",
                        (age) => {
                          if (isNaN(age)) {
                            console.log("\n ****** Ecrivez un nombre *****\n");
                            setTimeout(() => {
                              lunchApp();
                            }, 1000);
                          } else {
                            theStudent.age = age;
                            console.log("Vous avez entré :", age);
                            rl.question(
                              "--------Entrez la promotion de l'étudiant : ",
                              (promo) => {
                                if (isNaN(promo)) {
                                  console.log(
                                    "\n ****** Ecrivez un nombre *****\n"
                                  );
                                  setTimeout(() => {
                                    lunchApp();
                                  }, 1000);
                                } else {
                                  theStudent.promo = promo;
                                  console.log("Vous avez entré :", promo);
                                  console.log(
                                    `\n_____Voici l'étudiant après les modifications :\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}`
                                  );
                                  if (theStudentIndex != null) {
                                    allData[theStudentIndex] = theStudent;
                                  }
                                  sendStudentsList();
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  );
                }
              );
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;

        default:
          console.log("\n---------Votre choix n'est pas valide\n");
          lunchApp();
          break;
      }
    }
  );
}

function afficheStudentInfo() {
  rl.question(
    "Sélectionner à partir de : \n1. id\n2. matricule\n\n",
    (choix) => {
      fetchStudents();
      switch (choix) {
        case "1":
          rl.question("Entrez l'id\n", (id) => {
            let theStudent = null;
            theStudent = allData.find((currentItem) => currentItem.id == id);
            if (theStudent != null) {
              console.log(
                `Vous avez recherché\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}\n`
              );
              rl.close();
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;
        case "2":
          rl.question("Entrez le matricule\n", (matricule) => {
            let theStudent = null;
            theStudent = allData.find(
              (currentItem) => currentItem.matricule == matricule
            );
            if (theStudent != null) {
              console.log(
                `Vous avez recherché\n ID :${theStudent.id},Nom: ${theStudent.nom}, Prénom: ${theStudent.prenom}, Age: ${theStudent.age}, Promo: ${theStudent.promo}, Matricule: ${theStudent.matricule}\n`
              );
              rl.close();
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;

        default:
          console.log("\n---------Votre choix n'est pas valide\n");
          lunchApp();
          break;
      }
    }
  );
}

function deleteStudent() {
  rl.question(
    "Sélectionner à partir de : \n1. id\n2. matricule\n\n",
    (choix) => {
      fetchStudents();
      switch (choix) {
        case "1":
          rl.question("Entrez l'id\n", (id) => {
            let theStudent = null;
            theStudent = allData.find((el) => el.id == id);
            if (theStudent != null) {
              allData = allData.filter((el) => el.id != theStudent.id);
              sendStudentsList();
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;
        case "2":
          rl.question("Entrez le matricule\n", (matricule) => {
            let theStudent = null;
            theStudent = allData.find((el) => el.matricule == matricule);
            if (theStudent != null) {
              allData = allData.filter(
                (el) => el.matricule != theStudent.matricule
              );
              sendStudentsList();
            } else {
              console.log("\n---------Identifiant incorrect\n");
              lunchApp();
            }
          });
          break;

        default:
          console.log("\n---------Votre choix n'est pas valide\n");
          lunchApp();
          break;
      }
    }
  );
}

let tentatives = 0;
function lunchApp() {
  rl.question(
    "---------------Que souhaitez-vous faire ? \n\n1. Ajouter un étudiant\n2. Afficher la liste des étudiants\n3. Modifier les informations d'un étudiant\n4. Accéder aux informations d'un étudiant\n5. Supprimer un étudiant\n6. Quitter\n\nVotre choix :",
    (choice) => {
      switch (choice) {
        case "1":
          ajouterEtudiant();
          break;
        case "2":
          console.log("__Liste des étudiants__\n");
          afficheListeUsers();
          break;
        case "3":
          modifUser();
          break;
        case "4":
          afficheStudentInfo();
          break;
        case "5":
          deleteStudent();
          break;

        case "6":
          setTimeout(() => {
            console.log("\n---------------Au revoir\n");
          }, 2000);
          rl.close();
          break;

        default:
          tentatives++;
          console.log("Votre choix n'est pas valide\n");
          if (tentatives == 3) {
            setTimeout(() => {
              console.log("\n---------------Au revoir\n");
            }, 2000);
            rl.close();
          } else {
            lunchApp();
          }

          break;
      }
    }
  );
}

console.log(
  "---------------Bienvenue dans l'application de gestion des employés.---------------\n"
);
lunchApp();
