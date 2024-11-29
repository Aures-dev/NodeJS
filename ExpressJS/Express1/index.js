import express from "express";
import path, { basename } from "path";

// basename()
const monChemin = "/users/john/fichier.txt";
const base = path.basename(monChemin);
console.log(base);
