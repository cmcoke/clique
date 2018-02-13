import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class FixedHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.activeSection = $(".active");
    this.headerLinks = $(".menu a");
    this.activeSectionWaypoints();
    this.addSmoothScrolling();
    this.refreashWaypoint();
  }

  refreashWaypoint() {
    this.lazyImages.on("load", function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  activeSectionWaypoints() {
    var that = this;
    this.activeSection.each(function() {
      var currentPageSection = this
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "11%"
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-11%"
      });
    });
  }

}


export default FixedHeader;
