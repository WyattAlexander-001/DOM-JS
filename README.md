# DOM-JS
## Notes:
- There's a lot you won't use
- DOM = Document Object Model!
- Our window into a webpage through JS!
- first example, document.all 
```
    document.all[11].innerText = "WYATT!!!" 
    //Will replace a word at index 11 with my new string.
```
***
## Selecting:

```
document.getElementById('stringIDOnHTML');
document.getElementsByTagName('stringTagOnHTML');
//Returns an html collection, but it is NOT an array
document.getElementsByClassName('stringClassOnHTML');
```
### E.g.
```
document.getElementById('banner');
```
***
## Newer Way Of Selecting, Finds FIRST element
```
document.querySelector('h1');
document.querySelector('#idYouWant');
document.querySelector('.classYouWant');
```

## Newer Way of Selecting, Returns A Collection Of Matching Elements
```
document.querySelectorAll('h1');
document.querySelectorAll('#idYouWant');
document.querySelectorAll('.classYouWant');
document.querySelectorAll('p a'); //All a tags nested in p tags
```
***
## Manipulating

```
document.querySelector('p').innerText = 'lololol';
//Replace all the innerText of first p tag with lololol!
document.querySelector('p').textContent;
//Get that p tag text
```
```
document.querySelector('h1').innerHTML = '<i>RandomText</i>';
document.querySelector('h1').innerHTML = '<span>Disgusting</span>';
//Updating HTML, very useful!
```
```
document.querySelector('#banner').id = 'newID';
//Updated ID
document.querySelector('#banner').src
//Get source like URL for images!
document.querySelector('Link').href
//Oh I can change CSS elements with this!
document.querySelector('img').src = 'https://devsprouthosting.com/images/chicken.jpg';
document.querySelector('img').alt = 'chicken';
//More e.g.

```
***


