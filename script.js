function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += [...Array(4)].map(() => chars[Math.floor(Math.random() * chars.length)]).join('') + '-';
  }
  return code.slice(0, -1);
}

function selectCard(name) {
  const code = generateCode();
  document.getElementById('codeBox').textContent = name + ' Code: ' + code;
  document.getElementById('continueButton').disabled = false;
  localStorage.setItem('giftCode', code);
  localStorage.setItem('selectedBrand', name);
}

function goToRedeem() {
  window.location.href = 'redeem.html';
}

window.onload = function () {
  if (window.location.pathname.includes('redeem.html')) {
    const code = localStorage.getItem('giftCode') || 'XXXX-XXXX-XXXX-XXXX';
    document.getElementById('codeInput').value = code;
  }
};
