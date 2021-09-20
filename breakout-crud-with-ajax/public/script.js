console.log('loaded');

// $(document).ready(() => {});
$(() => {

  // $.get('/api/products', (response) => {
  //   console.log('callback response', response);
  // });

  const $home = $(`<h2>Home</h2>`);
  const $about = $(`<h2>About</h2>`);
  const $search = $(`<h2>Search</h2>`);

  $home.show();
  $about.hide();
  $search.hide();
  $('body').append($home, $about, $search);

  const $homeButton = $('<button>Home</button>');
  $homeButton.click(() => {
    $home.show();
    $about.hide();
    $search.hide();
  });
  const $aboutButton = $('<button>About</button>');
  $aboutButton.click(() => {
    $home.hide();
    $about.show();
    $search.hide();
  });
  const $searchButton = $('<button>Search</button>');
  $searchButton.click(() => {
    $home.hide();
    $about.hide();
    $search.show();
  });

  $('body').append($homeButton, $aboutButton, $searchButton);

  const loadProducts = () => {
    // load the data
    $.get('/api/products')
      .then((response) => {
        console.log(response);
        renderProducts(response);
      });
  }; 

  const createProductElement = (product) => {
    const $productElement = $(`
      <div class="product">
        <h2>${product.product_name} (${product.id})</h2>
        <h3>Price: $${product.price}</h3>
      </div>
    `);

    const $updateProductForm = $(`
      <form>
        <label>New Product Name:</label>
        <input name="productName" value="${product.product_name}" />
        <br/>

        <label>New Price:</label>
        <input name="price" value="${product.price}" />
        <br/>

        <button type="submit">Update!</button>
      </form>
    `);

    $updateProductForm.on('submit', (event) => {
      event.preventDefault();
      const data = $updateProductForm.serialize();

      $.post(`/api/products/${product.id}`, data)
        .then(() => {
          loadProducts();
        });
    });

    const $deleteButton = $('<button>').text('DELETE');
    $deleteButton.on('click', () => {
      $.ajax({
        url: `/api/products/${product.id}`,
        method: 'DELETE' 
      }).then(() => {
        loadProducts();
      });
    });

    $productElement.append($updateProductForm, $deleteButton);

    return $productElement;
  };

  const renderProducts = (products) => {
    const $productContainer = $('#product-container');
    $productContainer.empty();

    for (const product of products) {
      const $product = createProductElement(product);
      $productContainer.append($product);
    }
  };

  // loadProducts();

  // grab the form
  const $form = $('#new-product-form');
  $form.on('submit', (event) => {
    event.preventDefault();
    const data = $form.serialize();
    console.log(data);

    $.post('/api/products', data)
      .then((response) => {
        console.log(response);
        loadProducts();
      });
  });

});
