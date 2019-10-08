const arrayNotes = [];
const btnNewNote = document.getElementById('btnNewNote');
const notes = document.getElementById('notes');
let count = 0;

const startNote = () => {
  count++;
  const note = document.createElement('form');
  note.setAttribute('id', 'note'+ count);
  note.setAttribute('class', 'newNote');
  note.innerHTML = '<textarea value="Hola" id="textTitle'+ count+'" placeholder="Título" class="titleNote" name="name" rows="1" cols="80"></textarea>' +
  '<textarea id="textNote'+ count+'" placeholder="Escribe aquí..." class="textNote" rows="8" name="name" rows="8" cols="80"></textarea>'+
  '<button id="desencriptar'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<div id="inputKeyNote'+count+'" class="textFunction hide">'+
    '<span>Clave :</span><input id="keyShow'+count+'" class="keyInput" type="text" name="" value="">'+
  '</div>'+
  '<button id="decodeBtn'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<button id="encodeBtnTwo'+count+'" class="buttonFunction hide" type="button" name="button">Encriptar</button>'+
  '<section id="sectionKey'+count+'">'+
    '<div class="textFunction">'+
      '<p>* Escoge un número de 2 dígitos como clave única para ésta nota.</p>'+
      '<span>Clave :</span><input id="key'+count+'" class="keyInput" type="text" name="" value="">'+
    '</div>'+
    '<button id="btnEncryptDone'+count+'" class="buttonFunction" type="button" name="button">Encriptar</button>'+
  '</section>';
  notes.appendChild(note);
  const btnEncryptDone = document.getElementById('btnEncryptDone'+count);
  const countActually = count;
  btnEncryptDone.addEventListener('click', function(){encryptNote(countActually)});
  const btnDecipher = document.getElementById('desencriptar'+countActually);
  btnDecipher.addEventListener('click', function(){showNote(countActually)});
  const decodeBtn = document.getElementById('decodeBtn'+countActually);
  decodeBtn.addEventListener('click', function(){decodeDone(countActually)});
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+countActually);
  btnEncodeTwo.addEventListener('click', function(){encryptSave(countActually)});
};

const encryptNote = (countActually) => {
  const btnDecipher = document.getElementById('desencriptar'+countActually);
  btnDecipher.classList.remove('hide');
  const title = document.getElementById('textTitle'+countActually);
  const textNote = document.getElementById('textNote'+countActually);
  const keyNote = document.getElementById('key'+countActually);
  arrayNotes.push([title.value, textNote.value, parseInt(keyNote.value)]);
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
  const msjShow = window.cipher.decode(parseInt(keyShow.value), textNote.value);
  textNote.value = msjShow;
  const inputKeyNote = document.getElementById('inputKeyNote'+countActually);
  inputKeyNote.classList.add('hide');
  const decodeBtn = document.getElementById('decodeBtn'+countActually);
  decodeBtn.classList.add('hide');
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+countActually);
  btnEncodeTwo.classList.remove('hide');
  keyShow.value = '';
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

btnNewNote.addEventListener('click', startNote);
