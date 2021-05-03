/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


$(".add-to-cart-ajax.available-add").click(function(event) {
 	var variant_id = $(this).data("id");
    let ajaxbody = {"Size":"true","form_type":"product","utf8":"✓","id":variant_id,"quantity":"1"};
  
  let formData = {
   'items': [{
    "Size":"true",
    "form_type":"product",
     "utf8":"✓",
     "id":variant_id,
     "quantity":"1"
    }]
  };
  
  	document.dispatchEvent(new CustomEvent('theme:loading:start'));
  
  	fetch(window.routes.cartAddUrl + '.js', {
      body: JSON.stringify(formData),
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
      }
    }).then(function (response) {
      document.dispatchEvent(new CustomEvent('theme:loading:end'));
      if (response.ok) {
        //addToCartButton.removeAttribute('disabled');
       // We simply trigger an event so the mini-cart can re-render
        document.documentElement.dispatchEvent(new CustomEvent('product:added', {
          bubbles: true,
          detail: {
            variant: variant_id,
            quantity: 1
          }
        }));
      } else {
        response.json().then(function (content) {
          var errorMessageElement = document.createElement('span');
          errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
          errorMessageElement.innerHTML = content['description'];
          setTimeout(function () {
            errorMessageElement.remove();
          }, 2500);
        });
      }
    });
  
}) 