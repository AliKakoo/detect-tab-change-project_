const $ = document;

const projectState = $.querySelector('span')

$.addEventListener("visibilitychange", () => {
  if ($.visibilityState === 'visible') {
    $.title ="Active Tab "
    
} else {
    
    $.title ="InActive Tab "


  }

  projectState.innerHTML = '(Faild)'
  projectState.classList.add('faild')

});
