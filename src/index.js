import './style.css';
import resetPage from './common';
import home from './home';
import menu from './menu';
import contact from './contact';

console.log('JS Loaded');

function init(){
    resetPage();
    home();
}

init();

