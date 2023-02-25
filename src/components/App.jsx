import React, { Component } from "react";
import css from './App.module.css';
import ContactForm from './contactForm/contactForm.js';
import Filter from './filter/filter.js';
import ContactList from './contactList/contactList.js';
export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
  
  render() {
    return (
     <div className={css.app}>
  <h1>Phonebook</h1>
  <ContactForm  />

  <h2>Contacts</h2>
  <Filter  />
        <ContactList contacts={this.state.contacts } />
</div>
   ) 
  };
    
  
};