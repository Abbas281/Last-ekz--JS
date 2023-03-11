import { deleteUser } from "./api.js"
import { editUser,addUser } from "./api.js"

let tbody=document.querySelector('.tbody')
let close=document.querySelector('.close')
let deletemodal=document.querySelector('.delete')
let tbodyadd=document.querySelector('.tbodyadd')
let formedit=document.querySelector('.formedit')
let formadd=document.querySelector('.formadd')


// modalka for readmi open
var modalopen = document.getElementById("myModalopen");
var spanopen = document.querySelector(".closeopen");
spanopen.onclick = function() {
  modalopen.style.display = "none";
}

// modalka for delete
var modaldelete = document.getElementById("myModaldelete");
close.onclick=()=>{
    modaldelete.style.display = "none";
}// modalka edit

var modaledit = document.getElementById("myModaledit");
var spanedit = document.querySelector(".closeedit");
spanedit.onclick = function() {
  modaledit.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modaledit || event.target == modaldelete  || event.target == modalopen) {
    modaledit.style.display = "none",
    modaldelete.style.display = "none",
    modalopen.style.display = "none"
  }
}

// modalka for readmi open
var modalopen = document.getElementById("myModalopen");
var spanopen = document.querySelector(".closeopen");
spanopen.onclick = function() {
  modalopen.style.display = "none";
}



formadd.onsubmit=(e)=>{
    e.preventDefault()
    let newUser={
        name:e.target['name'].value,
        phone:e.target['phone'].value,
        course:e.target['course'].value,
    }
    addUser(newUser)
}



function getUser(data){
    tbody.innerHTML=''
    data.forEach((elem)=>{
        let trAll=document.createElement('tr')


        let ID=document.createElement('td')
        ID.innerHTML=elem.id

        let name=document.createElement('td')
        name.innerHTML=elem.name

        let course=document.createElement('td')
        course.innerHTML=elem.course


        // button edit
        let btnEdit=document.createElement('button')
        btnEdit.innerHTML='EDIT'
        btnEdit.onclick=()=>{
            modaledit.style.display = "block";
            formedit['name'].value=elem.name
            formedit['phone'].value=elem.phone
            formedit['course'].value=elem.course
            formedit.onsubmit=(e)=>{
                e.preventDefault()
                let editorUser={
                    name: e.target['name'].value,
                    phone: e.target['phone'].value,
                    course: e.target['course'].value,
                }
                editUser(elem.id,editorUser)
                modaledit.style.display = "none";
            }
        }
        
        let btnDelete=document.createElement('button')
        btnDelete.innerHTML='DELETE'
        btnDelete.onclick=()=>{
            modaldelete.style.display = "block";
            deletemodal.onclick=()=>{
                deleteUser(elem.id)
                modaldelete.style.display = "none";
            }
        }
        let btnReadmi=document.createElement('button')
        btnReadmi.innerHTML='READMI'
        btnReadmi.onclick=()=>{
            tbodyadd.innerHTML=''
            modalopen.style.display = "block";
            let readTr=document.createElement('tr')

            let readId=document.createElement('td')
            readId.innerHTML=elem.id

            let readName=document.createElement('td')
            readName.innerHTML=elem.name

            let readimg=document.createElement('img')
            readimg.src=elem.img
            
            let readPhone=document.createElement('td')
            readPhone.innerHTML=elem.phone

            let readCourse=document.createElement('td')
            readCourse.innerHTML=elem.course

            readTr.appendChild(readimg)
            readTr.appendChild(readId)
            readTr.appendChild(readName)
            readTr.appendChild(readPhone)
            readTr.appendChild(readCourse)
            tbodyadd.append(readTr)
        }
        
       

        trAll.appendChild(ID)
        trAll.appendChild(name)
        trAll.appendChild(course)
        trAll.appendChild(btnEdit)
        trAll.appendChild(btnDelete)
        trAll.appendChild(btnReadmi)
        trAll.appendChild(btnEdit)

        tbody.appendChild(trAll)

        
    })
}




export {getUser}