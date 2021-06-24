export default function setupAreaListener(targetRef, contexts = []) {
  const obj = targetRef.current.getBoundingClientRect();

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const leftDistance = obj.x;
  const rightDistance = windowWidth - leftDistance - obj.width;
  const topDistance = obj.y;
  const bottomDistance = windowHeight - topDistance - obj.height;

  function setAreaToResetContexts(e) {
    if (
      e.clientX < leftDistance ||
      e.clientX > windowWidth - rightDistance ||
      e.clientY < topDistance ||
      e.clientY > windowHeight - bottomDistance
    ) {
      contexts.map((context) => {
        context('');
      });
    }
  }

  window.addEventListener('click', setAreaToResetContexts);

  return () => window.removeEventListener('click', setAreaToResetContexts);
}
