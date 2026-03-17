// Create custom component price-filter
if (!customElements.get('price-filter')) {
  class PriceFilter extends HTMLElement {
    constructor() {
      super();
      this.querySelectorAll('input').forEach((ele) => {
        ele.addEventListener('change', this.onRangeChange.bind(this));
        ele.addEventListener('keydown', this.onKeyDown.bind(this));
      })
    }

    onRangeChange(e) {

    }

    onKeyDown(e) {

    }
  }

}