const $ = (s) => document.querySelector(s);
const toast = $('#toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
$('#year').textContent = new Date().getFullYear();
$('#menuBtn').addEventListener('click',()=>$('#navLinks').classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('#navLinks').classList.remove('open')));
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{showToast(`${a.dataset.service} selected. Customer ordering will work after backend setup.`)}));
$('#accountBtn').addEventListener('click',()=>{$('#accountNotice').textContent='Next: connect hosting, Supabase, payment provider, and service supplier.';showToast('Setup checklist: hosting, database, payments, and service provider.')});
const canned={
 'How do I place an order?':'Choose a service, review its details, enter the required information, and confirm once ordering is enabled.',
 'How can I check my order status?':'Order tracking will be available after customer accounts and the order database are connected.',
 'How do payments work?':'Secure checkout is not connected in this preview. Never send card PINs or passwords to support.'
};
document.querySelectorAll('[data-chat]').forEach(b=>b.addEventListener('click',()=>{ $('#chatInput').value=b.dataset.chat; showToast(canned[b.dataset.chat] || 'This is a preview. Connect an AI provider for live support.') }));
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();const v=$('#chatInput').value.trim();if(!v)return;showToast('Support preview only: connect an AI service to answer questions live.');$('#chatInput').value=''});
