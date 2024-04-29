const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');


const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');


function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabpanels__item--active');
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elsAccordionItem) {
    elsAccordionItem.classList.remove('accordion__item--open');
  });
}

elsTabLink.forEach(function (elTabLink) {
 elTabLink.addEventListener('click', function (evt) {
  // Prevent page move
  evt.preventDefault();

  //Remove active class form tabs__item elements
    deactivateTabItems();

  // Add active class to current tabs__item
  elTabLink.parentElement.classList.add('tabs__item--active');

// Remove active class from tabs__panel elements
  deactivateTabPanels();

// Show active tab panel
// const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
  const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
  elTargetPanel.classList.add('tabpanels__item--active');
 });
});

elsAccordionItemToggler.forEach(function (elsAccordionItemToggler) {
  elsAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems();

    elsAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  });
});
