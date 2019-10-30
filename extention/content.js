console.log('start');

const trackedSelector = '.applicant-resumes-action_no-mobile';
const buttonSelector = '.applicant-resumes-update-button';

// Select target elements for tracking(wich displayed on desktop fersion)
const elements = Array.from(document.querySelectorAll(trackedSelector));
// that elements have update button as a child or subChild in target element
const trackedElements = elements.filter((element) => element.querySelector(buttonSelector));

// Configure observer (what mutations track)
const config = {
  attributes: true,
  subtree: true,
};

// Chek element that has update button enable(not disable) and push it
const pushButtonIfEnable = (element, selector) => {
  const { className } = element.querySelector(selector);

  if (!className.includes('disable')) {
    element.querySelector('button').click();
  }
};

// Callback function which to be called
const updateButtonPush = (mutations) => {
  mutations.forEach(() => {
    trackedElements.forEach((tracked) => pushButtonIfEnable(tracked, buttonSelector));
  });
};

// Create an observer instance with callback function
const observer = new MutationObserver(updateButtonPush);

// Click update buttons if buttons enable
// Getting started monitoring target element changes by MutationObserver
trackedElements.forEach((tracked) => {
  pushButtonIfEnable(tracked, buttonSelector);

  observer.observe(tracked, config);
});
