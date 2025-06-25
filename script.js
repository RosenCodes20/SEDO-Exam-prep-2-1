const refs = {
  input: '#task-input',
  addBtn: '#add-btn',
  list: '#task-list',
  clearBtn: '#clear-completed-btn'
};

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

// Add task
$(refs.addBtn).addEventListener('click', () => {
  const text = $(refs.input).value.trim();
  if (!text) return alert('Cannot add an empty task');
  const li = document.createElement('li');
  li.textContent = text;
  $(refs.list).appendChild(li);
  $(refs.input).value = '';
});

// Delegate toggles & deletes
$(refs.list).addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

$(refs.list).addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// Clear completed
if ($(refs.clearBtn)) {
  $(refs.clearBtn).addEventListener('click', () => {
    $all(`${refs.list} li.completed`).forEach(li => li.remove());
  });
}