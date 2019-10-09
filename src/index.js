let arrayNotes = [];
const btnNewNote = document.getElementById('btnNewNote');
const notes = document.getElementById('notes');
let count = 0;

const startNote = () => {
  count++;
  const note = document.createElement('form');
  note.setAttribute('id', 'note'+ count);
  note.setAttribute('class', 'newNote');
  note.innerHTML = '<button id="btnDelete'+count+'" class="buttonFunction hide" type="button" name="button">Eliminar</button>'+
  '<textarea value="Hola" id="textTitle'+ count+'" placeholder="Título" class="titleNote" name="name" rows="1" cols="80"></textarea>' +
  '<textarea id="textNote'+ count+'" placeholder="Escribe aquí..." class="textNote" rows="8" name="name" rows="8" cols="80"></textarea>'+
  '<button id="desencriptar'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<div id="inputKeyNote'+count+'" class="textFunction hide">'+
    '<span>Clave :</span><input id="keyShow'+count+'" class="keyInput" type="text" name="" value="">'+
  '</div>'+
  '<button id="deleteDone'+count+'" class="buttonFunction hide" type="button" name="button">Eliminar</button>'+
  '<button id="decodeBtn'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<button id="encodeBtnTwo'+count+'" class="buttonFunction hide" type="button" name="button">Editar y Encriptar</button>'+
  '<section id="sectionKey'+count+'">'+
    '<div id="divKey'+count+'" class="textFunction">'+
      '<p>* Escoge un número de 2 dígitos como clave única para ésta nota.</p>'+
      '<span>Clave :</span><input id="key'+count+'" class="keyInput" type="text" name="" value="">'+
    '</div>'+
    '<button id="btnEncryptDone'+count+'" class="buttonFunction" type="button" name="button">Encriptar</button>'+
  '</section>';
  notes.appendChild(note);
  const countActually = count;
  const deleteDone = document.getElementById('deleteDone'+countActually);
  deleteDone.addEventListener('click', function(){deleteNoteDone(countActually)});
  const btnDelete = document.getElementById('btnDelete'+countActually);
  btnDelete.addEventListener('click', function(){deleteNote(countActually)});
  const btnEncryptDone = document.getElementById('btnEncryptDone'+countActually);
  btnEncryptDone.addEventListener('click', function(){encryptNote(countActually)});
  const btnDecipher = document.getElementById('desencriptar'+countActually);
  btnDecipher.addEventListener('click', function(){showNote(countActually)});
  const decodeBtn = document.getElementById('decodeBtn'+countActually);
  decodeBtn.addEventListener('click', function(){decodeDone(countActually)});
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+countActually);
  btnEncodeTwo.addEventListener('click', function(){encryptSave(countActually)});
};

const encryptNote = (countActually) => {
  const title = document.getElementById('textTitle'+countActually);
  const textNote = document.getElementById('textNote'+countActually);
  const keyNote = document.getElementById('key'+countActually);
  if (isNaN(keyNote.value) || keyNote.value.length === 0 || keyNote.value.split(' ').length-1 === keyNote.value.length) {
    alert('La clave debe ser compuesta sólo por números');
    keyNote.value = '';
  } else if (parseInt(keyNote.value) < 0) {
    alert('Sólo números positivos');
    keyNote.value = '';
  } else if (textNote.value.length === 0 || textNote.value.split(' ').length-1 === textNote.value.length) {
    alert('La nota está vacia');
    textNote.value = '';
  } else {
    if (title.value.length === 0 || title.value.split(' ').length-1 === title.value.length) {
      title.value = 'Nota '+countActually;
    }
    const btnDelete = document.getElementById('btnDelete'+countActually);
    btnDelete.classList.remove('hide');
    const btnDecipher = document.getElementById('desencriptar'+countActually);
    btnDecipher.classList.remove('hide');
    arrayNotes[countActually] = ['Nota'+countActually, title.value, textNote.value, parseInt(keyNote.value)];
    console.log(arrayNotes);
    const stringEncrypt = window.cipher.encode(keyNote.value, textNote.value);
    textNote.value = stringEncrypt;
    textNote.setAttribute('rows', '2');
    title.classList.add('frozenNote');
    textNote.classList.add('frozenNote');
    const sectionKey = document.getElementById('sectionKey'+countActually);
    sectionKey.classList.add('hide');
    title.disabled = true;
    textNote.disabled = true;
    keyNote.value = '';
  }
}

