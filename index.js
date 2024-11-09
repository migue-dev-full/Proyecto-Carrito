const shopIcon = document.querySelector('#shop-icon');
const cart = document.querySelector('.cart');
const table = document.querySelector('#table-body');
const courseBtn = document.querySelectorAll('.course-btn');
const tableClear = document.querySelector('#table-clear');

// Agregar al carrito
// le pedimos aqui que cree un event listener 
// click para cada btn
courseBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        // Creamos las variables para recopilar lainfo del nombre y img de producto
        // Con e.target buscando los parent elementos y children 
        const img = e.target.parentElement.parentElement.children[0].innerHTML;
        const name = e.target.parentElement.children[0].innerHTML;
        
        // Con esta funcion le pedimos que si existe, lo sume a la cantidad
        const exist = [... table.children].find(element => element.children[1].innerHTML === name);
        if (exist) {
            exist.children[3].innerHTML = Number(exist.children[3].innerHTML) + 1;
         } else { 
            // Aqui le pedimos que si no existe en el carrito lo cree
          const row = document.createElement('tr');
        row.innerHTML = `
        <td>${img}</td>
        <td>${name}</td>
        <td>15$</td>
        <td>1</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" class="delete-btn" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </td>
        `;

            // A LA ROW CHILDRE 4 QUE SERIA EL BTN EIMINAR
            // LE AGREGAMOS UN EVENT LISTENER CLICK
        row.children[4].addEventListener('click', e => {
            // BUSCAMOS CON LOG A VER SI SELECCIONA EL TBN DESEADO
            // USAMOS EN ESTE CASO e.currentTarget
            // PARA QUE SELECCIONE SOLO EL TD Y NO TL PATH O EL SVG
            // console.log(e.currentTarget.parentElement.remove();
            // y le pedimos que el evento remueva su parent element lo cual elimina ese elemento 
            e.currentTarget.parentElement.remove()
        });


        // Aqui pedimos que en la tabla, agregue una nueva row
        table.append(row);  
        }
    });
});



// esta funcion hace aparecer el carrito
shopIcon.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
})

// habilitando el btn vaciar Carrito
tableClear.addEventListener('click', e => {
    table.innerHTML = ''; // vacia el innerHTML de a tabla
})