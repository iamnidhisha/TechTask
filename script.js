function selectOption(selected) {
    document.querySelectorAll('.option').forEach(option => {
      option.classList.remove('active');
      option.querySelector('input').checked = false;
    });
  
    selected.classList.add('active');
    selected.querySelector('input').checked = true;
  
    const total = selected.getAttribute('data-total');
    document.getElementById('total-price').textContent = parseFloat(total).toFixed(2);
}

document.getElementById('bundle-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const selectedOption = document.querySelector('.option.active');
    const pairText = selectedOption.querySelector('h3').innerText.trim();
    const totalPrice = selectedOption.getAttribute('data-total');
  
    const selects = selectedOption.querySelectorAll('select');
    const selections = [];
  
    for (let i = 0; i < selects.length; i += 2) {
      const size = selects[i].value;
      const color = selects[i + 1].value;
      selections.push({ size, color });
    }
  
    console.log("Bundle Selected:", pairText);
    console.log("Total Price: DKK", totalPrice);
    console.log("Selections:", selections);
  
    alert(`Selected: ${pairText}\nTotal: DKK ${totalPrice}\n` +
          selections.map((s, i) => `#${i + 1} - Size: ${s.size}, Color: ${s.color}`).join('\n'));
  });
  
  