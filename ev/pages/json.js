fetch("products.json")
.then(function(respond){
    return respond.json();
})
.then(function(products){
    let placeholder =document.querySelector("#data-output");
    let out="";

    for(let product of products){
        out +=`
        <tr>
        <td>${product.name}</td>
        <td>${product.address}</td>
        <td>${product.descriptio}</td>
        <td>${product.website}</td>
        <td>${product.phone}</td>
        </tr>
        `;
    }
    placeholder.innerHTML=out;
})