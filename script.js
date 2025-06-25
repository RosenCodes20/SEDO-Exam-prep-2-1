// Base functionality: add task, toggle complete, delete on double-click

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) {
    alert('Cannot add an empty task');
    return;
  }
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
});

// Toggle complete
list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

// small commit 2
// Delete on double-click
list.addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
// small commit 3