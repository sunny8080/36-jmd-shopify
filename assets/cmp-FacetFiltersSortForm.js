// Create custom component facet-form
if (!customElements.get('facet-form')) {
  class FacetFiltersSortForm extends HTMLElement {
    constructor() {
      super();

      // Automatically Trigger filter after 500ms debouncing
      this.debouncedOnSubmitHandler = debounce((event) => {
        this.onSubmitHandler(event)
      }, 500);

      const facetForm = this.querySelector('form');
      facetForm.addEventListener('input', this.debouncedOnSubmitHandler.bind(this));
    }

    /**
     * @param {Event} event
     */
    onSubmitHandler(event) {
      event.preventDefault();
      const facetForm = document.querySelector('facet-filters-sort-form form');
      if (!facetForm) return;

      // build url
      const formData = new FormData(facetForm);
      let searchParams = new URLSearchParams(formData).toString();

      // if we want to reload page whenever filter input is changed
      // let url = `${window.location.pathname}?${searchParams}`;
      // window.location.href = url;


      
    }
  }

  customElements.define('facet-filters-sort-form', FacetFiltersSortForm);
}
