import Notiflix from 'notiflix';

const refs = {
  delayInp: document.querySelector('input[name="delay"]'),
  stepInp: document.querySelector('input[name="step"]'),
  amountInp: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

const userAmount = refs.amountInp.value;
const userDelay = refs.delayInp.value;
const stepDelay = refs.stepInp.value;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay }); // Reject
      }
    }, userDelay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const promiseGenerate = (delay, step, amount) => {
  let delayNext = 0;
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      delayNext = delay;
    } else {
      delayNext = Number(delay) + Number(step);
    }
    createPromise(i, delayNext);
  }
};

function handleSubmit(e) {
  e.preventDefault();

  const userAmount = refs.amountInp.value;
  const userDelay = refs.delayInp.value;
  const stepDelay = refs.stepInp.value;
  promiseGenerate(userDelay, stepDelay, userAmount);
}

refs.submitBtn.addEventListener('click', handleSubmit);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
