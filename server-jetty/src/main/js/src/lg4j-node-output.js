import React from 'react'
import ReactDOM from 'react-dom/client'; 
import ReactJson from '@microlink/react-json-view'

export class LG4JNodeOutput extends HTMLElement {
    
    static get observedAttributes() {
        return ['value'];
    }

    constructor() {
        super()

        const shadowRoot = this.attachShadow({ mode: "open" });
        
        const style = document.createElement("style");
        style.textContent = `
        <style>
        </style>
        `
        
        shadowRoot.appendChild(style);

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
          if (newValue !== null) {
            console.debug( "attributeChangedCallback.value", newValue )
          }
        }
    }

    connectedCallback() {

        const value = this.textContent
        
        console.debug( "value", value )

        this.root = this.#createRoot( JSON.parse(value) )
        
    }
    
    disconnectedCallback() {

      this.root?.unmount()
    
    }


  /**
   * Represents an event triggered when an edit occurs.
   *
   * @typedef {Object} EditEvent
   * @property {Record<string, any>} existing_src - The original source object before the edit.
   * @property {any} existing_value - The original value before the edit.
   * @property {string} name - The name of the field that was edited.
   * @property {string[]} namespace - The namespace path indicating where the edit occurred.
   * @property {any} new_value - The new value after the edit.
   * @property {Record<string, any>} updated_src - The updated source object after the edit.
   */

    /**
     * 
     * @param {EditEvent} e
     */
    #onEdit( e ) {
      
      console.dir( e )

    }


    #createRoot( value ) {

      const mountPoint = document.createElement('span');
      this.shadowRoot.appendChild(mountPoint);
  
      const root = ReactDOM.createRoot(mountPoint);

      const component = React.createElement( ReactJson, { 
        src: value,
        enableClipboard: false,
        displayDataTypes: false,
        name: false,
        collapsed: true,
        theme: 'monokai',
        onEdit: e => this.#onEdit(e)

      } )
      
      root.render( component )

      return root
    }
}


window.customElements.define('lg4j-node-output', LG4JNodeOutput);