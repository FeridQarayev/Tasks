const addbtn=document.getElementById('addBtn');
const tablebody=document.getElementById('tableBody');
const namePut=document.getElementById('namePut');
const surnamePut=document.getElementById('surnamePut');
const salaryPut=document.getElementById('salaryPut');

addbtn.onclick=()=>{
    if(namePut.value.trim()=='') return alert('Name not find :(')
    if(surnamePut.value.trim()=='') return alert('Surname not find :(')
    if(salaryPut.value.trim()=='') return alert('Salary not find :(')  

    let deletebtn=document.createElement('button');
    let editbtn=document.createElement('button');
    let cancelbtn=document.createElement('button');
    let savebtn=document.createElement('button');
    let deletebtnTd=document.createElement('td');
    let editbtnTd=document.createElement('td');
    let cancelbtnTd=document.createElement('td');
    let savebtnTd=document.createElement('td');
    let trRow=document.createElement('tr');

    let nameSpan=document.createElement('td');
    let surnameSpan=document.createElement('td');
    let salarySpan=document.createElement('td');

    nameSpan.textContent=namePut.value
    surnameSpan.textContent=surnamePut.value
    salarySpan.textContent=salaryPut.value

    deletebtn.textContent="Delete"
    deletebtn.style.backgroundColor="white"
    savebtn.textContent="Save"
    savebtn.style.backgroundColor="white"
    editbtn.textContent="Edit"
    editbtn.style.backgroundColor="white"
    cancelbtn.textContent="Cancel"
    cancelbtn.style.backgroundColor="white"
    cancelbtn.hidden=true

    deletebtn.onclick=()=>{
        tablebody.removeChild(trRow);
    }

    let nameEdit=document.createElement('input')
    let surnameEdit=document.createElement('input')
    let salaryEdit=document.createElement('input')
    salaryEdit.type='number';
    let namedata=''
    let surnamedata=''
    let salarydata=''
    editbtn.onclick=()=>{
        namedata=nameSpan.textContent
        surnamedata=surnameSpan.textContent
        salarydata=salarySpan.textContent
        nameEdit.value=nameSpan.textContent
        surnameEdit.value=surnameSpan.textContent
        salaryEdit.value=salarySpan.textContent
        nameSpan.textContent=""
        surnameSpan.textContent=""
        salarySpan.textContent=""
        nameSpan.appendChild(nameEdit)
        surnameSpan.appendChild(surnameEdit)
        salarySpan.appendChild(salaryEdit)
        savebtnTd.appendChild(savebtn)
        salarySpan.nextElementSibling.appendChild(savebtnTd)
        cancelbtn.hidden=false
        editbtn.hidden=true
        savebtn.hidden=false
    }

    function cancelfunc(){
        editbtn.hidden=false
        cancelbtn.hidden=true
        savebtn.hidden=true
        nameSpan.textContent=namedata
        surnameSpan.textContent=surnamedata
        salarySpan.textContent=salarydata
    }

    cancelbtn.onclick=()=>{
        cancelfunc()
    }
    
    savebtn.onclick=()=>{
        editbtn.hidden=false
        cancelbtn.hidden=true
        savebtn.hidden=true
        if(nameEdit.value.trim()==''||
        surnameEdit.value.trim()==''||
        salaryEdit.value.trim()==''){
        cancelfunc()
        return alert('Valus not find :(')  
        }
        nameSpan.textContent=nameEdit.value
        surnameSpan.textContent=surnameEdit.value
        salarySpan.textContent=salaryEdit.value
    }
    
    trRow.append(nameSpan,surnameSpan,salarySpan)
    editbtnTd.appendChild(editbtn)
    cancelbtnTd.appendChild(cancelbtn)
    deletebtnTd.appendChild(deletebtn)
    trRow.append(editbtnTd,cancelbtnTd,deletebtnTd)
    tablebody.appendChild(trRow)

    namePut.value="";
    surnamePut.value="";
    salaryPut.value="";
}