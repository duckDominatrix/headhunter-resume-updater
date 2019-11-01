const trackedSelector = '.applicant-resumes-action_no-mobile';
const buttonSelector = '.applicant-resumes-update-button';

// Select target elements for tracking(wich displayed on desktop fersion)
const elements = Array.from(document.querySelectorAll(trackedSelector));

// Filtering the elements that have update button as a child or sub child in target element
const trackedElements = elements.filter((element) => element.querySelector(buttonSelector));

// Configure observer (what mutations track)
const config = {
  childList: true,
  subtree: true,
};

// Checking the class of an element that it is not disabled
const hasNotDisable = (className) => !className.includes('disable');

// Checking the element that has update button enable(not disable) and push it
function pushButtonIfEnable(element, selector) {
  const { className } = element.querySelector(selector);
  if (hasNotDisable(className)) {
    const button = element.querySelector('button');
    button.click();
  }
}

// Callback function which to be called
function updateButtonPush(mutations) {
  mutations.forEach((mutation) => {
    const { type, target, addedNodes } = mutation;
    if (type && addedNodes.length) {
      pushButtonIfEnable(target, buttonSelector);
    }
  });
}

// Create an observer instance with callback function
const observer = new MutationObserver(updateButtonPush);

// Click update buttons if buttons enable
// Getting started monitoring target element changes by MutationObserver
trackedElements.forEach((tracked) => {
  pushButtonIfEnable(tracked, buttonSelector);
  observer.observe(tracked, config);
});
