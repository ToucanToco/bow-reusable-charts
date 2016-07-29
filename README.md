# Toucan-Toco reveal template

## L'essentiel
- [Creation de slides] (#creation-de-slides)
- [Fleches directionelles](#fleches-directionelles)
  - [Direction des slides](#direction-des-slides)
  - [Couleurs](#couleurs)
- [Flux de texte](#flux-de-texte)
- [Bande de couleur en haut] (#bande-de-couleur-en-haut)

## Creation de slides

Pour créer un nouveau slide, on utilise la balise ```<section>```. Exemple :<br>
```html
<section data-state="content-slide">
	<h1>Bienvenue dans mon super slide !</h1>
</section>
```

## Fleches directionelles

### Direction des slides

Comment faire pour que votre prochain slide soit sur la flèche du bas et non de droite ?<br>
Il suffit d'ajouter dans la section une autre section qui contiendra tous les slides que vous voulez avoir dans la même partie. Exemple :
```html
<section data-state="content-slide">
  <section data-state="content-slide">
		<h1>Premier slide</h1>
	</section>
	<section data-state="content-slide">
		<h1>Deuxième slide</h1>
	</section>
	<section data-state="content-slide">
		<h1>Troisième slide</h1>
	</section>
</section>
```

### Couleurs

Pour changer les couleurs des flèches directionnelles, cherchez dans tc-style.css la classe nommée ```.controls```.<br>
Vous pouvez choisir la couleur de chaque flèche séparement et le changement de couleur au survol de la souris. Exemple :
```css
.reveal .controls .navigate-left,
.reveal .controls .navigate-left.enabled {
  border-right-color: #F3C600; }

.reveal .controls .navigate-left.enabled:hover {
  border-right-color: #6ca0e8; }
```

## Flux de texte

Pour choisir de faire arriver le texte au fur à mesure sur un slide, on utilise la classe "fragment". Exemple :<br>
```html
<h1>Mon titre</h1>
  <ul>
		<li class="fragment">Pour commencer</li>
		<li class="fragment">Ensuite</li>
		<li class="fragment">Pour finir</li>
  </ul>
```

## Bande de couleur en haut

Pour changer la couleur et la hauteur du bandeau en haut des slides, cherchez dans tc-style.css la classe nommée ```.reveal--header-slide```.<br>
Vous pouvez ensuite choisir la couleur qui vous convient. Exemple :<br>

```css
.reveal--header-slide {
  background-color: #F3C600;
  height: 10px;
}
```

###Pour approfondir, lien vers la doc de reveal : https://github.com/hakimel/reveal.js/
