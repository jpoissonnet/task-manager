export enum TaskState {
  EN_COURS = "En cours",
  A_FAIRE = "A faire",
  TERMINE = "Terminé"
}

export class Task {
  constructor(
    public titre: string,
    public description: string,
    public etat: TaskState
  ) {}
}
