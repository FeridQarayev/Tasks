
const tablebody=document.getElementById("tablebody");

axios("https://northwind.vercel.app/api/products").then((res)=>{
     for(i=0;i<res.data.length;i++){
         var row=document.createElement("tr")
         var data1=document.createElement("td")
         var data2=document.createElement("td")
         var data3=document.createElement("td")
         var data4=document.createElement("td")
         var data5=document.createElement("td")
         var data6=document.createElement("td")
         var data7=document.createElement("td")
         var data8=document.createElement("td")
         var data9=document.createElement("td")
         var data10=document.createElement("td")
         data1.innerHTML=res.data[i].id
         data2.innerHTML=res.data[i].supplierId
         data3.innerHTML=res.data[i].categoryId
         data4.innerHTML=res.data[i].quantityPerUnit
         data5.innerHTML=res.data[i].unitPrice
         data6.innerHTML=res.data[i].unitsInStock
         data7.innerHTML=res.data[i].unitsOnOrder
         data8.innerHTML=res.data[i].reorderLevel
         data9.innerHTML=res.data[i].discontinued
         data10.innerHTML=res.data[i].name
         row.append(data1,data2 ,data3 ,data4 ,data5 ,data6 ,data7, data8, data9 ,data10)
         tablebody.appendChild(row)
        }
});