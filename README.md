# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# TP Jules Poissonnet

Versions :

- Node: 18.17.0
- Npm: 9.6.7
- Angular CLI: 16.2.0

`npm install -g @angular/cli`

`ng new task-manager`

`cd task-manager`

`ng build`

Les fichiers dans le `dist` sont minifiés et bundlés.

`npm i -g yarn`

`yarn add --dev @compodoc/compodoc`

`npm run compodoc:serve`

- compodoc: 1.1.21
- yarn: 4.0.0-rc.50

Imaginons que les données délivrées par les services soient issues de requêtes
HTTP. Décrivez les opérations à effectuer pour mettre en place le module
HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec
un paramètre de requête "?param=test".

- dans un service renvoyer un observable

```
getData(): Observable<any> {
return this.http.get('https://domain/data?param=test')
}
```

- dans le composant, souscrire à l'observable

```
this.service.getData().subscribe(data => this.data = data)
```





