function collapseCurrentAct() {
  console.log('Collapsing Act');
  const tgt = document.getElementById('editact');
  if (tgt) {
    tgt.remove();
  }
}

export default collapseCurrentAct;
