const arrayNotes = [];
let countNoteNum = 0;
const btnNewNote = document.getElementById('btnNewNote');
const notes = document.getElementById('notes');
let count = -1;
const encryptNote = (countActually) => {
  const msjError = document.getElementById(`msjError${countActually}`);
  const title = document.getElementById(`textTitle${countActually}`);
  const textNote = document.getElementById(`textNote${countActually}`);
  const keyNote = document.getElementById(`key${countActually}`);
  if (isNaN(keyNote.value) || keyNote.value.length === 0 || keyNote.value.split(' ').length - 1 === keyNote.value.length) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'La clave debe ser compuesta sólo por números';
    keyNote.value = '';
  } else if (parseInt(keyNote.value, 0) < 0) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'Ingresar sólo números positivos';
    keyNote.value = '';
  } else if (textNote.value.length === 0 || textNote.value.split(' ').length - 1 === textNote.value.length) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'La nota está vacia';
    textNote.value = '';
  } else {
    if (title.value.length === 0 || title.value.split(' ').length - 1 === title.value.length) {
      title.value = `Nota ${countNoteNum}`;
    }
    const btnDelete = document.getElementById(`btnDelete${countActually}`);
    btnDelete.classList.remove('hide');
    const btnDecipher = document.getElementById(`desencriptar${countActually}`);
    btnDecipher.classList.remove('hide');
    arrayNotes[countActually] = [`Nota${countActually}`, title.value, textNote.value, parseInt(keyNote.value, 0)];
    const stringEncrypt = window.cipher.encode(keyNote.value, textNote.value);
    textNote.value = stringEncrypt;
    textNote.setAttribute('rows', '2');
    title.classList.add('frozenNoteTitle');
    textNote.classList.add('frozenNoteText');
    const sectionKey = document.getElementById(`sectionKey${countActually}`);
    sectionKey.classList.add('hide');
    title.disabled = true;
    textNote.disabled = true;
    keyNote.value = '';
  }
};
const showNote = (countActually) => {
  const form = document.getElementById(`note${countActually}`);
  form.classList.remove('formNote');
  form.classList.add('newNote');
  const btnDelete = document.getElementById(`btnDelete${countActually}`);
  btnDelete.classList.add('hide');
  const inputKeyNote = document.getElementById(`inputKeyNote${countActually}`);
  inputKeyNote.classList.remove('hide');
  const btnDecodeOne = document.getElementById(`desencriptar${countActually}`);
  btnDecodeOne.classList.add('hide');
  const decodeBtn = document.getElementById(`decodeBtn${countActually}`);
  decodeBtn.classList.remove('hide');
};
const decodeDone = (countActually) => {
  const form = document.getElementById(`note${countActually}`);
  form.classList.remove('newNote');
  form.classList.add('formNote');
  const btnDelete = document.getElementById(`btnDelete${countActually}`);
  btnDelete.classList.remove('hide');
  const msjError = document.getElementById(`msjError${countActually}`);
  const textNote = document.getElementById(`textNote${countActually}`);
  const keyShow = document.getElementById(`keyShow${countActually}`);
  if (isNaN(keyShow.value) || keyShow.value.length === 0 || keyShow.value.split(' ').length - 1 === keyShow.value.length) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'La clave debe ser compuesta sólo por números';
    keyShow.value = '';
  } else if (parseInt(keyShow.value, 0) < 0) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'Ingresar sólo números positivos';
    keyShow.value = '';
  } else if (textNote.value.length === 0 || textNote.value.split(' ').length - 1 === textNote.value.length) {
    msjError.classList.remove('hide');
    msjError.innerHTML = 'La nota está vacia';
    textNote.value = '';
  } else if (arrayNotes.length !== 0) {
    for (let i = 0; i < arrayNotes.length; i += 1) {
      if (arrayNotes[i][0] === `Nota${countActually}`) {
        if (arrayNotes[i][3] === parseInt(keyShow.value, 0)) {
          msjError.classList.add('hide');
          const msjShow = window.cipher.decode(parseInt(keyShow.value, 0), textNote.value);
          textNote.value = msjShow;
          const inputKeyNote = document.getElementById(`inputKeyNote${countActually}`);
          inputKeyNote.classList.add('hide');
          const decodeBtn = document.getElementById(`decodeBtn${countActually}`);
          decodeBtn.classList.add('hide');
          const btnEncodeTwo = document.getElementById(`encodeBtnTwo${countActually}`);
          btnEncodeTwo.classList.remove('hide');
          keyShow.value = '';
        } else {
          msjError.classList.remove('hide');
          msjError.innerHTML = 'Contraseña Incorrecta';
          keyShow.value = '';
        }
      }
    }
  }
};
const encryptSave = (countActually) => {
  const form = document.getElementById(`note${countActually}`);
  form.classList.remove('formNote');
  form.classList.add('newNote');
  const btnDelete = document.getElementById(`btnDelete${countActually}`);
  btnDelete.classList.add('hide');
  const title = document.getElementById(`textTitle${countActually}`);
  const textNote = document.getElementById(`textNote${countActually}`);
  title.classList.remove('frozenNoteTitle');
  textNote.classList.remove('frozenNoteText');
  title.disabled = false;
  textNote.disabled = false;
  const btnEncodeTwo = document.getElementById(`encodeBtnTwo${countActually}`);
  btnEncodeTwo.classList.add('hide');
  const sectionKey = document.getElementById(`sectionKey${countActually}`);
  sectionKey.classList.remove('hide');
};
const deleteNote = (countActually) => {
  const form = document.getElementById(`note${countActually}`);
  form.classList.remove('formNote');
  form.classList.add('newNote');
  const encodeBtnTwo = document.getElementById(`encodeBtnTwo${countActually}`);
  encodeBtnTwo.classList.add('hide');
  const inputKeyNote = document.getElementById(`inputKeyNote${countActually}`);
  inputKeyNote.classList.remove('hide');
  const deleteDone = document.getElementById(`deleteDone${countActually}`);
  deleteDone.classList.remove('hide');
  const btnDelete = document.getElementById(`btnDelete${countActually}`);
  btnDelete.classList.add('hide');
  const btnDecipher = document.getElementById(`desencriptar${countActually}`);
  btnDecipher.classList.add('hide');
};
const deleteNoteDone = (countActually) => {
  const msjError = document.getElementById(`msjError${countActually}`);
  const form = document.getElementById(`note${countActually}`);
  const section = document.getElementById('notes');
  const keyShow = document.getElementById(`keyShow${countActually}`);
  for (let i = 0; i < arrayNotes.length; i += 1) {
    if (arrayNotes[i][0] === `Nota${countActually}`) {
      if (arrayNotes[i][3] === parseInt(keyShow.value, 0)) {
        msjError.classList.add('hide');
        arrayNotes.splice(i, 1);
        section.removeChild(form);
        count -= 1;
      } else {
        msjError.classList.remove('hide');
        msjError.innerHTML = 'Contraseña Incorrecta';
        keyShow.value = '';
      }
    }
  }
};
const startNote = () => {
  count += 1;
  countNoteNum += 1;
  const note = document.createElement('form');
  note.setAttribute('id', `note${count}`);
  note.setAttribute('class', 'formNote');
  note.innerHTML = `<button id="btnDelete${count}" class="btnDelete" type="button" name="button">x</button>
  <textarea value="Hola" id="textTitle${count}" placeholder="Título" class="titleNote" name="name" rows="1" cols="80"></textarea>
  <textarea id="textNote${count}" placeholder="Escribe aquí..." class="textNote" rows="8" name="name" rows="8" cols="80"></textarea>
  <button id="desencriptar${count}" class="buttonFunction hide" type="button" name="button">Desencriptar</button>
  <div id="inputKeyNote${count}" class="textFunction hide">
    <span>Clave :</span><input id="keyShow${count}" class="keyInput" type="text" name="" value="">
  </div>
  <p id="msjError${count}" class="msjError hide">Mensaje de error</p>
  <button id="deleteDone${count}" class="buttonFunction hide" type="button" name="button">Eliminar</button>
  <button id="decodeBtn${count}" class="buttonFunction hide" type="button" name="button">Desencriptar</button>
  <button id="encodeBtnTwo${count}" class="buttonFunction hide" type="button" name="button">Editar y Encriptar</button>
  <section id="sectionKey${count}">
    <div id="divKey${count}" class="textFunction">
      <p>* Escoge tu clave numérica para ésta nota.</p>
      <span>Clave :</span><input id="key${count}" class="keyInput" type="text" name="" value="">
    </div>
    <button id="btnEncryptDone${count}" class="buttonFunction" type="button" name="button">Encriptar</button>
  </section>`;
  notes.appendChild(note);
  const countActually = count;
  const deleteDone = document.getElementById(`deleteDone${countActually}`);
  deleteDone.addEventListener('click', () => { deleteNoteDone(countActually); });
  const btnDelete = document.getElementById(`btnDelete${countActually}`);
  btnDelete.addEventListener('click', () => { deleteNote(countActually); });
  const btnEncryptDone = document.getElementById(`btnEncryptDone${countActually}`);
  btnEncryptDone.addEventListener('click', () => { encryptNote(countActually); });
  const btnDecipher = document.getElementById(`desencriptar${countActually}`);
  btnDecipher.addEventListener('click', () => { showNote(countActually); });
  const decodeBtn = document.getElementById(`decodeBtn${countActually}`);
  decodeBtn.addEventListener('click', () => { decodeDone(countActually); });
  const btnEncodeTwo = document.getElementById(`encodeBtnTwo${countActually}`);
  btnEncodeTwo.addEventListener('click', () => { encryptSave(countActually); });
};
btnNewNote.addEventListener('click', startNote);
