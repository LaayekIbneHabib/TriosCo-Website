window.onload = init();

function init() {
  document.getElementsByClassName("menu-toggle")[0].onclick = show;
}

function show() {
  console.log(document.getElementsByTagName("nav")[0].className);
  if (document.getElementsByTagName("nav")[0].className === "menu") {
    document.getElementsByTagName("nav")[0].className += " active";
  } else if (
    document.getElementsByTagName("nav")[0].className === "menu active"
  ) {
    document.getElementsByTagName("nav")[0].className = "menu";
  }
}

// load more
function loadMore() {
  document.getElementById("load-more-section").style.display = "block";
}
// end

// load more tv
function loadMoreTv() {
  document.getElementById("load-more-section-tv").style.display = "block";
}
// end

// load more mv
function loadMoreMv() {
  document.getElementById("load-more-section-mv").style.display = "block";
}
// end

// sorting
// show all
function showAll() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "block";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "none";
}
// end

// consulting
function consulting() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "block";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "none";
}
// end

// design
function design() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "block";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "none";
}
// end

// marketing
function marketing() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "block";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "none";
}
// end

// shine online
function shineOnline() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "block";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "none";
}
// end

// our studios
function ourStudios() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "block";
  document.getElementById("website").style.display = "none";
}
// end

// website
function website() {
  document.getElementById("our-work").style.display = "none";
  document.getElementById("showAll").style.display = "none";
  document.getElementById("consulting").style.display = "none";
  document.getElementById("design").style.display = "none";
  document.getElementById("marketing").style.display = "none";
  document.getElementById("shineOnline").style.display = "none";
  document.getElementById("ourStudios").style.display = "none";
  document.getElementById("website").style.display = "block";
}
// end
// end

///////////////////////////////////////////////////////////////////////////////////////

// sorting tv
// show all tv
function showAllTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "block";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "none";
}
// end

// consulting tv
function consultingTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "block";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "none";
}
// end

// design tv
function designTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "block";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "none";
}
// end

// marketing tv
function marketingTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "block";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "none";
}
// end

// shine online tv
function shineOnlineTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "block";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "none";
}
// end

// our studios tv
function ourStudiosTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "block";
  document.getElementById("website-tv").style.display = "none";
}
// end

// website tv
function websiteTv() {
  document.getElementById("our-work-tv").style.display = "none";
  document.getElementById("showAll-tv").style.display = "none";
  document.getElementById("consulting-tv").style.display = "none";
  document.getElementById("design-tv").style.display = "none";
  document.getElementById("marketing-tv").style.display = "none";
  document.getElementById("shineOnline-tv").style.display = "none";
  document.getElementById("ourStudios-tv").style.display = "none";
  document.getElementById("website-tv").style.display = "block";
}
// end
// end

/////////////////////////////////////////////////////////////////////////////////////////

// sorting mv
// show all
function showAllMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "block";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "none";
}
// end

// consulting
function consultingMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "block";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "none";
}
// end

// design
function designMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "block";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "none";
}
// end

// marketing
function marketingMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "block";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "none";
}
// end

// shine online
function shineOnlineMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "block";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "none";
}
// end

// our studios
function ourStudiosMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "block";
  document.getElementById("website-mv").style.display = "none";
}
// end

// website
function websiteMv() {
  document.getElementById("our-work-mv").style.display = "none";
  document.getElementById("showAll-mv").style.display = "none";
  document.getElementById("consulting-mv").style.display = "none";
  document.getElementById("design-mv").style.display = "none";
  document.getElementById("marketing-mv").style.display = "none";
  document.getElementById("shineOnline-mv").style.display = "none";
  document.getElementById("ourStudios-mv").style.display = "none";
  document.getElementById("website-mv").style.display = "block";
}
// end
// end