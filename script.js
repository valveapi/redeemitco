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
  localStorage.setItem('giftCode', code);
}

function goToRedeem() {
  window.location.href = 'redeem.html';
}
