import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

const cachorro: Cachorro = new Cachorro("Rex", 4);
cachorro.emitirSom();
cachorro.correr();

const cavalo: Cavalo = new Cavalo("Relâmpago", 7);
cavalo.emitirSom();
cavalo.correr();

const preguica: Preguica = new Preguica("Rubinho", 5);
preguica.emitirSom();
preguica.escalar();

const animal: Animal = new Cavalo("Pangaré", 3);
animal.emitirSom();