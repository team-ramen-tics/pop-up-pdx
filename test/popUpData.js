// const PopUp = require('../lib/models/PopUp');
// const User = require('../lib/models/User');
// const Chance = require('chance');
// const chance = new Chance();

// const DEFAULT_TOTAL_USERS = 10;
// const DEFAULT_TOTAL_POPUPS = 30;

// const popUpData = [
//   {
//     name: "Casa Zoraya"
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Latin]}
// photoUrl:
//   },
//   {
//     name: 'Creole Cravings'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Caribbean]}
// photoUrl:
//   },
//   {
//     name: 'Folklore'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Vegetarian/Vegan]}
// photoUrl:
//   },
//   {
//     name: 'Jackfruit Kitchen'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Vegetarian/Vegan]}
// photoUrl:
//   },
//   {
//     name: 'Ippai PDX'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Ssshaved Ice'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Dessert]}
// photoUrl:
//   },
//   {
//     name: 'Outer Darkness Donuts'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Dessert]}
// photoUrl:
//   },
//   {
//     name: 'Gado gado PDX'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Burger Stevens'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'Mae'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'Uptown Market'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'HunnyMilk'
//     date:"",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'Wanna Fight'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'Jolie Laide'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Late Shake'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Dessert]}
// photoUrl:
//   },
//   {
//     name: 'Ox Box'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Latin]}
// photoUrl:
//   },
//   {
//     name: 'Ferne + Holly'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//   {
//     name: 'NorthFresh Sushi'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Bliss House'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Vegetarian/Vegan]}
// photoUrl:
//   },
//   {
//     name: 'Obon'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Erwina's Inasal'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Tamago Bros'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Wolf and Bears'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Middle Eastern]}
// photoUrl:
//   },
//   {
//     name: 'Shipwreck'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },
//  {
//     name: 'Ranch Pizza'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [American]}
// photoUrl:
//   },   
//{
//     name: 'Jamaican Taste'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Caribbean]}
// photoUrl:
//   },
//  {
//     name: 'Food of Guam'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Jun Jun'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Danet'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [European]}
// photoUrl:
//   },
//   {
//     name: 'Jun Jun'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Flight Dessert Bar'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Dessert]}
// photoUrl:
//   },
//   {
//     name: 'Langbaan'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Nodoguro'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Pondicherry'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Fusion]}
// photoUrl:
//   },
//   {
//     name: 'Thali Supper Club'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Asian]}
// photoUrl:
//   },
//   {
//     name: 'Farm Spirit'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Vegetarian]}
// photoUrl:
//   },
//   {
//     name: 'Tapalaya'
//     date: "",
//     time: "",
//     food: { 
// type: "",
// required:,
// enum: [Latin]}
// photoUrl:
//   },

