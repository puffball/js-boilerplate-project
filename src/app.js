import 'babel-polyfill';
import $ from 'jquery';
import pets from './pets';

$('<h1>Pets</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
pets.forEach(pet => $('<li></li>').text(pet).appendTo(ul));

