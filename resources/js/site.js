import { createData, createStore } from './vendor/shopify/alpine';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

createStore();
createData();

Alpine.start();
