
const tablebody=document.getElementById("tablebody");

fetch("https://northwind.vercel.app/api/products").then((res)=>res.json()).then((data)=>{
     for(i=0;i<data.length;i++){
        tablebody.innerHTML+=` <tr>
        <td> ${data[i].id} </td>
        <td> ${data[i].supplierId} </td>
        <td> ${data[i].categoryId} </td>
        <td> ${data[i].quantityPerUnit} </td>
        <td> ${data[i].unitPrice} </td>
        <td> ${data[i].unitsInStock} </td>
        <td> ${data[i].unitsOnOrder} </td>
        <td> ${data[i].reorderLevel} </td>
        <td> ${data[i].discontinued} </td>
        <td> ${data[i].name} </td>
        </tr>`;
        //  var data1=document.createElement("td")
        //  var data2=document.createElement("td")
        //  var data3=document.createElement("td")
        //  var data4=document.createElement("td")
        //  var data5=document.createElement("td")
        //  var data6=document.createElement("td")
        //  var data7=document.createElement("td")
        //  var data8=document.createElement("td")
        //  var data9=document.createElement("td")
        //  var data10=document.createElement("td")
        //  data1.innerHTML=data[i].id
        //  data2.innerHTML=data[i].supplierId
        //  data3.innerHTML=data[i].categoryId
        //  data4.innerHTML=data[i].quantityPerUnit
        //  data5.innerHTML=data[i].unitPrice
        //  data6.innerHTML=data[i].unitsInStock
        //  data7.innerHTML=data[i].unitsOnOrder
        //  data8.innerHTML=data[i].reorderLevel
        //  data9.innerHTML=data[i].discontinued
        //  data10.innerHTML=data[i].name
        //  row.append(data1,data2 ,data3 ,data4 ,data5 ,data6 ,data7, data8, data9 ,data10)
         //tablebody.appendChild(row)
        }
});