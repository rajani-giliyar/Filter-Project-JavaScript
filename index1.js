let products=[
    {
        id:1,
        name:"Maggie noodles",
        price:10,
        category:"food",
        quantity:150,
        pic:"https://e7.pngegg.com/pngimages/919/350/png-clipart-vegetarian-cuisine-maggi-pasta-noodle-masala-others-food-recipe.png"
    },
    {
        id:2,
        name:"Cocacola",
        price:40,
        category:"drink",
        quantity:200,
        pic:"https://www.designi.com.br/images/preview/10001675.jpg"
    },
    {
        id:3,
        name:"Amul Cheese",
        price:90,
        category:"dairy",
        quantity:30,
        pic:"https://amul.com/files/products/Processed_Cheese_2.png"
    },
    {
        id:4,
        name:"Gatorade Energy Drink ",
        price:70,
        category:"drink",
        quantity:50,
        pic:"https://ongpng.com/wp-content/uploads/2023/04/6-47.png"
    },
    {
        id:5,
        name:"Go Cheese",
        price:120,
        category:"dairy",
        quantity:30,
        pic:"https://www.spencers.in/media/catalog/product/1/2/1233046.jpg"
    },
    {
        id:6,
        name:"Cream",
        price:200,
        category:"dairy",
        quantity:300,
        pic:"https://www.spencers.in/media/catalog/product/1/2/1233046.jpg"
    },
    {
        id:7,
        name:"Yogurt ",
        price:120,
        category:"dairy",
        quantity:100,
        pic:"https://www.spencers.in/media/catalog/product/1/2/1233046.jpg"
    },
    {
        id:7,
        name:"Milk Powder ",
        price:220,
        category:"dairy",
        quantity:100,
        pic:"https://www.spencers.in/media/catalog/product/1/2/1233046.jpg"
    },
    {
        id:8,
        name:"butter ",
        price:120,
        category:"dairy",
        quantity:100,
        pic:"https://www.spencers.in/media/catalog/product/1/2/1233046.jpg"
    },
]


function displayData(arr)
{
    document.getElementById("data").innerText="";
    arr.forEach((product,index)=>
    {
         let row=document.createElement("tr");

         let numberTD=document.createElement("td");
         numberTD.append(index+1);

         let nameTD=document.createElement("td");
         nameTD.append(product.name);

         let priceTD=document.createElement("td");
         priceTD.append(product.price);

         let categoryTD=document.createElement("td");
         categoryTD.append(product.category);

         let quantityTD=document.createElement("td");
         quantityTD.append(product.quantity);

         let picTD=document.createElement("td");
         let proPic=document.createElement("img");
         proPic.setAttribute("src",product.pic);
         picTD.appendChild(proPic);

         row.appendChild(numberTD);
         row.appendChild(nameTD);
         row.appendChild(priceTD);
         row.appendChild(categoryTD);
         row.appendChild(quantityTD);
         row.appendChild(picTD);

         document.getElementById("data").appendChild(row);
    })
}

displayData(products);

let filterStatus=false;
function openFilterSection()
{
if (filterStatus===false)
{
     document.getElementById("filter_box").style.marginLeft="0px";
     filterStatus=true;
}
else
{
    document.getElementById("filter_box").style.marginLeft="-30%";
    filterStatus=false;

}

}


let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setfilters(property,value)
{
      if(value!=="")
      {
        filters[property]=value;

        if(property==="minPrice"){
            document.getElementById("maxPrice").min=Number(value)+1;
            document.getElementById("lowMaxPriceLabel").innerText=Number(value)+1;

        }

        filter();
        // when we call filter at this time no need to press filter btn it automatically work and show fileted output

      }
      else
      {
        filters[property]=null;
      }
      console.log(filters);
}


function filter(){
    let filteredData=products;

    if(filters.category!==null)
    {
        filteredData=filteredData.filter((product,index)=>
        {
            return product.category.toUpperCase()===filters.category.toUpperCase();
        })
    }
    if(filters.quantity!==null)
    {
        filteredData=filteredData.filter((product,index)=>
        {
            return Number(filters.quantity)>=product.quantity;
        })
    }
    if(filters.minPrice!==null)
    {
        filteredData=filteredData.filter((product,index)=>
        {
            return Number(filters.minPrice)<=product.price;
        })
    }
    if (filters.maxPrice !== null) {
        filteredData = filteredData.filter((product, index) => {
            return Number(filters.maxPrice) >= product.price;
        })
    }
    
    displayData(filteredData);
}

