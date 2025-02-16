import { LightningElement } from 'lwc';

export default class ChildEventComponent extends LightningElement {
  handleChange(event) {
    const value = event.detail.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value }
      })
    );
  }
}