const showNote = (countActually) => {
  const inputKeyNote = document.getElementById('inputKeyNote'+countActually);
  inputKeyNote.classList.remove('hide');
  const btnDecodeOne = document.getElementById('desencriptar'+countActually);
  btnDecodeOne.classList.add('hide');
  const decodeBtn = document.getElementById('decodeBtn'+countActually);
  decodeBtn.classList.remove('hide');
}

const decodeDone = (countActually) => {
  const textNote = document.getElementById('textNote'+countActually);
  let keyShow = document.getElementById('keyShow'+countActually);
  if (isNaN(keyShow.value) || keyShow.value.length === 0 || keyShow.value.split(' ').length-1 === keyShow.value.length) {
    alert('La clave debe ser compuesta por números');
    keyShow.value = '';
  } else if (parseInt(keyShow.value) < 0) {
    alert('Sólo números positivos');
    keyShow.value = '';
  } else if (textNote.value.length === 0 || textNote.value.split(' ').length-1 === textNote.value.length) {
    alert('La nota está vacia');
  } else if (arrayNotes.length !== 0) {
    for (var i = 1; i < arrayNotes.length; i++) {
      if (arrayNotes[i][0] === 'Nota'+countActually) {
        if (arrayNotes[i][3] === parseInt(keyShow.value)) {
          const msjShow = window.cipher.decode(parseInt(keyShow.value), textNote.value);
          textNote.value = msjShow;
          const inputKeyNote = document.getElementById('inputKeyNote'+countActually);
          inputKeyNote.classList.add('hide');
          const decodeBtn = document.getElementById('decodeBtn'+countActually);
          decodeBtn.classList.add('hide');
          const btnEncodeTwo = document.getElementById('encodeBtnTwo'+countActually);
          btnEncodeTwo.classList.remove('hide');
          keyShow.value = '';
        } else {
          alert('Contraseña Incorrecta');
          keyShow.value = '';
        }
      }
    }
  }
}

const encryptSave = (countActually) => {
  const title = document.getElementById('textTitle'+countActually);
  const textNote = document.getElementById('textNote'+countActually);
  title.classList.remove('frozenNote');
  textNote.classList.remove('frozenNote');
  title.disabled = false;
  textNote.disabled = false;
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+countActually);
  btnEncodeTwo.classList.add('hide')
  const sectionKey = document.getElementById('sectionKey'+countActually);
  sectionKey.classList.remove('hide');
}

const deleteNote = (countActually) => {
  const inputKeyNote = document.getElementById('inputKeyNote'+countActually);
  inputKeyNote.classList.remove('hide');
  const deleteDone = document.getElementById('deleteDone'+countActually);
  deleteDone.classList.remove('hide');
  const btnDelete = document.getElementById('btnDelete'+countActually);
  btnDelete.classList.add('hide');
  const btnDecipher = document.getElementById('desencriptar'+countActually);
  btnDecipher.classList.add('hide');
}

const deleteNoteDone = (countActually) => {
  let keyShow = document.getElementById('keyShow'+countActually);
  for (var i = 1; i < arrayNotes.length; i++) {
    if (arrayNotes[i][0] === 'Nota'+countActually) {
      if (arrayNotes[i][3] === parseInt(keyShow.value)) {
        arrayNotes.splice(countActually,1);
        console.log(arrayNotes);
      } else {
        alert('Contraseña Incorrecta');
        keyShow.value = '';
      }
    }
  }
}

btnNewNote.addEventListener('click', startNote);
