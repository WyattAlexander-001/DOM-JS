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
***


