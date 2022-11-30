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
let promiseCounter = 0;

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
    .catch((position, delay) => {Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// const intervalId = setInterval(() => {
//   if (promiseCounter === USER_AMOUNT) {
//     clearInterval(intervalId);
//     return;
//   }
//   promiseCounter += 1;
// }, STEP_DELAY);
refs.submitBtn.addEventListener('click', createPromise);

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
