// Set url for target page
const urlPattern = '://hh.ru/applicant/resumes';

// Callback function for triggering and startup content script on target page
const handleUpdated = (tabId, changeInfo) => {
  if (changeInfo.url && changeInfo.url.includes(urlPattern)) {
    const runContentScript = () => chrome.tabs
      .executeScript(tabId, { file: 'content.js', runAt: 'document_end' });

    setTimeout(runContentScript, 10000);
  }
};

// Callback create tab with target page
const pageCreate = () => chrome.tabs.create({ url: 'https://hh.ru/applicant/resumes' });

// Run callback when new tab is open
chrome.tabs.onUpdated.addListener(handleUpdated);

// Open tab with target page when push extention button
chrome.browserAction.onClicked.addListener(pageCreate);
