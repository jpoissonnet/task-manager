# TP TaskManager

Lien du repo : https://github.com/jpoissonnet/task-manager

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





